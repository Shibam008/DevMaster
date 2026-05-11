// when there is any problem while inserting data 
// in case of ordered insertion our insertion 
// stopped at that point where we have that error

use('testdb')
db.createCollection('users')
db.users.insertMany([
    {_id:1, name:'shibam'},
    {_id:2, name:'ram'},
    {_id:1, name:'shyam'},
    {_id:3, name:'rahul'}
])

use('testdb')
db.users.find({})

//! only the first two field will be added to the collection

// but in unordered insertion we still got error but 
// also insert the rest correct documents to our db

use('testdb')
db.createCollection('users')
db.users.insertMany(
    [
        {_id:3, name:'muskan'},
        {_id:4, name:'anik'},
        {_id:3, name:'shovan'},   // only this will not be inserted due to error
        {_id:5, name:'rupasree'}
    ], 
    {ordered: false}
)

use('testdb')
db.users.find({})