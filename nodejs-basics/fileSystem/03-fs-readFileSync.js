const fs = require('node:fs')


//the problem of using synchrony is that the thread blocks 
const text = fs.readFileSync('./text.txt', 'utf-8')
console.log(text)

//the proccess wait that the firts instruction end
//this proccess can be execute while the firts wait the response 
console.log('procces')


