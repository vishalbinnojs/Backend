use('questions')
// db.products2.insertMany([
//     {
//         name: "Gaming Laptop",
//         price: 85000,
//         category: "electronics",
//         stock: 8,
//         discount: 15,
//         tags: ["gaming", "laptop", "electronics"],
//         reviews: [
//             { user: "Rahul", rating: 5 },
//             { user: "Amit", rating: 4 },
//             { user: "Priya", rating: 5 }
//         ]
//     },
//     {
//         name: "Office Laptop",
//         price: 55000,
//         category: "electronics",
//         stock: 12,
//         discount: 10,
//         tags: ["laptop", "office", "electronics"],
//         reviews: [
//             { user: "Rahul", rating: 3 },
//             { user: "Sneha", rating: 4 }
//         ]
//     },
//     {
//         name: "Gaming Mouse",
//         price: 1500,
//         category: "accessories",
//         stock: 30,
//         discount: 8,
//         tags: ["gaming", "mouse", "computer"],
//         reviews: [
//             { user: "Amit", rating: 5 },
//             { user: "Rahul", rating: 4 }
//         ]
//     },
//     {
//         name: "Mechanical Keyboard",
//         price: 4000,
//         category: "accessories",
//         stock: 20,
//         discount: 12,
//         tags: ["keyboard", "gaming", "computer"],
//         reviews: [
//             { user: "Priya", rating: 5 },
//             { user: "Rahul", rating: 4 }
//         ]
//     },
//     {
//         name: "LED Monitor",
//         price: 12000,
//         category: "electronics",
//         stock: 0,
//         discount: 20,
//         tags: ["monitor", "display", "electronics"],
//         reviews: []
//     }
// ])

show('collections')

db.products2.find()
// Q.61 Find products reviewed by Rahul
db.products2.find({
    "reviews.user": "Rahul"
})
// db.products2.find({
//     reviews:{
//         $elemMatch:{
//             user:'Rahul'
//         }
//     }

// })
// Q.62 where Rahul gave rating 5
db.products2.find({
    reviews: {
        $elemMatch: {
            user: "Rahul",
            rating: 5
        }
    }
})
// Q.63 having rating greater than equal to 4 
db.products2.find({
    "reviews.rating": { $gte: 4 }
})

// Q.64 where the same review document has rating >=4
db.products2.find({
    reviews: {
        $elemMatch: {
            rating: { $gte: 4 }
        }
    }
})
// Q.65 products having more than 2 reviews
use("questions")
db.products2.find({
    $expr: {
        $gt: [{ $size: "$reviews" }, 2]
    }
})
// Q.66 whose price is greater than 5000 and stock less than 10
db.products2.find(
    { price: { $gt: 5000 } },
    { stock: { $lt: 10 } }
)
// Q.67 discount between 10 and 30
db.products2.find({
    discount: { $gt: 10, $lt: 30 }
})
// Q.68 products whose name starts with "G"
db.products2.find({
    name: /^G/
})
// Q.69 whose name ends with "Laptop"
db.products2.find({
    name: /Laptop$/
})
// Q.70 products containing "gaming" tag
db.products2.find({
    tags: { $in: ['gaming'] }
})
// Q.71 both 'gaming' and 'electronics' tags
db.products2.find({
    tags: { $in: ['gaming', 'electronics'] }
})
// Q.72 having exactly 3 tags
db.products2.find({
    tags: { $size: 4 }
})
// Q.73 whose stock is an even number
db.products2.find({
    stock: { $mod: [2, 0] }
})
// Q.74 whose name length is greater than 12 characters
db.products2.find({
    $expr: {
        $gt: [
            { $strLenCP: "$name" }, 12
        ]

    }
})
// Q.75 products whose discount field exists
db.products2.find({
    discount: { $exists: true }
})
// Q.76 add a new review to a product
// db.products2.updateOne({name:/led monitor/i},
//     {$push:{
//         reviews:{
//             user:'vishal',
//             rating:4,
//             text:"Value for money product."
//         }
//     }}
// )
// Q.77 Update the rating of Rahul's review
db.products2.updateOne({
    "reviews.user": "Rahul"
},
    {
        $set: {
            "reviews.$.rating": 1
        }
    }
    // here $ is the positional operator that tells which element (of the reviews field(index) )to update  
)

