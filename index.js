const sqlc = require("./modules/sqlCommands");
const inquirer = require("inquirer");

const menuOptions = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update an Employee Role",
    ],
  },
];

function displayMenu () {
  inquirer.prompt(menuOptions).then((answers) => {
    switch (answers.menu) {
      case "View All Departments":
        sqlc.viewAllDepartments(displayMenu);
        break;
      case "View All Roles":
        sqlc.viewAllRoles(displayMenu);
        break;
      case "View All Employees":
        sqlc.viewAllEmployees(displayMenu);
        break;
      case "Add a Department":
        sqlc.addDepartment(displayMenu);
        break;
      case "Add a Role":
        sqlc.addRole(displayMenu);
        break;
      case "Add an Employee":
        sqlc.addEmployee(displayMenu);
        break;
      case "Update an Employee Role":
        sqlc.updateEmployeeRole(displayMenu);
        break;
    }
})};

// Start the application
displayMenu();