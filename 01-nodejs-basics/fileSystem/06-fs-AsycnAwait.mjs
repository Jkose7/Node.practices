import { readFile } from 'node:fs/promises';

//IIFE -> Inmediatly Invoked Function Expression 
const text = await readFile('./text.txt', 'utf-8')
console.log(text)

console.log('read file')