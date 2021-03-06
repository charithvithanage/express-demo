const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 3306;

const mysql = require('mysql');

// connection configurations
const mc = mysql.createConnection({
    host: 'ec2-13-127-71-13.ap-south-1.compute.amazonaws.com',
    user: 'root',
    password: '',
    database: 'tri_fitness_db',
    multipleStatements: true
});

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route