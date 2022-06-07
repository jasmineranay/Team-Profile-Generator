# 10-OOP-Homework
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [Application Preview](#application-preview)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Links](#links)
- [Criteria](#criteria)
- [License](#license)

## Description
Build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## Installation
- Copy the repository to your system
- npm install
- node index.js

## Usage
- Quickly and easily create a Team Employee Card

## Test
- npm run test

## Links
-   Github Repository:
    - https://github.com/jasmineranay/Team-Profile-Generator.git

## Criteria
- Jest (Tests)
    - https://www.npmjs.com/package/jest
- Inquirer (Prompts)
    - https://www.npmjs.com/package/inquirer
- HTML generated from CLI inputs
    - Card for each Employee
    - Email link works correctly
    - Github Username links works
- Start of Application
    - Prompt to enter Manager's Info
        - Name
        - Employee ID
        - Email address
        - Office Number
    - Prompt to add Engineer, Intern, or Finish
    - Prompt for Engineer's Info 
        - Name
        - Employee ID
        - Email address
        - Github Username
        - Taken back to the menu for Engineer, Intern, or Finish
    - Prompt for Intern
        - Name
        - Employee ID
        - Email address
        - School
        - Taken back to the menu for Engineer, Intern, or Finish
    - When Finish is selected
        - HTML is generated with all the info provided from Prompts
- CSS 
- Different Classes
    - Employee
        - Parent Class
        - name
        - id
        - email
        - getName()
        - getEmail()
        - getRole()
            - Returns Employee
    - Manager
        - Extend Employee Class
        - officeNumber
        - getRole()
            - returns Manager
    - Engineer
        - Extend Employee Class
        - github
        - getGithub()
        - getRole()
            - returns Engineer
    - Intern
        - Extend Employee Class
        - school
        - getSchool()
        - getRole()
            - returns Intern


## License
- Copyright Jasmine Tsao
- Licensed under the: [MIT License](https://opensource.org/licenses/MIT) 
