const db = require('../database');
const tableController = {};

//ALTER TABLE table_name ADD column_name data_type constraints;

//create a new column

tableController.createColumn = async (req, res, next) => {
    const {row, students} = req.body;

    try {
        db.query(`ALTER TABLE students ADD ${row} data_type BOOLEAN; UPDATE students SET ${row}=true WHERE id=any(ARRAY${students}`)
    } catch (error) {
        console.log(error)
    }

    next();
}

//delete a column

tableController.deleteColumn = async (req, res, next) => {
    const {column} = req.body;

    try {
        db.query(`ALTER TABLE students DROP COLUMN ${column}`)
    } catch (error) {
        console.log(error)
    }
    next();
}


module.exports = tableController
