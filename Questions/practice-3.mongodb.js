use('ecommerce')

db.createCollection('products')

// db.products.insertMany([
//     {
//         name:'iphone',
//         price:'90k',
//         category:'electronics',
//         stock: 12
//     },
//     {
//         name:'laptop',
//         price:'150k',
//         category:"electronics",
//         stock:10,
//     },
//     {
//         name:'shoes',
//         price:'3k',
//         category:'fashion',
//         stock:34
//     },
//     {name:'printed men t-shirt',
//         price:'Rs.999',
//         category:'fashion',
//         stock:45
//     }
// ])

// db.products.find()
// db.products.find({
//     category:'fashion'
// })

// To count the documents in the collection
// db.products.count()
db.products.countDocuments()