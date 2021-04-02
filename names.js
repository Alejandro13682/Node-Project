//Local (we don't want to share)
const secret = 'SECRET!'

//Global. It can be accessed from anywhere
const john = 'john'
const peter = 'peter'


//Every js file is a module. If we console.log 'module', we'll see the whole object properties.
//When we do the export, we can share the entire modeule or the properties we choose
//console.log(module)

//The export:

//Export two values in object format
module.exports = {john, peter}