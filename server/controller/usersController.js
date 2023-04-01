const db = require('../database');
const usersController = {};


usersController.verifyUser = async (req, res, next) => {
    const {username, password} = req.body
    console.log(req.body);

    try {
        const data = await db.query(`SELECT password from users WHERE username='${username}'`);
        const pw = data.rows[0].password
        const firstname = await db.query(`SELECT first_name from users where username='${username}'`)
        if (pw === password){
            res.locals.verification = true
            res.locals.first_name = firstname.rows[0].first_name
        } else res.locals.verification = false;
    } catch (error) {
        console.log(error)
        res.locals.verification = false;
    }
    console.log(res.locals, 'exiting verify user')
    return next();
}

//delete a column

usersController.registerUser = async (req, res, next) => {
    const {name, username, password} = req.body;

    try {
        const params = [name, username, password, 230];
        await db.query((`INSERT INTO users (first_name, username, password, id) VALUES ($1, $2, $3, $4) RETURNING *`), params)
        next()
    } catch (error) {
        console.log(error)
    }
}


module.exports = usersController
