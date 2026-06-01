
show('dbs')
use('aggregation')
// db.createCollection("aggregation")
// show('collections')
// db.products.insertMany([
// {
//     _id: 101,
//     name: "iPhone 15",
//     category: "Mobile",
//     brand: "Apple",
//     price: 85000,
//     stock: 12,
//     tags: ["electronics", "phone", "ios"],
//     ratings: [5, 4, 5, 3, 4],
//     createdAt: new Date("2025-01-10")
//   },
//   {
//     _id: 102,
//     name: "Samsung S24",
//     category: "Mobile",
//     brand: "Samsung",
//     price: 72000,
//     stock: 20,
//     tags: ["android", "electronics"],
//     ratings: [4, 4, 5],
//     createdAt: new Date("2025-02-11")
//   },
//   {
//     _id: 103,
//     name: "MacBook Air",
//     category: "Laptop",
//     brand: "Apple",
//     price: 120000,
//     stock: 7,
//     tags: ["laptop", "macos"],
//     ratings: [5, 5, 5],
//     createdAt: new Date("2024-09-01")
//   },
//   {
//     _id: 104,
//     name: "Boat Headphones",
//     category: "Accessories",
//     brand: "Boat",
//     price: 2500,
//     stock: 50,
//     tags: ["audio", "music"],
//     ratings: [3, 4, 4],
//     createdAt: new Date("2025-03-14")
//   },
//   {
//     _id: 105,
//     name: "Gaming Mouse",
//     category: "Accessories",
//     brand: "Logitech",
//     price: 1800,
//     stock: 35,
//     tags: ["gaming", "pc"],
//     ratings: [5, 4, 4, 5],
//     createdAt: new Date("2025-01-20")
//   }  
// ])
// Q. find brand apple and only access fields name,price,category,brand and sort in decending on the basis of price
// ## using find
// db.products.find({brand:"Apple"},{name:1,price:1,category:1,brand:1,_id:0}).sort({price:-1})

// ## using aggregate
db.products.aggregate([
    {
        $match:{
             brand:/apple/i
        }
    },
    {
        $project:{
            name:1,
            price:1,
            category:1,
            brand:1,
            _id:0
        }
    },
    {
        $sort:{
            price:-1
        }
    }
])

// Situation where you must use the aggregate
// Stage1 - match mobile
// Stage2 - project rating,category and name, also average ratings
db.products.aggregate([
{
    $match:{
        category:/mobile/i
    }
},
{
    $project:{
        name:1,
        category:1,
        ratings:1,
        _id:0,
        averageRating:{
            $avg:'$ratings'
        }
    }
}
])


// ## 1. $match   and ## 4. $sort
db.products.aggregate([
    {
        $match:{
            price:{
                $gt:40000
            }
        }
    },
    {
        $sort:{
            price:-1
        }
    }
])

// ## 2. $group
// --> This is the heart of the aggregation
// --> The $group stage is a fundamental part of the MongoDB Aggregation Pipeline used to categorize documents by a specific "group key" and perform calculations on the grouped data.
// --> It is conceptually similar to the GROUP BY clause in SQL.
// db.products.aggregate([
//     {
//         $group:{
//             _id:"$category",  // group by the category field(this _id doesn't belongs to MongoDB)
//              productDetails:{
//                 $push:{
//                     productName:"$name",
//                     price:"$price"
//                 }
//              },
//              total:{
//                 $sum:"$price"
//              },
//              count:{
//                 $sum:1
//              }
//         }
//     }
// ])


// ## 3. $project
// db.products.aggregate([
//     {
//         $project:{
//             name:1,           // select filed
//             price:1,
//             _id:0,            //remove field
//             productName:{     // rename field  and transform field
//                 $toUpper:"$name"
//             },
//             inStock:'True',    // create new field
//             newPrice:{
//                 $sum:["$price",500]  // perform calculation(addition to the existing price)
//             }
//         }
//     }
// ])

