const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        type: 'list',
        name: 'platform',
        message: 'Select platform for build',
        choices: [
            'Windows',
            'MacOS',
            'Linux (UNSTABLE)',
            new inquirer.Separator(''),
            'Cancel'
        ],
    },
])
.then((answers) => {
    console.log(JSON.stringify(answers))
})