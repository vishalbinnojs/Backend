show('dbs')

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
show("collections")
db.users.find({name:"Amit Verma"}).explain('executionStats') // scans all the document when indexing is not there

// By default indexing is already done on the basis of id
// ++++++++++    Type of indexing     ++++++++++++++

// 1******. Single Field Index
// create indexing on name
// db.users.createIndex({name:1}) // -1:descending

// To drop the indexing
// db.users.dropIndex({name:1})
// db.users.dropIndex('name_1')
db.users.getIndexes()

db.users.find({name:"Amit Verma"}).explain('executionStats') 

// 2******. Compound Index

// db.users.createIndex({name:1,age:-1})
// db.users.getIndexes()
// db.users.find({name:"Ankit Raj",age:21}).explain('executionStats') // IXSCAN
db.users.find({name:"Ankit Raj"}).explain('executionStats') // still IXSCAN bcz name ke basis pe to indexing ho hi rakhi hai chahe hum age ke basis pe find out nahi kar rahe hain lekin agar hum age ke basis pe find karen toh COLLSCAN hoga because order matters(here name is indexed first so on name it is working fine)
db.users.find({age:21}).explain('executionStats')  // CALLSCAN bcz order of indexing matters

// Question : If we create individual(single Field) indexes and find documents compoundally what happened?

db.users.createIndex({name:1})
db.users.createIndex({age:-1})

db.users.find({name:"Ankit Raj",age:21}).explain('executionStats') // IXSCAN but inernally it will works as index intersection
db.users.getIndexes()

// 3******. Multikey Index : For array field

// db.products.insertMany([
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
db.products.find({tags:'laptop'}).explain('executionStats') // COLLSACN

// db.products.createIndex({tags:1}) // indexing on array field(tags here it is of primitive data type)
db.products.find({tags:'laptop'}).explain('executionStats') // IXSCAN

// For non primitive data types inside array(here we need indexing on user/rating or may be both)

// db.products.createIndex({'reviews.user':1})
db.products.find({'reviews.user':"Rahul"}).explain('executionStats') // IXSCAN
db.products.getIndexes()

db.products.createIndex({'reviews.user':1,'reviews.rating':1})
db.products.find({'reviews.user':"Priya","reviews.rating":5}).explain('executionStats') // IXSCAN

// db.products.find({'reviews.user':"Priya"}).explain('executionStats') // IXSCAN

db.products.find({'reviews.rating':4}).explain('executionStats') // COLLSCAN bcz order of indexing matters

// 4*****. Text Index
// Ek collection me sirf 1 text index but multiple field include kar sakte hain
// regex ki tarh kam nahi karta hai(search ke liye pura word likhna padega or agar database me hua tabhi result aayega)
//  db.articles.insertMany([
//      {
//     title: "Learn MongoDB Indexing",
//     content: "MongoDB Indexing improves query performance and speed",
//     tags: ["mongodb", "database", "index"],
//     author: "XYZ",
//     language: "english"
//   },
//   {
//     title: "Understanding JavaScript Closures",
//     content: "Closures allow functions to access variables from an outer scope",
//     tags: ["javascript", "functions", "closures"],
//     author: "ABC",
//     language: "english"
//   },
//   {
//     title: "Introduction to React Hooks",
//     content: "React Hooks let you use state and lifecycle features in functional components",
//     tags: ["react", "hooks", "frontend"],
//     author: "PQR",
//     language: "english"
//   },
//   {
//     title: "Mastering CSS Flexbox",
//     content: "Flexbox helps in creating responsive and flexible layouts easily",
//     tags: ["css", "flexbox", "design"],
//     author: "LMN",
//     language: "english"
//   }
//  ])
db.articles.find()

// db.articles.createIndex({title:'text'})
db.articles.find(
    { $text:{$search: "hooks"}}
    
)
db.articles.find(
    { $text:{$search: "Indexing css"}}
) // give both documents containing query words


// db.articles.dropIndex('title_text')
// text_index with multiple fields
// db.articles.createIndex({title:'text',content:'text',tags:'text'})
db.articles.find(
    {$text:{$search:'Introduction outer index'}},
    {score: {$meta: 'textScore'}}
)
// db.articles.getIndexes()

// ***** Define priority
// db.articles.dropIndex('title_text_content_text_tags_text')
db.articles.createIndex({title:'text',content:'text',tags:'text'},
    {  weights:{
        title:3,
        content:2,
        tags:1
        
    }}
)
// db.articles.getIndexes()
db.articles.find({
    $text:{$search: "Introduction outer index"}
},
{score: {$meta:'textScore'}}
).sort({score:{$meta:'textScore'}})



// Covered Query 
db.articles.getIndexes()
db.articles.createIndex({title:1})
db.articles.find(
    {title:"Learn MongoDB Indexing"},
    {title:1,_id:0}

).explain("executionStats") // Result:PROJECTION_COVERED means index se hi data aa rha hai DB ko alag se data document se fetch karne ki need nhi pad rahi hai 
// and IXSCAN bcz hum title(jo ki indexed hai) ke base pe search kar rhe hain

// db.articles.find(
//     {title:"Learn MongoDB Indexing"},
//     {title:1,content:1,_id:0}

// ).explain("executionStats") // Result:PROJECTION_SIMPLE bcz hmne content field mang li jo ki indexed nahi hai
// and IXSCAN bcz hum title(jo ki indexed hai) ke base pe search kar rhe hain

// Winning Plan
db.articles.createIndex({title:1,content:1})
db.articles.getIndexes()
db.articles.find({title:"Learn MongoDB Indexing"}).explain('executionStats')
// Result : 
// Winning Plan -> title_1 
// RejectedPlan -> title_1_content_1

// sparse index 

// article me currently koi phone field nhi hai sparse:true se index to ban jayega par uske sath abhi koi bhi document associate nhi hoga(0 indexed entries)

// But later if any document inserted with phone field then document will be added to the index 
db.articles.createIndex({phone:1},{sparse:true})

db.articles.getIndexes()

// Difference from normal index  ***************

// Without sparse:

// db.articles.createIndex({ phone: 1 })

// MongoDB also indexes documents where phone is missing (as null).

// With sparse:

// db.articles.createIndex({ phone: 1 }, { sparse: true })

// MongoDB skips missing fields.