// Q.78 remove review written by Amit
db.products2.updateOne({ "reviews.user": "Amit" },
    {
        $pull: {
            reviews: {
                user: "Amit"
            }
        }
    }
)

// Q.79 Add multiple tags to a product
db.products2.updateOne({ name: /led monitor/i },
    {
        $addToSet: {
            tags: {
                $each: ["120hz", "90fps"]
            }

        }
    }
)
// Q.80 remove tag 'gaming' from a product
db.products2.updateOne({ name: "Mechanical Keyboard" },
    {
        $pull: {
            tags: 'gaming'
        }
    }
)
// Q.81 remove multiple tags from a product
db.products2.updateOne({ name: /led monitor/i },
    {
        $pull: {
            tags: {
                $in: ['120hz', 'monitor']
            }
        }
    }
)
// Q.82 products where any reviews has rating less than 3
db.products2.find({
    "reviews.rating": { $lt: 3 }

})

// Q.83 where same review has rating less than 3
db.products2.find({
    reviews: {
        $elemMatch: {
            rating: { $lt: 3 }
        }
    }
})
// Q.84 where all reviews ratings >= 4
db.products2.find({
    reviews: {
        $not: {
            $elemMatch: {
                rating: { $lt: 4 }
            }
        }
    }
})
// Q.85 where Rahul exists in reviews.
db.products2.find({ "reviews.user": "Rahul" })
// Q.86 where Rahul reviewed and rating < 3
db.products2.find({
    reviews: {
        $elemMatch: {
            user: "Rahul",
            rating: { $lt: 3 }
        }
    }
})
// Q.87 products with highest stock
use("questions")
db.products2.find().sort({ stock: -1 }).limit(1)

// Q.88 Add tag sale where discount is greater than or equal to 20
db.products2.updateMany({ discount: { $gte: 20 } },
    {
        $addToSet: {
            tags: 'sale'
        }
    }
)
// Q.89 add review only if product has less than 5 reviews
// db.products2.updateMany({
//     $expr: {
//         $lt: [{ $size: '$reviews' }, 5]
//     }
// },
//     {
//         $push: {
//             reviews: {
//                 user: "Nikita",
//                 rating: 5
//             }
//         }
//     }
// )

// Q.90 find product where discount greater than stock
db.products2.find(
    {
        $expr:
            { $gt: ['$discount', '$stock'] }
    }
)

// Q.91 find where discount is missing or 0
db.products2.find({
    $or: [
        { discount: { $exists: false } },
        { discount: 0 }
    ]
})
// Q.92 where name length is greater than category length
db.products2.find({
    $expr: {
        $gt: [
            { $strLenCP: "$name" }, { $strLenCP: "$category" }
        ]
    }
})
// Q.93 products having price between 10000 and 40000 and out of stock
use('questions')
db.products2.find({
    $and: [
        { price: { $gt: 10000, $lt: 40000 } },
        { stock: 0 }
    ]
})
// Q.94 users with empty wishlist
db.users.find({ wishlist: { $size: 0 } })
// Q.95 orders where amount is greater than 10000 and status delivered
db.orders.find()
db.orders.find({
    totalAmount: { $gt: 10000 },
    status: /delivered/i
})
// Q.96 where stock is between 5 and 20 but not 10.
db.products2.find({

    stock: { $gt: 5, $lt: 20, $ne: 10 }
})
// Q.97 products where discount is either >20 or stock <5
db.products2.find({
    $or:[
        {discount:{$gt:20}},
        {stock:{$lt:5}}
    ]
})
// Q.98 products where tags include "gaming" but not "mobile"
db.products2.find({
    tags:{$in:['gaming'],$nin:['mobile']}
})
// Q.99 where review count > 2 and < 5
use("questions")
db.products2.find({
    $expr:{
       $and:[
        {$gt:[{$size:"$reviews"},2]},
        {$lt:[{$size:"$reviews"},5]}
       ]
    }
})
// Q.100 where no review has rating less than 3

db.products2.find({
reviews:{
    $not:{
       $elemMatch:{
        rating:{$lt:3}
       }
    }
}
})
// db.products2.find()