// ## 5. $lookup - it is used to get the data from another field to the local field(working)
show('dbs')
use('aggregation')
// db.orders.insertMany([
//     {
//     _id: 1001,
//     userId: 1,
//     products: [
//       {
//         productId: 101,
//         quantity: 1,
//       },
//       {
//         productId: 104,
//         quantity: 2,
//       }
//     ],
//     totalAmount: 90000,
//     status: "Delivered",
//     paymentMethod: "UPI",
//     shippingAddress: {
//       city: "Bhagalpur",
//       state: "Bihar"
//     },
//     orderDate: new Date("2025-04-01")
//   },
//   {
//     _id: 1002,
//     userId: 2,
//     products: [
//       {
//         productId: 102,
//         quantity: 1,
//       }
//     ],
//     totalAmount: 72000,
//     status: "Pending",
//     paymentMethod: "Card",
//     shippingAddress: {
//       city: "Patna",
//       state: "Bihar"
//     },
//     orderDate: new Date("2025-04-05")
//   },
//   {
//     _id: 1003,
//     userId: 3,
//     products: [
//       {
//         productId: 103,
//         quantity: 1,
//       },
//       {
//         productId: 105,
//         quantity: 2,
//       }
//     ],
//     totalAmount: 123600,
//     status: "Delivered",
//     paymentMethod: "NetBanking",
//     shippingAddress: {
//       city: "Delhi",
//       state: "Delhi"
//     },
//     orderDate: new Date("2025-04-10")
//   },
//   {
//     _id: 1004,
//     userId: 1,
//     products: [
//       {
//         productId: 105,
//         quantity: 3,
//       }
//     ],
//     totalAmount: 5400,
//     status: "Cancelled",
//     paymentMethod: "COD",
//     shippingAddress: {
//       city: "Bhagalpur",
//       state: "Bihar"
//     },
//     orderDate: new Date("2025-04-15")
//   },
//   {
//     _id: 1011,
//     userId: 2,
//     products: [
//       {
//         productId: 101,
//         quantity: 1,
//       },
//       {
//         productId: 104,
//         quantity: 2,
//       }
//     ],
//     totalAmount: 90000,
//     status: "Delivered",
//     paymentMethod: "UPI",
//     shippingAddress: {
//       city: "Patna",
//       state: "Bihar"
//     },
//     orderDate: new Date()
//   },
//   {
//     _id: 1012,
//     userId: 1,
//     products: [
//       {
//         productId: 103,
//         quantity: 1,
//       }
//     ],
//     totalAmount: 120000,
//     status: "Delivered",
//     paymentMethod: "Card",
//     shippingAddress: {
//       city: "Bhagalpur",
//       state: "Bihar"
//     },
//     orderDate: new Date(Date.now() - 5 * 60 * 60 * 1000)
//   },
//   {
//     _id: 1013,
//     userId: 3,
//     products: [
//       {
//         productId: 105,
//         quantity: 3,
//       }
//     ],
//     totalAmount: 5400,
//     status: "Pending",
//     paymentMethod: "COD",
//     shippingAddress: {
//       city: "Delhi",
//       state: "Delhi"
//     },
//     orderDate: new Date(Date.now() - 10 * 60 * 60 * 1000)
//   }
// ])
db.orders.find()

db.orders.aggregate([
    {
        $lookup: {
          from: 'products',
          localField:"products.productId",
          foreignField: '_id',  // local field is linked with _id as foreign field
          as: 'productDetails'
        }
    }
])

// ## 6. $unwind -- used to seperate array into different documents
// task - break documents based on their tags
db.products.aggregate([
    {
        $unwind: '$tags'
    }
])

// db.orders.aggregate([
//     {
//         $project:{
//             products:1
//         }
//     },
//     {
//         $unwind:"$products"
//     }
// ])



//  Q. Imagine you need to find the total revenue generated by each product category in the last 24 hours.
db.orders.aggregate([
    {
        $match:{
            orderDate:{
                $gt: new Date(Date.now() - 24*60*60*1000) 
            }
        }
    },
    {
        $project:{
            quantityDetails:"$products"
        }
    },
    {
        $unwind:"$quantityDetails"
    },
    {
        $lookup: {
          from: 'products',
          localField: 'quantityDetails.productId',
          foreignField: '_id',
          as: 'productDetails'
        }
    },
    {
        $unwind:'$productDetails'
    },
    {
        $group:{
            _id:"$productDetails.category",
            revenue:{
                $sum:{
                    $multiply:['$quantityDetails.quantity','$productDetails.price']
                }
            },
            
            // details:{
                // $push:{
            //         quantity:'$quantityDetails.quantity',
            //         productDetails:"$productDetails"
            //     }
            // }
       }       
    }
])



















