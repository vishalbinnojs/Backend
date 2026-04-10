show('dbs')
use('questions')
// db.users.insertMany([
//     {
//         name: "Rahul Sharma",
//         age: 22,
//         city: "Delhi",
//         email: "rahul@gmail.com",
//         phone: "9876543210",
//         isActive: true
//     },
//     {
//         name: "Priya Singh",
//         age: 27,
//         city: "Mumbai",
//         email: "priya@yahoo.com",
//         isActive: true
//     },
//     {
//         name: "Amit Verma",
//         age: 30,
//         city: "Delhi",
//         email: "amit@gmail.com",
//         phone: "9123456780",
//         isActive: false
//     },
//     {
//         name: "Sneha Gupta",
//         age: 24,
//         city: "Kolkata",
//         email: "sneha@gmail.com",
//         phone: "9988776655",
//         isActive: true
//     },
//     {
//         name: "Rohit Kumar",
//         age: 29,
//         city: "Patna",
//         email: "rohit@yahoo.com",
//         isActive: true
//     },
//     {
//         name: "Ankit Raj",
//         age: 21,
//         city: "Patna",
//         email: "ankit@gmail.com",
//         phone: "8899776655",
//         isActive: false
//     },
//     {
//         name: "Neha Agarwal",
//         age: 26,
//         city: "Delhi",
//         email: "neha@gmail.com",
//         phone: "8877665544",
//         isActive: true
//     },
//     {
//         name: "Riya Das",
//         age: 23,
//         city: "Mumbai",
//         email: "riya@gmail.com",
//         isActive: true
//     },
//     {
//         name: "Karan Malhotra",
//         age: 31,
//         city: "Bangalore",
//         email: "karan@yahoo.com",
//         phone: "9988112233",
//         isActive: false
//     },
//     {
//         name: "Pooja Mishra",
//         age: 28,
//         city: "Lucknow",
//         email: "pooja@gmail.com",
//         phone: "7766554433",
//         isActive: true
//     }
// ])

use('questions')
// ******************  EASY  ********************
//Q.1 
db.users.find({ city: "Delhi" })

// Q.2
db.users.find({ age: { $gt: 25 } })
// Q.3
db.users.find({ age: { $lte: 30 } })
// Q.4
db.users.find({ city: { $ne: "Mumbai" } })
// db.users.find({city: {$nin :['Mumbai']}})
// Q.5 age between 20 and 30
// db.users.find({$and:[
//     {age:{$gt:20}},{age:{$lt:30}}
// ]})
db.users.find(
    { age: { $gt: 20, $lt: 30 } }
)
// Q.6
// by default _id is shown you have to explicitly neglet it
db.users.find(
    {},
    { name: 1, email: 1, _id: 0 }
)
// Q.7
// db.users.find({
//     name:{$regex:"^R"}
// })
use('questions')
db.users.find({
    name: /^R/
})
// Q.8
db.users.find(
    { email: { $regex: "gmail" } }
)
// db.users.find(
//     {email:/gmail/}
// )
// Q.9
db.users.find({
    city: { $exists: true }
})
// Q.10
db.users.find({
    phone: { $exists: false }
})
// Q.11 sort the documents in ascending order on age basis
db.users.find().sort({ age: 1 })
// Q.12
db.users.find().sort({ age: -1 }) // descending
// Q.13 show only first 5
db.users.find().limit(5)
// Q.14 skip first 2 and show next 5
// const users =  db.users.find().skip(2).limit(5)
// console.log(users);

// Q.15
db.users.find({
    age: { $in: [20, 25, 30] }
})
// db.users.find({
//     $or: [
//         {age:{$eq:20}},{age:{$eq:25}},{age:{$eq:30}}
//     ]
// })
// Q.16
db.users.find({
    age: { $nin: [20, 25, 30] }
})
// Q.17 count the documents in the database
db.users.countDocuments()
// db.users.find.count()
// db.users.find.size()

