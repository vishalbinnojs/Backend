use('evaluation')
db.createCollection('employees')
// db.employees.insertMany([
//      {
//     name: "Rahul",
//     salary: 50000,
//     bonus: 10000
//   },
//   {
//     name: "Priya",
//     salary: 60000,
//     bonus: 5000
//   },
//   {
//     name: "Amit",
//     salary: 45000,
//     bonus: 15000
//   },
//   {
//     name: "Neha",
//     salary: 70000,
//     bonus: 2000
//   }
// ])

// query - Find employees jahan salary bonus se zyada hai
db.employees.find({
    $expr: {
        $gt: [
            '$salary', '$bonus'
        ]
    }
})

// $expr = expression
// $salary will be treated as variable and give access to value that is 50000 for rahul and so on

// query - Find employees jahan salary + bonus > 60000
db.employees.find(
    {
        $expr: {
            $gt: [
                { $add: ["$salary", "$bonus"] }, 60000
            ]
        }
    }
)

use('evaluation')
show('collections')
// db.products.insertMany([
//     {
//     name: "Laptop",
//     price: 60000,
//     discountPrice: 55000
//   },
//   {
//     name: "Phone",
//     price: 30000,
//     discountPrice: 31000
//   },
//   {
//     name: "Tablet",
//     price: 20000,
//     discountPrice: 18000
//   },
//   {
//     name: "Headphones",
//     price: 5000,
//     discountPrice: 4500
//   }
// ])

// query -- Find products jahan price discountPrice se zyada hai
db.products.find({
    $expr: {
        $gt: [
            "$price", "$discountPrice"
        ]
    }
})



use('evaluation')
show('collections')
// db.orders.insertMany([
//   {
//     product: "Mouse",
//     stock: 50,
//     sold: 30
//   },
//   {
//     product: "Keyboard",
//     stock: 40,
//     sold: 45
//   },
//   {
//     product: "Monitor",
//     stock: 20,
//     sold: 10
//   },
//   {
//     product: "Printer",
//     stock: 15,
//     sold: 15
//   }
// ])

// query -- - Find products jahan stock sold se zyada hai
db.orders.find({
    $expr: {
        $gt: [
            "$stock", "$sold"
        ]
    }
})

use('evaluation')
// db.students.insertMany([
//      {
//     name: "Ravi",
//     maths: 80,
//     science: 70
//   },
//   {
//     name: "Anita",
//     maths: 60,
//     science: 75
//   },
//   {
//     name: "Karan",
//     maths: 90,
//     science: 85
//   },
//   {
//     name: "Pooja",
//     maths: 50,
//     science: 65
//   }
// ])
// query -- - Find students jahan maths marks science se zyada hain

db.students.find(
    {$expr:{
        $gt:[
        "$maths","$science"]
}}
)

// *********** Regular Expression ************
// db.students.find(
//     {name:{$regex:'ar'}}
// )

//find name with first capital letter/ case insensitive
db.students.find({
    name:{$regex:'^p',$options:'i'}
})
//find name ends with letter 'a'
db.students.find({
    name:{$regex:'a$'}
})


use('evaluation')
// db.numbers.insertMany([
//     {value:20},
//     {value:15},
//     {value:45},
//     {value:69},
//     {value:22},
//     {value:81},
//     {value:97},
//     {value:115},
//     {value:211},
// ])
// {$mod:[divisor,remainder]}
db.numbers.find(
    {value:{$mod:[10,0]}}
)