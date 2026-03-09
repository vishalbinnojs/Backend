show('dbs')
use('InstagramClone')
db.createCollection('posts')
db.createCollection('users')

// db.users.insertOne({
//     name:"vishal",
//     followers:120,
//     city:"Amb"
// })

// db.posts.insertOne({
//     username:'vishal',
//     caption:"Coffee time",
//     likes : 10
// })

// db.posts.findOneAndUpdate(
// { username:"vishal"},
// {$set : {caption: "gym time"}}
// )

// db.posts.deleteOne({})

db.posts.find()