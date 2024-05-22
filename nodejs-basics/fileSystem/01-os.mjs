import { release, platform, arch, uptime } from 'node:os'


console.log('Informacion de tu sistema operativo')

console.log(release())
console.log(platform())
console.log(arch())
console.log(uptime() / 60 / 60)