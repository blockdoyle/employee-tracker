const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'toor',
        database: 'employees_db'
    },
    console.log('Connected to the employees_db database.')
);

// View all departments
function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
    });
}

module.exports = {
    viewAllDepartments,
};