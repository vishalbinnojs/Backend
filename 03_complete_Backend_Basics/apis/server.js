import express from "express"
import mongoose from "mongoose"



// connecting server to cluster(Database:MongoDB) cluster --> connect
(async ()=>{
    const connectionInstance = await mongoose.connect("mongodb+srv://vishalbinnojs_db_user:u3W9TQy1PnUH7AQB@cluster0.javggox.mongodb.net/")
    console.log(connectionInstance.connection.host);
    
    //if you are getting this host(ac-yquwqzf-shard-00-02.javggox.mongodb.net) in console, then it is a sign that the server is connected to the mongodb(cluster). This host is the address of cluster in which server is connected
    // Note: Also for this you have to change the ipAddress in monoDB
    
})()

// data definition: Which type of data is going to store on database
// Advantage: Only these two fields are created even if user send some other key from the frontend it is discarded automatically(not saved in the document)

const userSchema = mongoose.Schema({
    name:String,
    age:Number
})

// creating collection: collection --> model
const userCollection = mongoose.model('User',userSchema)

// There is a database named "test"(byDefault) in the cluster0 which  has collection named User(always write in PascalCase) and in database it is converted to plural automatically but you have to give it in singular characters


 
    
const app = express();

// middleware 
app.use(express.json())

//create api/ post api
app.post("/create-user", async (req,res)=>{
    console.log(req.body);
    const userData = req.body;
    // document creation
   const createdUser = await userCollection.create(userData)
    res.send({
        createdUser
    })
})

// get all users api
app.get("/get-all-users", async (req,res)=>{
 const users = await userCollection.find();
 res.send(users)
})

//get single user
app.get("/get-single-user", async (req,res)=>{
    // findOne give first user(document) in the list
    const user = await userCollection.findOne();
    res.send(user)
})

// get user by id/name
app.get('/get-by-name',async (req,res)=>{
    const user = await userCollection.findOne({
        name: req.body.name
    })
    res.send(user)
})

// update user
app.put("/update-user", async (req,res)=>{
    console.log(req.query) 
    console.log(req.body)
    
    const updatedUser = await userCollection.findByIdAndUpdate({_id:req.query._id}, req.body,{returnDocument:"after"})
    res.send({
        "updatedUser": updatedUser
    })
})

//delete user
app.delete('/delete-user', async (req,res)=>{
   const {_id} = req.query;
   console.log(_id);
   
    const deletedUser = await userCollection.findByIdAndDelete({_id})
    res.send({deletedUser})
    // const deletedUser = await userCollection.deleteOne({_id})
    // if(deletedUser.deletedCount === 1) {

    //     res.send("delete accomplished")
    // }else{
    //     res.send("can't find user")
    // }
})


 
app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000");
    
})
