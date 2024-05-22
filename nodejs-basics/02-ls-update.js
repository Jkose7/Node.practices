const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

fs.readdir(folder, (err, files) => {
    if (err) {
        console.log(err)
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
})