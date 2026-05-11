// use("testdb");
// db.employees.insertMany([
//   { name: "Rahul", salary: 50000, bonus: 10000 },
//   { name: "Priya", salary: 60000, bonus: 5000 },
//   { name: "Amit", salary: 45000, bonus: 15000 },
//   { name: "Neha", salary: 70000, bonus: 2000 },
// ]);

//* { $expr, $regex, $mod }

//? Find employees jahan salary bonus se zyada hai
use("testdb");
db.employees.find({
  $expr: {
    $gt: ["$salary", "$bonus"], // we use $salary to get the values of that field
  },
});

//? Find employees jahan salary + bonus > 65000
use("testdb");
db.employees.find({
  $expr: {
    $gt: [{ $add: ["$salary", "$bonus"] }, 65000],
  },
});



use("testdb");
// db.products.insertMany([
//   { name: "Laptop", price: 60000, discountPrice: 55000 },
//   { name: "Phone", price: 30000, discountPrice: 31000 },
//   { name: "Tablet", price: 20000, discountPrice: 18000 },
//   { name: "Headphones", price: 5000, discountPrice: 4500 },
// ]);

//? Find products jahan price discountPrice se zyada hai
use('testdb')
db.products.find({
    $expr: {
        $gt: ['$price', '$discountPrice']
    }
})



// * useing $mod

//? Find price of the products, divisible by 2
use('testdb')
db.products.find({
    price:  {$mod : [2, 0]}
})