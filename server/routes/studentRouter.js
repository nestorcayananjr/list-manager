const express = require('express');
const router = express.Router();
const studentController = require ('../controller/studentController.js');

//create a new student
router.post('/', studentController.createNewStudent, (req, res) => {
    try {
        res.status(200).send('succesfully creatred student')
    } catch (error) {
        res.status(error.status || 500)
    }
})

//
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
