use("shopApp")
// db.users.insertOne({
//     name:"Rahul",
//     email:'rahul@gmail.com',
//     city:"Bhagalpur",
//     age:22
// })
// db.users.insertOne({
//     name:"Kuljeet",
//     email:'kuljeet@gmail.com',
//     city:"Chintapurni",
//     age:30
// })

// db.users.insertMany([
//     {
//          name:"Mohit",
//     email:'mohit@gmail.com',
//     city:"Kullu",
//     age:26
//     },
//     {
//         name:"Vishu",
//         email:'vishu@gmail.com',
//         city:'Nalagarh',
//         age:34
//     },
//     {
//         name:"Ajay",
//         email:'ajay@gmail.com',
//         city:'Amb',
//         age:31
//     }
// ])

// db.users.find()

use("shopApp")
db.users.find({
    city:"Bhagalpur"
})