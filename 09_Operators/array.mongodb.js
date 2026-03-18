use('array')
db.createCollection('students')
// db.students.insertMany([
//     {
//      name: "Rahul",
//     skills: ["HTML","CSS","JavaScript"],
//     marks: [70,80,90]
//     },
//     {
//     name: "Priya",
//     skills: ["Python","Java"],
//     marks: [60,75]
//     },
//     {
//     name: "Amit",
//     skills: ["JavaScript","NodeJS","MongoDB"],
//     marks: [85,88,92]
//     }
// ])
// student having javascript and css skills
db.students.find({
    skills:{$all:["JavaScript","CSS"]}
})

// with case insensitive
db.students.find({
    skills:{
        $all:[/^javascript$/i,/^css/i]
    }
})

// $size = reflects array of size 3
db.students.find({
    skills:{$size:3}
})

// $in = reflects those documents possessing at least any one of the following skill
db.students.find({
    skills:{$in:['JavaScript',"NodeJS"]}
})

// $nin = not in (opposite to $in)
db.students.find({
    skills:{$nin: ['CSS','HTML']}
})

// db.products.insertMany([
//     {
//     name:"Laptop",
//     reviews:[
//             {user:"Rahul", rating:4},
//             {user:"Amit", rating:5}
//         ]
//     },
//     {
//     name:"Mobile",
//     reviews:[
//             {user:"Priya", rating:3},
//             {user:"Ankit", rating:4},
//             {user:"Rahul", rating:5},
//         ]
//     }
// ])

// find the product whose user is Rahul and gave rating 5.
db.products.find({
    reviews:{
        $elemMatch:{
            user:'Rahul',
            rating:5
        }}
})
