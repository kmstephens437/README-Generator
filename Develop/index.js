//requires packages/files needed 
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

//defines the fuction that houses the inquirer prompts
const questions = () => inquirer.prompt ([
    {
        name: 'title',
        type: 'input',
        message: 'What is the Title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please decribe your project here.'
    },
    {
        name: 'tableOfContents',
        type: 'input',
        message: 'Please enter your table of contents here.'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please enter installation instructions here.'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please enter usage information here.'
    },
    {
        name: 'license',
        type: 'input',
        message: 'Please enter the license name here.'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Please enter contribution guidelines here.'
    },
    {
        name: 'testing',
        type: 'input',
        message: 'Please enter instructions for testing here.'
    },
    {
        name: 'questions',
        type: 'input',
        message: 'Please enter contact method(s) for questions here.'
    }
]);

//invokes the questions function defined above and spurs the following promise chain.
questions()
    .then((answers) => {
        const generated = generateMarkdown(answers);
        fs.writeFileSync ('README.md',generated)
    })
    .then(() => console.log('Success! README file created'))
    .catch(err => console.log(err));
