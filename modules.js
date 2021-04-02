/*If we console 'names' module, notice the 'secret' const is not displayed since it isn't included in the export.
We'll only see the shared variables in {key: value} format
console.log(names)*/
const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative')
//'numbers' has already called a function inside of it, so we can don't have to assign it to a variable:
require('./numbers')

console.log(data.singlePerson)
console.log(data.items)

const {readFileSync, writeFileSync} =  require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


console.log(first, second)

writeFileSync('./content/result-text.txt', `This is the result of:\n ${first} and ${second}`)



sayHi('Ale')

//Access names' properties:
sayHi(names.john)
sayHi(names.peter)

/*Built-in modules:
    1) os: gets info about de operating system
    2) path: gets folders path
    3) Sync fs: manages file system syncronously
    4) Async fs: manages file system asyncronously (example with callback hell >:)
*/

const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem:  os.freemem()
}

console.log(currentOS)

const path = require('path')

//Add the path in the folders:
const filePath = path.join('/content', 'subfolder', 'test.txt')
//Show the whole path
console.log(filePath)
//Show de last path
const lastPath = path.basename(filePath)
console.log(lastPath)
//Absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

const {readFile, writeFile} =  require('fs')

readFile('./content/first.txt', 'utf-8' ,(e, result)=> {
    if(e){
        console.log(e)
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (e, result) =>{
        if(e){
        console.log(e)
        }
        const second = result;
        writeFile('./content/result-async.txt', `New result: ${first} and ${second}`, (e, result)=> {
            if(e){
                console.log(e)
            }
            console.log(result)
        })
    })
})