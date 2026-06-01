## Types of Indexing

1. Single Field
2. Compound Indexing
3. Multikey Indexing
4. Text Index

  # Features of Text Index
  1. Tokenization
    Sentence -> words me tod diya jata hai
    "MongoDB is Powerful" -> MongoDB,Powerful

  2. Stop words ignore hote hain
     Words jaise "is","the","a" ignore ho jate hain

  3. Stemming
     "running","runs" -> run treat hoga 

  4. Score(Relevance)
     Most relevant result pehle aayega
     db.articles.find(
        {$text:{$search:"MongoDB"}},
        {score:{$meta:"textScore"}}
     ).sort({score:{$meta:"textScore"}})

  5. Multiple fields pe text index
     db.articles.createIndex({
        title:"text",
        content:"text"
     })   Dono field me search hoga

  # Important Limitations
  1. Ek  collection me sirf 1 text index hoga
     but multiple fields include kar sakte hain

  2. Exact phrase ke liye quotes
     $search: "\"MongoDB index\""

  3. Regex jaisa flexible nahi
     Ye full text search hai, text matching nahi


## Performance optimization 

1. ## unique:true
Ensures duplicate values allow nahi honge

db.users.createIndex({"email":1},{unique:true})
UseCase : Email,phonenumber,Username

# Important: 
-> Agar collection me already duplicate present hai = index creation fail ho jayega
-> Null bhi ek baar hi allowed hota hai(unless sparse/partial use karo)

************ sparse Index *************
Sirf un documents ka index banega jisme field exists karta hai || Missing field ignore honge

db.users.createIndex({phone:1},{sparse: true})

2. ## partialFilterExpression

Index sirf selected documents par hi banta hai(full collection pe nahi)
db.users.createIndex(
    {age:1},
    {partialFilterExpression: {age: {$gt:18}}}
)
sirf age > 18 wale documents hi indexed honge
UseCase: Active users only,paid users only,Filtered optimization

# Benifits: 
a. Smaller Index 
b.Faster Writes(kyunki sab documents index nahi ho rahe)

3. ## expireAfterSeconds(TTL Index)
Auto delete documents after some time
db.sessions.createIndex(
    {createdAt:1},
    {{expireAfterSeconds: 3600}}
) 
Use Case: OTP,Sessions,Logs

# Notes: 
 a. Background  process run hota hai(instant delete nhi hota)
 b. sirf date field pe kam karta hai

4. ## Covered Query
a. jab Quesry ka sata data index se hi mil jaye
b. DB ko actual data fetch hi nahi karna padta

db.articles.createIndex({
   title:1
})

db.articles.find(
    {title:"Learn MongoDB Indexing"},
    {title:1, _id:0} // projection
)

Benifit: SuperFast, Less Disk read Time

Covered Query tabhi hogi agar aap wahi data manga rahe ho jo index ke pas bhi ho
Covered nahi hoga agar:
=> extra field mang li
=> _id include ho gayi(byDefault hoti hai)

*** check indexing.mongodb.js for practicle  ***

5. ## Winning Plan(Query Planner)
=> MongoDB decide karta hai konsa plan use kare
=> Incase of multiple index on same field, MongoDB tests multiple indexes once, picks the fastest(Winning Plan), and cache it for future similar  queries to avoid re-evaluation

title_1
title_1_content_1
title_1_tags_1

Index Cardinality
unique values kitne hain field me. High Cardinality fields are best for indexing

e.g.  email -> High Cardinality
      gender -> Low Cardinality


## Index Perfomance Optimization Tips
1. Always index frequently queried  fields
2. Use Compound Index Smartly
3. Avoid Unnecessary indexes