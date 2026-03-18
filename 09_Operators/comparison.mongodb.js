show('dbs')
use('ecommerce')
show('collections')
db.products.find(
    {},
    {title:1,category:1,price:1}
)
// greate then or greater then equal
db.products.find(
    {price:{$gt:12}},
    {title:1,category:1,price:1}
)
db.products.find(
    {price:{$gte:12.99}},
    {title:1,category:1,price:1}
)
// less than or less than equal
db.products.find(
    {price:{$lt:79.99}},
    {title:1,category:1,price:1}
)
db.products.find(
    {price:{$lte:79.99}},
    {title:1,category:1,price:1}
)
// equal
db.products.find(
    {price:{$eq:69.99}},
    {title:1,category:1,price:1}
)
db.products.find(
    {price:69.99},
    {title:1,category:1,price:1}
)

//not equal
db.products.find(
    {price:{$ne: 69.99}},
    {title:1,price:1,category:1}
)