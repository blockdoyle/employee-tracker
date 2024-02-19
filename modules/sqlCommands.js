const mysql = require('mysql2');
const inquirer = require('inquirer');

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
function viewAllDepartments(callback) {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        callback();
    });
}

// view all roles
function viewAllRoles(callback) {
    const sql = `SELECT role.id, role.title, role.salary, department.name AS department_name FROM role JOIN department ON role.department_id = department.id`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        callback();
    });
}

// view all employees
function viewAllEmployees (callback) {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        callback();
    });
}

// add a department
function addDepartment (callback) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?'
        }
    ]).then((answers) => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        db.query(sql, answers.name, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Department added');
            callback();
        });
    });
}

// add a job role
function addRole (callback) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the department id of the role?'
        }
    ]).then((answers) => {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
        db.query(sql, [answers.title, answers.salary, answers.department_id], (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Role added');
            callback();
        });
    });
}

// add an employee
function addEmployee (callback) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the employee?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role id of the employee?'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the manager id of the employee?'
        }
    ]).then((answers) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        db.query(sql, [answers.first_name, answers.last_name, answers.role_id, answers.manager_id], (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Employee added');
            callback();
        });
    });
}

// update an employee role
function updateEmployeeRole (callback) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'What is the id of the employee?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role id of the employee?'
        }
    ]).then((answers) => {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        db.query(sql, [answers.role_id, answers.employee_id], (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Employee role updated');
            callback();
        });
    });
}

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
};