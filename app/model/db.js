'user strict';

const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host: 'ec2-13-127-71-13.ap-south-1.compute.amazonaws.com',
    user: 'root',
    password: '',
    database: 'tri_fitness_db',
    multipleStatements: true
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;