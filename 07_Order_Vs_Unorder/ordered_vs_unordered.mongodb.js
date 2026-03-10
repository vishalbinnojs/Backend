use('orderedDB')
db.createCollection('clients')
show('dbs')
show("collections")
// db.clients.insertMany(
//     [
//         {_id:1,name:'vishal'},
//         {_id:2,name:'kuljeet'},
//         {_id:1,name:'ajeet'},
//         {_id:3,name:'ajay'},
//       
//     ]
// )

// error: Give error for duplicate id here. Only two clients before the third client(duplicate id) inserted in the database. we can fix this by specifying the order like below
// db.clients.insertMany(
//     [
//         {_id:3,name:'singh'},
//         {_id:4,name:'dubey'},
//         {_id:3,name:'bumrah'},
//         {_id:5,name:'sanju'},
      
//     ],
//     {ordered:false}
// )
// it still shows the error but this time the client after the error id is inserted in the collection
db.clients.find()

