const express = require('express');
const router = express.Router();
const listController = require ('../controller/listController.js');

//get lists by gradelvel
router.get('/gradeLevel/:gradeLevel', listController.getByGradeLevel, (req, res) => {
  try {
    console.log(res.locals.list)
    res.status(200).json(res.locals.list);
  } catch (error) {
    res.status(error.status || 500);
  }
});

//get lists by homeroom
router.get('/homeroom/:homeroom', listController.getByHomeroom, (req, res) => {
    try {
      console.log(res.locals.list)
      res.status(200).json(res.locals.list);
    } catch (error) {
      res.status(error.status || 500);
    }
  });

//create a new list
router.post('/', listController.createNewList, (req, res) => {
    try {
        console.log(res.locals.list)
        res.status(200).json(res.locals.list);
    } catch (error) {
        res.status(error.status || 500)
    }
});

// //crat
// router.post('/students', listController.createNewStudent, (req, res) => {
//     try {
//         res.status(200).send('succesfully creatred student')
//     } catch (error) {
//         res.status(error.status || 500)
//     }
// })

// router.delete('/students', listController.deleteStudent, (req, res) => {
//     try {
//         res.status(200).send('successfully deleted student')
//     } catch (error) {
//         res.status(error.status || 500)
//     }
// })

// router.put('/', listController.editList, (req, res) => {
//     try {
//         console.log('put request received')
//     } catch (error) {
//         res.status(error.status || 500)
//     }
// })


module.exports = router;
