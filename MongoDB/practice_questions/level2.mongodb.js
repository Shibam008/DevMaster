use('shopApp')
db.users.insertOne({
    name:'rahul',
    email:'rahul@gmail.com',
    city:'kolkata',
    age:20
})


use('shopApp')
db.users.insertOne({
    name:'shibam',
    email:'ss@gmail.com',
    city:'gobardanga',
    age:21
})


use('shopApp')
db.users.insertMany([
    {
        name:'anik',
        email:'anik@gmail.com',
        city:'barasat',
        age:23
    },
    {
        name:'rupasree',
        email:'rup@gmail.com',
        city:'barasat',
        age:21
    },
    {
        name:'shovan',
        email:'shovan@gmail.com',
        city:'bankura',
        age:20
    },
])

use('shopApp')
db.users.insertMany([
    {
        name:'ram',
        email:'anik@gmail.com',
        city:'barasat',
        age:17
    },
    {
        name:'shyam',
        email:'rup@gmail.com',
        city:'barasat',
        age:18
    },
    {
        name:'john',
        email:'shovan@gmail.com',
        city:'bankura',
        age:16
    },
])

use('shopApp')
db.users.find()


use('shopApp')
db.users.find({city:'barasat'})