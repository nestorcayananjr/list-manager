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

studentController.getStudentById = async (req, res, next) => {
    const {studentId} = req.params;
    try {
        const result = await db.query((`SELECT * from students where student_id=${studentId}`))
        res.locals.individualStudent = result.rows;
    } catch (error) {
        console.log(error)
    }
    return next();
}

//create a new student
studentController.createNewStudent = async (req, res, next) => {
    const {
        first_name,
        last_name,
        youngest_and_only,
        grade_level,
        homeroom,
    } = req.body;

    try {
        const params = [first_name, last_name, youngest_and_only, homeroom];
        const insertAndGetStudent_Id = await db.query((`INSERT INTO students (first_name, last_name, youngest_and_only, homeroom) VALUES ($1, $2, $3, $4) RETURNING student_id`), params)
        const studentId = insertAndGetStudent_Id.rows[0].student_id;
        console.log(studentId)
        await db.query(`UPDATE students SET "${grade_level}"=true WHERE student_id=${studentId}`)
        next()
    } catch (error) {
        console.log(error)
    }
}

//edit a student
studentController.editStudent = async (req, res, next) => {
    console.log(req.body)
    const {
        student_id,
        first_name,
        last_name,
        youngest_and_only,
        sixth,
        seventh,
        eighth,
        homeroom,
    } = req.body;

    console.log(student_id)
    try {
        const params = [student_id, first_name, last_name, youngest_and_only, homeroom, sixth, seventh, eighth];
        await db.query((`UPDATE students SET first_name=$2, last_name=$3, youngest_and_only=$4, homeroom=$5, sixth=$6, seventh=$7, eighth=$8 WHERE student_id=$1;`), params)
        }   
    catch (error) {
        console.log(error)
    }
    return next()
}

//delete a student
studentController.deleteStudent = async (req, res, next) => {
    const {student_id} = req.body;
    try {
        const params = [id];
        await db.query((`DELETE FROM students WHERE student_id=$1`), params)
        return next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = studentController


