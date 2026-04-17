show("dbs")
use('ER')
// db.createCollection("students")
show('collections')
// We are embedding two documents here in the array(course) but there is no need to embed because both the students have one similar course so here we should use concept of referencing means only passing the id of the course instead of complete details of the course again and again to prevent data redundancy.

// db.students.insertOne({
//     _id:1,
//     name:'vishal',
//     courses:[
//         {
//             _id:101,
//             name:"Electronics",
//             price:50000,
//             duration:3
//         },
//         {
//             _id:2,
//             name:"computer",
//             price:80000,
//             duration:3
//         }


//     ]
// })
// db.students.insertOne({
//     _id:2,
//     name:'kuljeet',
//     courses:[
//         {
//             _id:101,
//             name:"Electronics",
//             price:50000,
//             duration:3
//         },

//     ]
// })
db.students.find({
    'courses.name': 'computer'
})
// EMBEDDING : is useful where data is uniquely related to the user or we can say it is not common between two or more users
use("ER")
// db.students.insertOne({
//     _id:3,
//     name:"Rahul",
//     age:30,
//     address:{
//         village:"Nakroh",
//         state:"HP"
//     }

// })
// db.students.updateOne(
    //     {
//     'address.state':"HP"
//     },
//     {$set:{'address.village':"KailashNagar"}}
// )

///        REFERENCING ****************
// Hamne Courses data ko alag collection(courses) me add kiya or students wale collection se link kar diya

use('ER')
// db.courses.insertMany([
    //     {
//     _id:101,
//     name:"Electronics",
//     price:50000,
//     duration:3
// },
//     {
    //     _id:102,
    //     name:"computer",
    //     price:80000,
    //     duration:3
    // },
    //     {
        //     _id:103,
        //     name:"Graphics Designing",
        //     price:150000,
        //     duration:2
        // },
        // ])
        
        // db.students.insertOne({
            //     _id:4,
            //     name:"Rohit",
            //     courses:[101,103]
            // })
        // db.students.insertOne({
            //     _id:5,
            //     name:"Rishabh",
            //     courses:[102,103]
            // })
            
            // courses array in the students collection is called localField
            // and the id of the course document is called the foreignField
    // db.students.aggregate([
    //     {
    //         $lookup:{
    //             from:'courses',    // it is collection(courses) name
    //             localField:"courses",
    //             foreignField:'_id',
    //             as:"coursesDetails"
    //         }
    //     }
    // ])
