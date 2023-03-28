const db = require('../database');
const listController = {};



listController.getByGradeLevel = async (req, res, next) => {
     const text = "SELECT first_name || ' ' || last_name AS full_name FROM students WHERE grade_level="
     const {gradeLevel} = req.params
     let listCache = {}
     try {
        if (gradeLevel === 'admin'){
        const result = await db.query("SELECT first_name || ' ' || last_name AS full_name, grade_level FROM students ORDER BY last_name") 
        let data = result.rows;

        for (const obj of data){
            if (!listCache[obj.grade_level]){
                listCache[obj.grade_level] = [obj.full_name]
            } else {
                listCache[obj.grade_level].push(obj.full_name)
            }
        }
            res.locals.list = listCache;
            console.log(listCache, 'inside listController')
            
        } else {
            const result = await db.query(text + `'${gradeLevel}' ORDER BY last_name`)
            let data = result.rows;
            for (let obj of data){
                if(!listCache[`${gradeLevel}`]) {
                    listCache[`${gradeLevel}`] = [obj.full_name]
                } else listCache[`${gradeLevel}`].push(obj.full_name)
            }
            res.locals.list = listCache;
        }
     } catch (error) {
        console.log(error)
     }
     return next() 
    }


listController.getByHomeroom = async (req, res, next) => {
    const text = "SELECT first_name || ' ' || last_name AS full_name FROM students WHERE homeroom="
    const {homeroom} = req.params
    let listCache = {}
    try {
        if (homeroom === 'admin'){
        const result = await db.query("SELECT first_name || ' ' || last_name AS full_name, homeroom FROM students ORDER BY last_name") 
        let data = result.rows;

        for (const obj of data){
            if (!listCache[obj.homeroom]){
                listCache[obj.homeroom] = [obj.full_name]
            } else {
                listCache[obj.homeroom].push(obj.full_name)
            }
        }
            res.locals.list = listCache;
            console.log(listCache, 'inside listController')
            
        } else {
            const result = await db.query(text + `'${homeroom}' ORDER BY last_name`)
            let data = result.rows;
            for (let obj of data){
                if(!listCache[`${homeroom}`]) {
                    listCache[`${homeroom}`] = [obj.full_name]
                } else listCache[`${homeroom}`].push(obj.full_name)
            }
            res.locals.list = listCache;
        }
     } catch (error) {
        console.log(error)
     }
     return next() 
}

listController.createNewList = async (req, res, next) => {
    const {listType, listOfStudents} = req.body
    let arrayString = JSON.stringify(listOfStudents)
    console.log(arrayString)

    try {
        await db.query(`CREATE TABLE ${listType} (full_name VARCHAR(100))`)
        
        await db.query(`INSERT INTO ${listType} (full_name) SELECT * FROM json_array_elements($1::json)`, [arrayString])
   
        const result = await db.query(`SELECT TRIM(BOTH '"' FROM full_name) as full_name FROM ${listType}`)
        console.log(result.rows)
        const newList = {};
        for (let obj of result.rows){
            if (!newList[`${listType}`]){
                newList[listType] = [obj.full_name]
            } else newList[`${listType}`].push(obj.full_name)
        }

        res.locals.list = newList;
    } catch (error) {
        console.log(error)
    }
    return next();
}

module.exports = listController
//[]

