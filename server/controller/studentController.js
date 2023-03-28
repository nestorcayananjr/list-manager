const db = require('../database');
const studentController = {};

studentController.createNewStudent = async (req, res, next) => {
    const {
        id,
        first_name,
        last_name,
        grade_level,
        homeroom,
    } = req.body;

    try {
        const params = [id, first_name, last_name, grade_level, homeroom];
        await db.query((`INSERT INTO students (id, first_name, last_name, grade_level, homeroom) VALUES ($1, $2, $3, $4, $5) RETURNING *`), params)
        next()
    } catch (error) {
        console.log(error)
    }
}

studentController.deleteStudent = async (req, res, next) => {
    const {first_name, last_name} = req.body;
    try {
        const params = [first_name, last_name];
        await db.query(("DELETE FROM students WHERE first_name=$1 AND last_name=$2"), params)
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = studentController


