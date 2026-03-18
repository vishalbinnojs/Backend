show('dbs')
use('ecommerce')
show('collections')
//logical and operator
db.products.find(
    {$and: [{category:'beauty'},
        {price: {$lt: 12.99}}] },
    {title:1,category:1,price:1}
)
// it is same the $and syntax: Below is the shorthand of the above query because MongoDB does exactly the same procedure like above if we use shorthand.
db.products.find(
   {category:'beauty',
   price: {$lt: 12.99}},
    {title:1,category:1,price:1}
)

// OR operator 
db.products.find(
    {$or: [{category:'fragrances'},
        {price: {$gt: 12.99}}
    ]},
    {title:1,category:1,price:1}
)
//NOR operator
db.products.find(
    {$nor: [{category:'fragrances'},
        {price: {$gt: 12.99}}
    ]},
    {title:1,category:1,price:1}
)

// NOT operator
db.products.find(
    {$nor: [{category:'fragrances'},
        {price: {$not: {$gt: 12.99}}}
    ]},
    {title:1,category:1,price:1}
)
