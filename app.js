const inquirer = require('inquirer');
const fs = require('fs');

  inquirer.prompt(
    [ 
        {
            type: 'input',
            message: 'Hello, may i have your name please?',
            name: 'name',
            validate: (input) => {if (input) {return true} else {return 'you need to input a value'}}
        },
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'title',
            validate: (input) => {if (input) {return true} else {return 'you need to input a value'}}
        },
        {
            type: 'input',
            message: 'What is your project about?',
            name: 'description',
            validate: (input) => {if (input) {return true} else {return 'you need to input a value'}}
        },
        {
            type: 'input',
            message: 'How do we install your application?',
            name: 'installation',
            validate: (input) => {if (input) {return true} else {return 'you need to input a value'}}
        },
        {
            type: 'input',
            message: 'How do we use your project?',
            name: 'usage',
            validate: (input) => {if (input) {return true} else {return 'you need to input a value'}}
        },
        {
            type: 'list',
            message: 'What licenses do you want to use?',
            choices: ['MIT', 'BSD', 'ISC', 'GPL', 'Apache'],
            name: 'license',
            validate: (input) => {if (input) {return true} else {return 'you need to input a value'}}
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributors',
            validate: (input) => {if (input) {return true} else {return 'you need to input a value'}}
        },
        {
            type: 'input',
            message: 'What are your test instructions?',
            name: 'test',
            validate: (input) => {if (input) {return true} else {return 'you need to input a value'}}
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github',
            validate: (input) => {if (input) {return true} else {return 'you need to input a value'}}
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
            validate: (input) => {if (input) {return true} else {return 'you need to input a value'}}
        }
    ]
).then(({
    name,
    title,
    description,
    installation,
    usage,
    license,
    contributors,
    test,
    github,
    email
})=> {

const ReadMeTemplate = `# ${title}
![License](https://img.shields.io/static/v1?label=License&message=${license}&color=blueviolet&style=plastic)

## Table of contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Test](#test)
* [Questions?](#questions)
### Description:
${description}
### Installation:
To run this program you need the following packages: ${installation}
### Usage:
Example of how to use this program: ${usage}
### License:
This project is licensed under: ${license}
### Contributors:
${contributors}
### Test:
To test, run the following command: ${test}

### Questions?:
If you have any questions contact ${name} on [Github](https://github.com/${github}
or [Email](https://${email})`

    createNewFile('ReadMe.md', ReadMeTemplate);

});


function createNewFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
      }
      console.log("ReadMe file successfully generated");
    });
  };

