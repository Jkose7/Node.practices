const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

const dir = async (folder) => {
    //inicialice the files
    let files

    //get the files of the foldre
    try {
        files = await fs.readdir(folder)
    } catch (error) {
        console.log('could not read file', error)

        //control the error
        process.exit(1)
    }

    //map the files a get the info
    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats

        try {
            stats = await fs.stat(filePath)
        } catch (error) {
            console.error('could not read file', error)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'D' : 'F'
        const fileSize = stats.size

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)}`
    })


    const fileInfo = await Promise.all(filesPromises)
    fileInfo.forEach(file => console.log(file))
}

dir(folder)