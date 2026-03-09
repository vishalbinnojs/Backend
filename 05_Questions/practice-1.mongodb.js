show('dbs')

use('shopApp')

db.createCollection('users')

db.users.insertOne({
  name:'vishal',
  age:24
})