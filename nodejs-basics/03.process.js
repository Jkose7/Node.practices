//process global object 
//info y control about current execute

//give arg 
console.log(process.argv)

//control process and finish 
//process.exit(0) // 0 -> all work // 1 -> problem 

//control events
process.on('exit', () => {
    //clean
})

//current workin directory 
//console.log(process.cmd())

//platform
console.log(process.env.LET)