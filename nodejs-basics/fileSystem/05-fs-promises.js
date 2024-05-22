const fs = require('node:fs/promises')
const { promisify } = require('util')

//Asynchronous with promises

fs.readFile('./text.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })

console.log('proccess')


//With promisify
//const readFilePromises = promisify(fs.promisify)