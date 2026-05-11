use('shopApp')
db.users.find()

use('shopApp')
db.products.find()


use('shopApp')
db.users.updateOne(
    {name:'shibam'},
    {$set : {city:'kolkata'}}
)

use('shopApp')
db.products.updateOne(
    {name:'iphone'},
    {$set : {price:'82k'}}
)

use('shopApp')
db.products.updateMany(
    {},                      // empty menas select all documents
    {$set : {stock:125}}
)

use('shopApp')
db.users.updateOne(
    {name:'shibam'},
    {$set : {email:'ss@gmail.com'}}
)

//*         Level-5


use('shopApp')
db.users.deleteOne(
    {name:'rahul'}
)

use('shopApp')
db.users.deleteMany(
    {age : {$lt : 18}}
)

use('shopApp')
db.products.deleteOne(
    {name:'headphones'}
)