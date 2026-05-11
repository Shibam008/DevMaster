use('shopApp')
db.createCollection('products')

use('shopApp')
show('collections')

use('shopApp')
db.products.insertMany([
    {
        name:'iphone',
        price:'85k',
        category:'electronics',
        stock:500
    },
    {
        name:'laptop',
        price:'65k',
        category:'electronics',
        stock:200
    },
    {
        name:'headphones',
        price:'5k',
        category:'electronics',
        stock:600
    },
    {
        name:'shoes',
        price:'5k',
        category:'footwares',
        stock:500
    },
])


use('shopApp')
db.products.find()


use('shopApp')
db.products.find({category:'electronics'})


use('shopApp')
db.products.countDocuments()