// suppose we have 10 lakh user in our db
// if we try to insert all data at once
/**
    1. Memory can be crashed.
    2. Network may be slowed down
 */
// That's why mongodb create "cursor"
// and send data batch-by-batch

//* Cursor is nothing but a pointer or iterator.


use('testdb')

// let arr = []

// for(let i=1; i<=100; i++) {
//     arr.push({value: i})
// }

// db.data.insertMany(arr)


const cursor = db.data.find()
// console.log(cursor)              // gives us first 20 documents, not all the 100 at once. (1 - 20)
// console.log(cursor.next())       // give the next document (21)

// way to print all :

while(cursor.hasNext()) {
    console.log(cursor.next())      // gives all the docs
}


//^ ---------- Cursor Methods ----------

/**
    next()
    hasNext()
    limit()
    skip()
    sort()
 */

use('testdb')
db.data.find().sort({value: 1})      // sort in ascending order

use('testdb')
db.data.find().sort({value: -1})    // sort in descending order


use('testdb')
const data = db.data.find().sort({value: -1}).skip(10).limit(8)
console.log(data)



//& -------------------------- Pagination ---------------------------

/**
    total data/document = 1, 2, 3, 4, 5, 6, 7, 8, 9

    page_1 -> 1, 2, 3 -> .skip(0).limit(3) -> (page_no - 1) * 3
    page_2 -> 4, 5, 6 -> .skip(3).limit(3) 
    page_3 -> 7, 8, 9 -> .skip(6).limit(3)

 */

use('testdb')
const page = 15 // by changing page no in frontend dynamically we implement pagination
const lim = 3

const pagination = db.data.find().skip((page - 1) * lim).limit(lim)
console.log(pagination)