const express = require('express');
const router = express.Router();
const listController = require ('../controller/listController.js');


router.get('/gradeLevel/:gradeLevel', listController.getByGradeLevel, (req, res) => {
  try {
    console.log(res.locals.list)
    res.status(200).json(res.locals.list);
  } catch (error) {
    res.status(error.status || 500);
  }
});

router.get('/homeroom/:homeroom', listController.getByHomeroom, (req, res) => {
    try {
      console.log(res.locals.list)
      res.status(200).json(res.locals.list);
    } catch (error) {
      res.status(error.status || 500);
    }
  });

router.post('/', listController.createNewList, (req, res) => {
    try {
        console.log(res.locals.list)
        res.status(200).json(res.locals.list);
    } catch (error) {
        res.status(error.status || 500)
    }
})


module.exports = router;
