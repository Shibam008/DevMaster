use('Ecommerce')
db.products.find(
    {},
    {}
)


use('Ecommerce')
db.products.find(
    {price: {$gt: 20}},
    {title:1, category:1, price:1}
)

use('Ecommerce')
db.products.find(
    {price: {$lte: 20}},
    {title:1, category:1, price:1}
)

use('Ecommerce')
db.products.find(
    {price: {$ne: 200}},
    {title:1, category:1, price:1}
)