show('dbs')

use('shopApp')
show('collections')

// create
use('shopApp')
db.sellers.insertMany([
    {name:'rahul basu', category:'grocery'},
    {name:'anik kundu', category:'garments'},
    {name:'john doe', category:'home decors'},
])

// read
use('shopApp')
db.sellers.find({})

// update
use('shopApp')
db.sellers.updateOne(
    {name:'john doe'},
    {$set: {category:'jwellwey'}}
)

//delete
use('shopApp')
db.sellers.deleteOne(
    {name:'rahul basu'}
)