// Q.18
// db.users.find({name:"Rahul Sharma",city:"Delhi"})
db.users.find({
    $and: [
        { name: 'Rahul Sharma' }, { city: 'Delhi' }
    ]
})
// Q.19
db.users.find({
    city: { $in: ["Delhi", "Mumbai"] }
})
// db.users.find({
//     $or:[
//         {city:'Delhi'},
//         {city:'Mumbai'}
//     ]
// })
// Q.20 whose age is not greater than 30
db.users.find({
    age: { $lte: 30 }
})
db.users.find({
    age: { $not: { $gt: 30 } }
})
// Q.21 whose name ends with a
db.users.find({
    name: /a$/
})
// Q.22 whose email domain is yahoo.com
// In mongoDB . means any character so it may search if yahoobcom present in required field so to escape this we use \(forward slash)
db.users.find(
    { email: /yahoo\.com$/ },

)
// Q.23 whose age field type is number
db.users.find({
    age: { $type: 'number' }
})
// Q.24 whose age is even
db.users.find({
    age: { $mod: [2, 0] }
})
// Q.25 whose name length is greater than 10 characters
db.users.find({
    $expr: {
        $gt: [{ $strLenCP: '$name' }, 10]
    }
})

// *****************************  INTERMEDIATE  *********************
// use('questions')
// db.products.insertMany([
//      {
//         name: "Gaming Laptop",
//         price: 75000,
//         category: "electronics",
//         stock: 15,
//         discount: 10,
//         tags: ["gaming", "laptop", "electronics"]
//     },
//     {
//         name: "Smartphone",
//         price: 25000,
//         category: "electronics",
//         stock: 8,
//         discount: 15,
//         tags: ["phone", "android", "electronics"]
//     },
//     {
//         name: "Wireless Mouse",
//         price: 800,
//         category: "accessories",
//         stock: 50,
//         discount: 5,
//         tags: ["mouse", "computer", "electronics"]
//     },
//     {
//         name: "Mechanical Keyboard",
//         price: 3500,
//         category: "accessories",
//         stock: 20,
//         discount: 12,
//         tags: ["keyboard", "gaming", "computer"]
//     },
//     {
//         name: "LED Monitor",
//         price: 12000,
//         category: "electronics",
//         stock: 5,
//         discount: 18,
//         tags: ["monitor", "display", "electronics"]
//     },
//     {
//         name: "Office Chair",
//         price: 6000,
//         category: "furniture",
//         stock: 0,
//         discount: 20,
//         tags: ["chair", "office", "furniture"]
//     },
//     {
//         name: "Gaming Headset",
//         price: 4500,
//         category: "electronics",
//         stock: 12,
//         discount: 25,
//         tags: ["gaming", "audio", "electronics"]
//     }
// ])

use("questions")
show('collections')
// Q.26 price greater than 1000
db.products.find({ price: { $gt: 1000 } })
// Q.27 price between 500 and 2000
db.products.find({ price: { $gt: 500, $lt: 2000 } })
// Q.28 products belong to category 'electronics'
db.products.find({ category: 'electronics' })
// Q.29 stock less than 10
db.products.find({ stock: { $lt: 10 } })
// Q.30 products that are out of stock
db.products.find({ stock: 0 })
// Q.31 products sorted by price low to high
db.products.find().sort({ price: 1 })

// Q.32 top five most expensive products
db.products.find().sort({ price: -1 }).limit(5)
// Q.33 whose name contains 'phone'
db.products.find({
    name: /phone/
})
// Q.34 whose discount is greater than 20%
db.products.find(
    { discount: { $gt: 20 } }
)
// Q.35 do not belongs to category 'electronics'
db.products.find({
    category: { $ne: 'electronics' }
    // db.products.find({
    //     category:{$nin:['electronics']}
    // })
})
// Q.36 having tag 'gaming'
db.products.find({
    tags: { $in: ['gaming'] }
})
// Q.37 'gaming' and 'laptop' tags
db.products.find({
    tags: {$all: ['gaming','laptop']}
})
// db.products.find({
//     $and: [
//         { tags: 'laptop' },
//         { tags: 'gaming' }
//     ]
// })
// Q.38 having exactly 3 tags
db.products.find({
    tags: { $size: 3 }
})
// Q.39 add a tag 'new' to a product
db.products.findOneAndUpdate(
    { name: 'Smartphone' },
    { $addToSet: { tags: 'new' } }
)

// Q.40 remove tag 'new' from a product

db.products.findOneAndUpdate({name:'Smartphone'},
    {$pull:{tags:'new'}}
)


// use('questions')

