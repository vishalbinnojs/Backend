// extension - MongoDB for Vs code
// connectione - localhost:27017
// open playground and save this file by [file_name].mongodb.js

// db      // by default you are in test database if used alone so if you want to work with specific datbase you have to mention it every time like below
// use('db-name')


db.dropDatabase('test')
show('dbs')
show('collections')

// use('ecommerce')
// db.createCollection('products')

// use('ecommerce')
// db.products.insertOne(
//   {
//     type:'mobile',
//     price:'50k'
//   }
  
// )

// use('ecommerce')
// db.products.insertMany([
//    {
//     type:'mobile',
//     price:'50k'
//   },
//    {
//     type:'tablet',
//     price:'20k'
//   },
//    {
//     type:'charger',
//     price:'1k'
//   },
//    {
//     type:'camera',
//     price:'90k'
//   }
// ])

use('ecommerce')
db.createCollection('users')

// everytime you have to specify the dabase you want to use
// create
use('ecommerce')
db.users.insertOne({
  name:"vishal",
  age:29
})
// Read
use('ecommerce')
db.products.find()

// Update
use('ecommerce')
db.products.findOneAndUpdate({
  type:'charger'
},
{$set:{
  type:'SSD',
  price:"3.5k"
}}
)

// Delete
use('ecommerce')
db.products.deleteOne({
  _id:ObjectId('69a6877e60a089b637fbf7ae')
})