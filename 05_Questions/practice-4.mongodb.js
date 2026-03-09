// show('dbs')

// use('shopApp')
// show('collections')

// db.users.findOneAndUpdate({
//     city:"Bhagalpur"
// },
//    { $set:{
//     city:"Mumbai"
// }}
// )

show('dbs')
use('ecommerce')
show('collections')

// db.products.findOneAndUpdate({
//     name:'iphone'
// },
// {$set:
//     {price:'89k'}
// }
// )

// increment the stock by 10 for all documents
db.products.updateMany(
    {},
    {$inc:{stock:10}}
)



// use('shopApp')
// show('collections')
// db.users.find()
// db.users.findOneAndUpdate({
//     name:'Kuljeet'
// },
// {$set:
//     {email:'kuljeet11@gmail.com'}
// })