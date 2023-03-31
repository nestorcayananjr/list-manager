const express = require('express');
const router = express.Router();
const studentController = require ('../controller/studentController.js');


//get all the students
router.get('/', studentController.getStudents, (req, res) => {
    try {
        res.status(200).json(res.locals.students)
    } catch (error) {
        res.status(error.status || 500)
    }
})

//get by id
router.get('/studentId/:studentId', studentController.getStudentById, (req, res) => {
    
    try {
        res.status(200).json(res.locals.individualStudent)
    } catch (error) {
        res.status(error.status || 500)
    }
})

//create a new student
router.post('/', studentController.createNewStudent, (req, res) => {
    try {
        res.status(200).send('succesfully creatred student')
    } catch (error) {
        res.status(error.status || 500)
    }
})

//edit a student
router.patch('/', studentController.editStudent, studentController.getStudents, (req, res) => {
    try {
        res.status(200).json(res.locals.students)
    } catch (error) {
        res.status(error.status || 500)
    }
})

//delete a student
router.delete('/', studentController.deleteStudent, studentController.getStudents, (req, res) => {
    try {
        res.status(200).send('successfully deleted student')
    } catch (error) {
        res.status(error.status || 500)
    }
})

// router.put('/', listController.editList, (req, res) => {
//     try {
//         console.log('put request received')
//     } catch (error) {
//         res.status(error.status || 500)
//     }
// })


module.exports = router;
