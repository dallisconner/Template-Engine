const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

function init() {

    //Failed code:
    //=================================================================================

    //     inquirer
    //         .prompt([
    //             {
    //                 type: "input",
    //                 message: "Please input the project manager's name:",
    //                 name: "name"
    //             },
    //             {
    //                 type: "input",
    //                 message: "Please input the project manager's ID:",
    //                 name: "id"
    //             },
    //             {
    //                 type: "input",
    //                 message: "Please input the project manager's Email:",
    //                 name: "email"
    //             },
    //             {
    //                 type: "input",
    //                 message: "Please input the project manager's office number:",
    //                 name: "officeNumber"
    //             },
    //             {
    //                 type: "list",
    //                 message: "Would you like to add another employee?",
    //                 choices: ["Yes", "No"],
    //                 name: "continue"
    //             }
    //         ])
    //         .then(function (response) {

    //             var flag = true;

    //             inputs.push(new Manager(response.name, response.id, response.email, response.officeNumber));

    //             while (response.continue == "Yes" && flag == true) {

    //                 flag = false;

    //                 inquirer
    //                     .prompt([
    //                         {
    //                             type: "list",
    //                             message: "Please select an employee type:",
    //                             choices: ["Engineer", "Intern"],
    //                             name: "empType"
    //                         }

    //                     ])
    //                     .then(function (response) {

    //                         switch (response.empType) {
    //                             case "Engineer":
    //                                 inquirer
    //                                     .prompt([

    //                                     {
    //                                         type: "input",
    //                                         message: "Please input the engineer's name:",
    //                                         name: "name"
    //                                     },
    //                                     {
    //                                         type: "input",
    //                                         message: "Please input the engineer's ID:",
    //                                         name: "id"
    //                                     },
    //                                     {
    //                                         type: "input",
    //                                         message: "Please input the engineer's Email:",
    //                                         name: "email"
    //                                     },
    //                                     {
    //                                         type: "input",
    //                                         message: "Please input the engineer's github username:",
    //                                         name: "github"
    //                                     },
    //                                     {
    //                                         type: "list",
    //                                         message: "Would you like to add another employee?",
    //                                         choices: ["Yes", "No"],
    //                                         name: "continue"
    //                                     }

    //                                     ])
    //                                     .then(function (response) {

    //                                         inputs.push(new Engineer(response.name, response.id, response.email, response.github));

    //                                         if (response.continue==true)
    //                                         {
    //                                             flag = true;
    //                                             break;
    //                                         }

    //                                     });
    //                             case "Intern":
    //                                 inquirer
    //                                     .prompt([

    //                                         {
    //                                             type: "input",
    //                                             message: "Please input the intern's name:",
    //                                             name: "name"
    //                                         },
    //                                         {
    //                                             type: "input",
    //                                             message: "Please input the intern's ID:",
    //                                             name: "id"
    //                                         },
    //                                         {
    //                                             type: "input",
    //                                             message: "Please input the intern's Email:",
    //                                             name: "email"
    //                                         },
    //                                         {
    //                                             type: "input",
    //                                             message: "Please input the intern's school:",
    //                                             name: "school"
    //                                         },
    //                                         {
    //                                             type: "list",
    //                                             message: "Would you like to add another employee?",
    //                                             choices: ["Yes", "No"],
    //                                             name: "continue"
    //                                         }

    //                                     ])
    //                                     .then(function (response) {

    //                                         inputs.push(new Intern(response.name, response.id, response.email, response.school));

    //                                         if (response.continue==true)
    //                                         {
    //                                             flag = true;
    //                                             break;
    //                                         }

    //                                     });
    //                         }
    //                     });
    //             }

    //             console.log(inputs);

    //         });

    //================================================================================
    //Easier, if a bit limited code:

    inquirer
        .prompt([
            {
                type: "input",
                message: "Please input the project manager's name:",
                name: "name"
            },
            {
                type: "input",
                message: "Please input the project manager's ID:",
                name: "id"
            },
            {
                type: "input",
                message: "Please input the project manager's Email:",
                name: "email"
            },
            {
                type: "input",
                message: "Please input the project manager's office number:",
                name: "officeNumber"
            },
            {
                type: "input",
                message: "Please input the engineer's name:",
                name: "name2"
            },
            {
                type: "input",
                message: "Please input the engineer's ID:",
                name: "id2"
            },
            {
                type: "input",
                message: "Please input the engineer's Email:",
                name: "email2"
            },
            {
                type: "input",
                message: "Please input the engineer's github username:",
                name: "github"
            },
            {
                type: "input",
                message: "Please input the intern's name:",
                name: "name3"
            },
            {
                type: "input",
                message: "Please input the intern's ID:",
                name: "id3"
            },
            {
                type: "input",
                message: "Please input the intern's Email:",
                name: "email3"
            },
            {
                type: "input",
                message: "Please input the intern's school:",
                name: "school"
            }
        ])
        .then(function (response) {

            employees.push(new Manager(response.name, response.id, response.email, response.officeNumber));

            employees.push(new Engineer(response.name2, response.id2, response.email2, response.github));

            employees.push(new Intern(response.name3, response.id3, response.email3, response.school));

            console.log(employees);

            fs.writeFile(outputPath, render(employees), function (err) {

                if (err) {
                    return console.log(err);
                }
            
                console.log("Template created!");
            });

        });


}

//==================================================================================
//==================================================================================

init();
