show('dbs')

use('insta_clone')
db.createCollection('users')
db.createCollection('posts')

use('insta_clone')
show('collections')

use('insta_clone')
db.users.find({})

use('insta_clone')
db.posts.find({})

// user signup
use('insta_clone')
db.users.insertMany([
    {
        name:'anik',
        email:'anik@gmail.com',
        city:'barasat',
        age:23,
        follower:0
    },
    {
        name:'rupasree',
        email:'rup@gmail.com',
        city:'barasat',
        age:21,
        follower:0
    },
    {
        name:'shovan',
        email:'shovan@gmail.com',
        city:'bankura',
        age:20,
        follower:0
    },
])

// upload post

use('insta_clone')
db.posts.insertOne(
    {
        name:'anik',
        caption:'gym time',
        likes:10,
    }
)

// update caption

use('insta_clone')
db.posts.updateOne(
    {name:'anik'},
    {$set : {caption:'radhe radhe'}}
)

// delete post

use('insta_clone')
db.posts.deleteOne({email:'anik@gamil.com'})