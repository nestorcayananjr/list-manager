const express = require('express');
const router = express.Router();
const studentController = require ('../controller/studentController.js');


router.get('/', studentController.getStudents, (req, res) => {
    try {
        res.status(200).json(res.locals.students)
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
router.patch('/', studentController.editStudent, (req, res) => {
    try {
        res.status(200).send('successfully edited a student')
    } catch (error) {
        res.status(error.status || 500)
    }
})

//delete a student
router.delete('/', studentController.deleteStudent, (req, res) => {
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
