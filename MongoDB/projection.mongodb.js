// Projection in MongoDB means:

// Selecting which fields to return from documents.
// Instead of getting the full document, you choose specific fields.


use('shopApp')
db.users.find({name:'shovan'})

// when we use the above code we got all the fields 
// of that particular document


//* but when we need only specific field (name and email)
//* we use the concept of projection

use('shopApp')
db.users.find(
    {name:'shovan'},                // qurey
    {name:1, email:1, _id:0}        // projection
)


