import React from "react"

//need to pass props: gradelevel and teacher render dynamically
const ListComponent = ({lists}) => {
    console.log(lists, 'from the listcomponent')
    let availableLists = [];
    //grab a list of each grade level

    for (const key in lists){
        availableLists.push(
            <div>
            <h2>Grade {key}</h2>
            <h2>Teacher</h2>
            <ol>{lists[key].map(name => <li>{name}</li>)}</ol>
            </div>
            
        )
        // bulletedStudentList.push(<li key={obj.grade_level}></li>)
    }

    //render (not working)
    return (
        <div className = 'listComponent'>
            {availableLists}
            {/* <h2>Grade Level</h2>
            <h2>Teacher</h2>
            <ol>{bulletedStudentList}</ol> */}
        </div>
    )
}

export default ListComponent

/*
{id: 1, first_name: 'Nestor', last_name: 'Cayanan', grade_level: '8', homeroom: '8B', …}
1
: 
{id: 2, first_name: 'Jonah', last_name: 'Cayanan', grade_level: '8', homeroom: '8B', …}
2
: 
{id: 3, first_name: 'Winston\n', last_name: 'Cayanan', grade_level: '8', homeroom: '8B', …}
3
: 
{id: 4, first_name: 'Matt', last_name: 'Mattox', grade_level: '8', homeroom: '8A', …}
4
: 
{id: 5, first_name: 'Kevin', last_name: 'Phan', grade_level: '8', homeroom: '8A', …}
5
: 
{id: 6, first_name: 'Lucas', last_name: 'Contreras', grade_level: '8', homeroom: '8A', …}
6
: 
{id: 7, first_name: 'Esther', last_name: 'Nahm', grade_level: '7', homeroom: '7B', …}
7
: 
{id: 8, first_name: 'Paul', last_name: 'Mun', grade_level: '7', homeroom: '7B', …}
8
: 
{id: 9, first_name: 'Kareem', last_name: 'Saleh', grade_level: '7', homeroom: '7B', …}
9
: 
{id: 10, first_name: 'Yourui', last_name: 'Ruan', grade_level: '7', homeroom: '7A', …}
10
: 
{id: 11, first_name: 'Yi', last_name: 'Sun', grade_level: '6', homeroom: '6B', …}
11
: 
{id: 12, first_name: 'Anna', last_name: 'Zhong', grade_level: '6', homeroom: '6B', …}
12
: 
{id: 13, first_name: 'Lucia', last_name: 'Li', grade_level: '6', homeroom: '6B', …}
13
: 
{id: 14, first_name: 'Charlie', last_name: 'Charboneau', grade_level: '6', homeroom: '6A', …}
14
: 
{id: 15, first_name: 'Stephanie', last_name: 'Serrano', grade_level: '6', homeroom: '6A', …}
15
: 
{id: 16, first_name: 'William', last_name: 'Nguyen', grade_level: '6', homeroom: '6A', …}
*/