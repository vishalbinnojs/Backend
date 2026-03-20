// cursor is nothing but a pointer or iterator
// This cursor is created by MongoDB which send data batch by batch


// ******** CURSOR METHODS ************
// 1 cursor.next()
// 2 cursor.hasNext()
// 3 cursor.limit()
// 4 cursor.skip()
// cursor.sort()
show('dbs')

use('cursor')
// let arr = [];

// for(i=0;i<100;i++){
//     arr.push({value:i})
// }

// db.data.insertMany(arr)


const cursor = db.data.find()
// console.log(cursor);
// console.log(cursor.next());
// console.log(cursor.next());
// console.log(cursor.next());
// console.log(cursor.hasNext())

// to print all data
// while(cursor.hasNext()){
//     console.log(cursor.next());
    
// }

// sort in ascending order(By default)
cursor.sort({value:1})
// sort in descending order
cursor.sort({value:-1})

cursor.sort({value:1}).limit(5)

// skip first 50 documents
db.data.find().skip(50)
// Question -> ascending order skip first 5 and show only 8 documents
const result = db.data.find().sort({value:-1}).skip(5).limit(8)  // see output on terminal
console.log(result);

// Pagination concept in Backend

let page = 2;
let lmt = 5;

const docs = db.data.find().skip((page-1) * lmt).limit(lmt)
console.log(docs);
