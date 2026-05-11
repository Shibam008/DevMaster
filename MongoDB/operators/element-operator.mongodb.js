use('college')
// db.users.insertMany([
//     {name:'Ram', age:20},
//     {name:'Shyam', age:22},
//     {name:'Jodu', age:22},
//     {age:25},
//     {name:'Rhaul', age:'20'},
//     {name:'Ratan', age:28},
// ])


use('college')
db.users.find(
    {}
)

//^ exists and type are called element-operator

use('college')
db.users.find(
    {name: {$exists: true}}
)

use('college')
db.users.find(
    {age: {$type: 'string'}}
)