use('shopApp')
db.users.find(
    {age: {$gt : 20}}
)

use('shopApp')
db.users.find(
    {name: 'shibam'}
)

use('shopApp')
db.users.find(
    {city: 'barasat'}
)

use('shopApp')
db.users.countDocuments(
    {city: 'barasat'}
)


use('shopApp')
show('collections')