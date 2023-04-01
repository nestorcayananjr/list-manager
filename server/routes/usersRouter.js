const express = require('express');
const router = express.Router();
const usersController = require ('../controller/usersController.js');

router.post('/', usersController.verifyUser, (req, res)=> {
    try {
        res.status(200).json(res.locals)
    } catch (error) {
        res.status(error.status || 500)
    }
})


router.post('/', usersController.registerUser, (req, res) => {
    try {
        res.status(200).send('succesfully created a user')
    } catch (error) {
        res.status(error.status || 500)
    }
})

module.exports = router;