// db.orders.insertMany([
//         {
//         user: "Rahul Sharma",
//         totalAmount: 80000,
//         status: "delivered",
//         orderDate: new Date("2025-02-10")
//     },
//     {
//         user: "Priya Singh",
//         totalAmount: 3000,
//         status: "pending",
//         orderDate: new Date("2025-03-01")
//     },
//     {
//         user: "Amit Verma",
//         totalAmount: 15000,
//         status: "cancelled",
//         orderDate: new Date("2024-12-15")
//     },
//     {
//         user: "Rahul Sharma",
//         totalAmount: 4500,
//         status: "delivered",
//         orderDate: new Date("2025-01-20")
//     },
//     {
//         user: "Sneha Gupta",
//         totalAmount: 1200,
//         status: "pending",
//         orderDate: new Date("2025-03-05")
//     }
// ])

use('questions')
db.orders.find()

// Q.41 all orders placed by user Rahul

db.orders.find({user:/Rahul/})
// Q.42 orders whose total amount > 5000
db.orders.find({totalAmount:{$gt:5000}})

// Q.43 orders placed after 1 jan 2025
db.orders.find({
    orderDate: {$gt:new Date('2025-01-01')}
})
// Q.44 orders with status delivered
db.orders.find({
    status:/Delivered/i
})
// Q.45 orders not equal to cancelled
db.orders.find({
    status:{$not:/cancelled/i}
})
// db.orders.find({
//     status:{$ne:"cancelled"}
// })



use('questions')

db.products.find()

// Q.46 increase product price by 10%
db.products.updateMany({},
    {$mul:{
        price:  1.1}
    }
    
)


// Q.47 increase products stock by 50
// db.products.updateMany({},
//     {$inc:{stock:50}}
// )
// Q.48 rename field price to productPrice
// db.products.updateMany({},
//     {$rename:{price:'productPrice'}}
// )


// Q.49 remove discount field from products
db.products.updateMany({},
    {$unset:{discount:''}}
)
// Q.50 add field featured -> true to poroducts
db.products.updateMany({},
    {$set:{featured:true}}
)
// Q.51 delete products whose stock is 0
use('questions')
db.products.deleteMany({stock:0}
)
    

// Q.52 delete users who never placed any order

db.users.find()
db.users.deleteOne({orders:{$size:0}})
// db.users.deleteOne({orders:[]})
    
// Q.53 Delete orders older than 5 years
db.orders.find()
db.orders.deleteOne(
    {
        orderDate: {$lt: new Date(new Date().setFullYear(new Date().getFullYear() - 5))}
    }
)
// db.blogs.insertMany([
//         {
//         title: "MongoDB Basics",
//         views: 120,
//         comments: [
//             { user: "Rahul", text: "Great tutorial" },
//             { user: "Amit", text: "Very helpful" }
//         ]
//     },
//     {
//         title: "JavaScript Async Guide",
//         views: 300,
//         comments: [
//             { user: "Priya", text: "Awesome explanation" }
//         ]
//     },
//     {
//         title: "Node.js Performance Tips",
//         views: 80,
//         comments: []
//     }
// ])

db.blogs.find()
// Q.54 Increase views count of a blog by 1
// db.blogs.updateOne({},
//    { $inc:{views:1}}
// )
// Q.55 add new comment to blog post
// db.blogs.updateOne({title:"Node.js Performance Tips"},
//     {$addToSet:{comments:{
//         user:'Akanksha',
//         text:'Helpful tips.'}}}
// )
// Q.56 Remove a specific comment
// db.blogs.updateOne({title:"MongoDB Basics"},
//     {$pull:{comments:{user:'Rahul'}}}
// )


db.users.find()
// Q.57 Add a product to user wishlist
db.users.updateMany({},
    {$addToSet:{wishlist:{productId:101}}}
)

// Q.58 remove a product from wishlist
db.users.updateOne({name:/priya singh/i},
    {$pull:
        {wishlist:{productId:101}}
    }
)

// Q.59 add item to shopping cart
db.users.updateOne({name:"Sneha Gupta"},
    {$addToSet:
        {cart:{product:"Red Nail Paint"}}
    }
)
// Q.60 remove a item from cart
db.users.updateOne({name:/sneha gupta/i},
    {$pull:
        {cart:
            {product:"Red Nail Paint"}
        }
    }
)
db.users.find()

