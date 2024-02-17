const sqlc = require('./modules/sqlCommands');
const inquirer = require('inquirer');

const menuOptions = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
        ]
    }
];

// Start the application
function init () {
    inquirer.prompt(menuOptions).then((answers) => {
        switch (answers.menu) {
            case 'View All Departments':
                sqlc.viewAllDepartments();
                break;
            case 'View All Roles':
                sqlc.viewAllRoles();
                break;
            case 'View All Employees':
                sqlc.viewAllEmployees();
                break;
            case 'Add a Department':
                sqlc.addDepartment();
                break;
            case 'Add a Role':
                sqlc.addRole();
                break;
            case 'Add an Employee':
                sqlc.addEmployee();
                break;
            case 'Update an Employee Role':
                sqlc.updateEmployeeRole();
                break;
        }
    });
}

init();