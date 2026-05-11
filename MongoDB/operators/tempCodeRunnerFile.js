use('testdb')
db.employees.find({
    $expr: {
        $gt: ['$salary', 'bonus']
    }
})