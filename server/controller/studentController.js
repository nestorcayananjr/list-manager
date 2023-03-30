const db = require('../database');
const studentController = {};

//get the student data
studentController.getStudents = async (req, res, next) => {
    try {
        const result = await db.query("SELECT * from students")
        res.locals.students = result.rows
    } catch (error){
        console.log(error)
    }
    return next()
}

//create a new student
studentController.createNewStudent = async (req, res, next) => {
    const {
        id,
        first_name,
        last_name,
        youngest_and_only,
        grade_level,
        homeroom,
    } = req.body;

    try {
        const params = [id, first_name, last_name, youngest_and_only, homeroom];
        await db.query((`INSERT INTO students (id, first_name, last_name, youngest_and_only, homeroom) VALUES ($1, $2, $3, $4, $5) RETURNING *`), params)
        await db.query(`UPDATE students SET "${grade_level}"=true WHERE id=${id}`)
        next()
    } catch (error) {
        console.log(error)
    }
}

//edit a student
studentController.editStudent = async (req, res, next) => {
    const {
        id,
        first_name,
        last_name,
        youngest_and_only,
        grade_level,
        homeroom,
    } = req.body;

    try {
        const params = [id, first_name, last_name, youngest_and_only, homeroom];
        await db.query((`UPDATE students SET (first_name=$2, last_name=$3, youngest_and_only=$4, homeroom=$5) WHERE id=$1 VALUES ($1, $2, $3, $4, $5) RETURNING *`), params);
        next()
    } catch (error) {
        console.log(error)
    }
}

//delete a student
studentController.deleteStudent = async (req, res, next) => {
    const {id} = req.body;
    try {
        const params = [id];
        await db.query(("DELETE FROM students WHERE id="), params)
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = studentController


