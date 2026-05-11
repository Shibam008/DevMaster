// use("testdb");
// db.students.insertMany([
//   { name: "Rahul", skills: ["HTML", "CSS", "JavaScript"], marks: [70, 80, 90] },
//   { name: "Priya", skills: ["Python", "Java"], marks: [60, 75] },
//   {
//     name: "Amit",
//     skills: ["JavaScript", "NodeJS", "MongoDB"],
//     marks: [85, 88, 92],
//   },
// ]);

use("testdb");
db.students.find();

// ? find the user who have skills - javascript

use("testdb");
db.students.find({
  skills: { $all: ["JavaScript"] },
});

// ? find students having skill count 3

use("testdb");
db.students.find({
  skills: { $size: 3 },
});

// ? find students who don't know JavaScript and NodeJS

use("testdb");
db.students.find({
  skills: { $nin: ["JavaScript", "NodeJS"] },
});

// ? add skills springboot where name is Rahul

use('testdb')
db.students.updateOne(
    {name: 'Rahul'},
    {$push: {skills: 'SpringBoot'}}
)


//* Element match practical example.

// use("testdb");
// db.prds.insertMany([
//   {
//     name: "Laptop",
//     reviews: [
//       { user: "Rahul", rating: 4 },
//       { user: "Amit", rating: 5 },
//     ],
//   },
//   {
//     name: "Mobile",
//     reviews: [
//       { user: "Priya", rating: 3 }, 
//       { user: "Ankit", rating: 4 },
//       { user: "Rahul", rating: 5 },
//     ],
//   },
// ]);

//& as we have array of objects (reviews) we have to
//& $elemMatch is used when you want to match conditions on the same element inside an array.

// ? Find reviews where name is rahul and rating is 5

//! Wrong Approach 
use("testdb");
db.prds.find({
  "reviews.user": "Rahul", // search user=Rahul in every documents and return all the documents
  "reviews.rating": 5,     // same as previous (global search)
});

//* Correct Approach
use("testdb");
db.prds.find({
  reviews: {
    $elemMatch: {
      user: "Rahul",
      rating: 5,
    },
  },
});
