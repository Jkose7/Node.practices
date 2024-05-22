const fs = require('node:fs')

//Asynchronous works whit callbacks 
//a callbacks is a functios that execute when 
//a task end

fs.readFile('./text.txt', 'utf-8', (err, text) => {
    console.log(text)
})

console.log('proccess')

