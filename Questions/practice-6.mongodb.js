use("shopApp")
show("collections")
db.users.find()
// db.users.find({
//     age:{$gt : 25}
// })


// use('ecommerce')
// show('collections')
// db.products.find({
//     price:{$lt : '5k'}
// })

use('shopApp')
// db.users.find({name:"Kuljeet"})
db.users.countDocuments({city:'Nalagarh'})

// show('collections')