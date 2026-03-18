show('dbs')
use('myUsers')
// db.createCollection('users')

// db.users.insertMany([
//     {name:'vishal',age:24},
//     {name:'KULJEET',age:34},
//     {name:'Bhuvi',age:"24"},
//     {age:34},
//     {name:'Raj'},
//     {name:'Keshav',age:27},
//     {name:'Puneet',age:"30"},
// ])
// to check which document has age
// db.users.find(
//     {age:{$exists:true}}
// )
db.users.find(
    {name:{$exists:true}}
)
// to check data type of age
// db.users.find({
//     age:{$type:'int'}
// })
// db.users.find({
//     age:{$type:'string'}
// })