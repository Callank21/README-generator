// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const  generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Project\'s name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'What is your github\'s link?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your github link!');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'desc',
        message: 'Enter a description for your project:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter your installation instructions:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions and examples for use:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your usage info!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'cont',
        message: 'Enter instructions on how to contribute to the project:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your contribution info!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you want applied to your README? (Hit enter for none)',
        choices: ['MIT License', 'GNU Lesser Genreal Public License v3.0', 'Mozilla Public LIcense 2.0', 'GNU General Public License v3.0', 'Apache-2.0','The Unlicense']
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter instructions on how to test the project:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your testing instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'pic',
        message: 'Enter the file link for a picture in your README.md',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your testing instructions!');
                return false;
            }
        }
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        return new Promise((resolve, reject) => {
          fs.writeFile(fileName, generateMarkdown(data), err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            }
      
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
              ok: true,
              message: 'File created!'
            });
          });
        });
}

// TODO: Create a function to initialize app
function init() {
    const data = inquirer.prompt(questions)
    data.then(data => {
        writeToFile("../README.md", (data));
    })
}

// Function call to initialize app
init();
