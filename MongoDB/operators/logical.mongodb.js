use('Ecommerce')
db.products.find()


use('Ecommerce')
db.products.find(
    {$and: [{category: 'beauty'},{price: {$lte: 12}}]},
    {title:1, category:1, price:1, reviews:1}
)


use('Ecommerce')
db.products.find(
    {$or: [{category:'beauty'},{category:'fragrances'}]},
    {category:1, price:1, title:1}
)


use('Ecommerce')
db.products.find(
    {
        category: {
            $not: {
                $eq:'beauty'
            }
        }
    },
    {category:1, price:1, title:1}
)

// only in this "not" logical operator we have to provide obj
// in other operators we use - array of objs