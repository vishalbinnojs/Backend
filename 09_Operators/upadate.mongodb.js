// $set,$unset,$inc,$mul,$rename,$min,$max
// Array update => $push,$pull,$addToSet

use('update')
// db.users.insertMany([
//   {
//     "id": 1,
//     "name": "Amit Sharma",
//     "age": 28,
//     "profession": "Software Engineer",
//     "company": "TCS",
//     "salary": 850000,
//     "city": "Bangalore",
//     "marital_status": "Single",
//     "interests": ["coding", "gaming", "cricket"],
//     "email": "amit.sharma@example.com",
//     "phone": "9876543210",
//     "experience_years": 5,
//     "skills": ["JavaScript", "React", "Node.js"]
//   },
//   {
//     "id": 2,
//     "name": "Priya Verma",
//     "age": 32,
//     "profession": "Data Scientist",
//     "company": "Infosys",
//     "salary": 1200000,
//     "city": "Pune",
//     "marital_status": "Married",
//     "interests": ["machine learning", "reading", "travel"],
//     "email": "priya.verma@example.com",
//     "phone": "9123456780",
//     "experience_years": 7,
//     "skills": ["Python", "TensorFlow", "Pandas"]
//   },
//   {
//     "id": 3,
//     "name": "Rahul Mehta",
//     "age": 26,
//     "profession": "UI/UX Designer",
//     "company": "Zomato",
//     "salary": 700000,
//     "city": "Delhi",
//     "marital_status": "Single",
//     "interests": ["design", "photography", "music"],
//     "email": "rahul.mehta@example.com",
//     "phone": "9012345678",
//     "experience_years": 4,
//     "skills": ["Figma", "Adobe XD", "Sketch"]
//   },
//   {
//     "id": 4,
//     "name": "Sneha Kapoor",
//     "age": 30,
//     "profession": "HR Manager",
//     "company": "Wipro",
//     "salary": 950000,
//     "city": "Hyderabad",
//     "marital_status": "Married",
//     "interests": ["people management", "yoga", "reading"],
//     "email": "sneha.kapoor@example.com",
//     "phone": "9988776655",
//     "experience_years": 8,
//     "skills": ["Recruitment", "Communication", "Leadership"]
//   },
//   {
//     "id": 5,
//     "name": "Karan Singh",
//     "age": 35,
//     "profession": "Project Manager",
//     "company": "Accenture",
//     "salary": 1500000,
//     "city": "Mumbai",
//     "marital_status": "Married",
//     "interests": ["management", "golf", "travel"],
//     "email": "karan.singh@example.com",
//     "phone": "9871234560",
//     "experience_years": 10,
//     "skills": ["Agile", "Scrum", "Leadership"]
//   },
//   {
//     "id": 6,
//     "name": "Neha Gupta",
//     "age": 27,
//     "profession": "Frontend Developer",
//     "company": "Flipkart",
//     "salary": 900000,
//     "city": "Bangalore",
//     "marital_status": "Single",
//     "interests": ["coding", "blogging", "travel"],
//     "email": "neha.gupta@example.com",
//     "phone": "8899776655",
//     "experience_years": 4,
//     "skills": ["HTML", "CSS", "React"]
//   },
//   {
//     "id": 7,
//     "name": "Arjun Patel",
//     "age": 29,
//     "profession": "Backend Developer",
//     "company": "Amazon",
//     "salary": 1300000,
//     "city": "Chennai",
//     "marital_status": "Single",
//     "interests": ["coding", "chess", "fitness"],
//     "email": "arjun.patel@example.com",
//     "phone": "9001122334",
//     "experience_years": 6,
//     "skills": ["Java", "Spring Boot", "MongoDB"]
//   },
//   {
//     "id": 8,
//     "name": "Meera Iyer",
//     "age": 31,
//     "profession": "Marketing Manager",
//     "company": "HUL",
//     "salary": 1100000,
//     "city": "Kolkata",
//     "marital_status": "Married",
//     "interests": ["marketing", "writing", "travel"],
//     "email": "meera.iyer@example.com",
//     "phone": "9112233445",
//     "experience_years": 7,
//     "skills": ["SEO", "Content Marketing", "Analytics"]
//   },
//   {
//     "id": 9,
//     "name": "Rohit Yadav",
//     "age": 24,
//     "profession": "QA Engineer",
//     "company": "Tech Mahindra",
//     "salary": 600000,
//     "city": "Noida",
//     "marital_status": "Single",
//     "interests": ["testing", "gaming", "movies"],
//     "email": "rohit.yadav@example.com",
//     "phone": "9334455667",
//     "experience_years": 2,
//     "skills": ["Selenium", "Jest", "Cypress"]
//   },
//   {
//     "id": 10,
//     "name": "Anjali Desai",
//     "age": 33,
//     "profession": "Business Analyst",
//     "company": "Deloitte",
//     "salary": 1400000,
//     "city": "Ahmedabad",
//     "marital_status": "Married",
//     "interests": ["analysis", "reading", "travel"],
//     "email": "anjali.desai@example.com",
//     "phone": "9223344556",
//     "experience_years": 9,
//     "skills": ["Excel", "SQL", "Power BI"]
//   }
// ])
db.users.updateOne(
    {name:"Amit Sharma"},
    {$set:{interests:['coding','gaming','football']}}
)

db.users.updateMany(
    {},
    {$unset:{experience_years:''}}
)
db.users.find()

db.users.updateOne(
    {name: "Priya Verma"},
    {$inc:{salary:10000}}
)

// renaming a field
// db.users.updateMany(
//     {},
//     {$rename:{city:"location"}}
// )
db.users.updateMany(
    {},
    {$rename: {location:"city"}}
)

db.users.updateOne(
    {name:"Sneha Kapoor"},
    {$mul: {gmailAccounts:2}}
)
// update the salary to min of 1200000 for every document whose salary > 1200000
db.users.updateMany(
    {},
    {$min: {salary:1200000}}
)

db.users.updateOne(
    {name:"Anjali Desai"},
    {$max:{salary:1400000}}
)
//*******  Array based update operators **************/
// $push -- allow duplicates
// db.users.updateOne(
//     {name:"Rahul Mehta"},
//     {$push:{interests:"gym"}}
// )
// db.users.updateOne(
    //     {name:"Rahul Mehta"},
    //     {$pull:{interests:"gym"}}
    // )
    
    // $addToSet -- doesn't allow duplicates
    db.users.updateOne(
        {name:"Rahul Mehta"},
        {$addToSet:{interests:"gym"}}
    )