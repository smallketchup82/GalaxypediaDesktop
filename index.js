// Build assistant
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
    if (answers.platform === "Windows") {
        require('./build-win.js')
    } else if (answers.platform === "MacOS") {
        require('./build-macos.js')
    } else if (answers.platform === "Linux (UNSTABLE)") {
        console.log(chalk.redBright("Warning: Linux support is unstable and may have errors. Use at your own risk"))
        require('./build-linux.js')
    } else {
        console.log(chalk.redBright("Exiting..."))
        process.exit()
    }
})
.catch(err => {
    console.error(err)
})