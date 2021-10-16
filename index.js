// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const { Console } = require('console');
const generateMarkdown = require('./assets/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ["Enter the project name:",
                    "Enter project description:",
                    "Enter installation instructions:",
                    "Describe the usage:",
                    "Enter the user license (MIT, ISC, IBM, GNU, Leave blank if none):",
                    "Enter list of contributors:",
                    "List any tests:",
                    "Enter your Github user name:",
                    "Enter your email:"
                ];

// TODO: Create a function to write README file
// Print the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err)
            console.log(err);
        else
            console.log("Success");
    });
}

function init() {
    inquirer
        .prompt([
            {
                name: "projectName",
                message: questions[0]
            },
            {
                name: "description",
                message: questions[1]
            },
            {
                name: "installation",
                message: questions[2]
            },
            {
                name: "usage",
                message: questions[3]
            },
            {
                name: "license",
                message: questions[4]
            },
            {
                name: "contributors",
                message: questions[5]
            },
            {
                name: "tests",
                message: questions[6]
            },
            {
                name: "github",
                message: questions[7]
            },
            {
                name: "email",
                message: questions[8]
            }
        ])
        .then(answers => {
            console.log(answers);
            writeToFile('ReadMe.md', answers);
        })
}

function tableOfContents() {
    let lists = true;
    let input = "";
    while (lists) {
        
    }
}

// Function call to initialize app
init();
