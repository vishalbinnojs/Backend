show("dbs")

use("schema")
// db.createCollection('users')
// db.users.insertOne({name:"vishal"})

// db.users.drop()  // to drop the collection users
// db.users.findOneAndUpdate({name:"vishal"},
//     {
//         $set:{
//             roll:1,
//             age:23
//         }
//     }
// )

// PROBLEM:: Now the problem is that we can anything in the users collection e.g
// db.users.insertOne({productName:"samasung"}) 
// db.users.find()
// users collection must have data of users not anything else like product details as you see in the example 
// db.users.drop()


use("schema")
// db.users.drop()
// Now we must mention data types of the documents for the schema validation

// *************  SCHEMA VALIDATION ******************
// db.createCollection("users", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required:["name","age","isAdmin","products"],
//             additionalProperties:false,
//             properties: {
//                 _id:{},
//                 name: {
//                     bsonType: "string",
//                     description: "name must be a string and required"
//                 },
//                 age: {
//                     bsonType: "int",
//                     minimum:18,
//                     maximum:60,
//                     description: "age must be an integer and between 18 to 60 and required also"
//                 },
//                 isAdmin:{
//                     bsonType:"bool",
//                     description:"must be true or false"
//                 },
//                 products:{
//                     bsonType:"array",
//                     description:'products must be an array and required',
//                     items:{
//                         bsonType:'object',
//                         description:"must be an object"
//                         required:["productName","price"],
//                         additionalProperties:false,
//                         properties:{
//                             productName:{
//                                 bsonType:"string",
//                             description:"productName must be a string"
//                             },
//                             price:{
//                                 bsonType:'number',
//                                 description:'price is required'
//                             }
//                         }
//                     }
//                 }
//             }
//         }

//     },
//     validationAction: "error" // document refuse to insert 
// // and if it is "warn" document inserted with warning shows in production

// })

// db.users.insertOne({
//     name:"vishal",
//     age:23,
//     isAdmin:true,
//     products:[
//         {
//             productName:"samsung",
//             price:30000
//         }
//     ]
// })
// db.users.insertOne({
//     name:"vishal",
//     age:23,
//     isAdmin:true,
//     products:[
//         {
//             productName:"samsung",
//             price:30000.00
//         }
//     ]
// })
// db.users.insertOne({
//     name:"vishal",
//     age:23,
//     isAdmin:true,
//     products:[
//         {
//             productName:"samsung",
//             price:30000.001,
            //    inStock:false  // additional property can't be added bcz it is not specified in the schema
//         }
//     ]
// })

db.users.find()
