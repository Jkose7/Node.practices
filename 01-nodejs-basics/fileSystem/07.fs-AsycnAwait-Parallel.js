//Async parallel
const {readFile} = require('node:fs/promises')


//All procces in parallel
Promise.all([
    readFile('./text.txt', 'utf-8')
]).then(([text]) => {
    console.log(text)
})

