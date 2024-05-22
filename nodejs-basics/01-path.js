const path = require('node:path')

//info about paths
console.log(path.sep)

//join routes with path.join
const filePath = path.join('content', 'subFolder', 'text.txt')
console.log(filePath)

//name of file
const base = path.basename('content/subfolder/password.txt')
console.log(base)

//name of file without extension 
const filename = path.basename('content/subfolder/password.txt', '.txt')
console.log(filename)

//extension 
const ext = path.extname('img.jpg')
console.log(ext)