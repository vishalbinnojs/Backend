use('shopApp')
// db.users.findOneAndDelete({
//     name:"Ajay"
// })

// delete  users whose age is less than 25
// db.users.deleteMany({
//     age:{$lt : 25}
// })


// delete a product
use('ecommerce')
db.products.deleteOne({})