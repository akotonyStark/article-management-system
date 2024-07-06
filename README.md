## Requirements

- Node version 18.20.0
- json server

## Installing Dependencies
- `npm install -g json-server` to install json server globally. You can omit the -g flag to install it locally
- `npm install` to install all dependencies

## Running local json server
json-server --watch src/data/db.json --port 8000 

## Starting the application
You do not need to run the command above because in the scripts of the package.json file, I have combined running the app and ther server.

execute the comman `npm run dev` to get started right away with mock server already running

## Running tests

- execute `npm run test` to run all test scripts
- to view test results in browser instead of the terminal excute `npm run test:ui`

