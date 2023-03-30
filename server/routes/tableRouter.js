const express = require('express');
const router = express.Router();
const tableController = require ('../controller/tableController.js');

router.post('/', tableController.createColumn, (req, res) => {
    try {
        res.status(200).send('created a new column!')
    } catch (error) {
        res.status(error.status || 500)
    }
})

module.exports = router;
