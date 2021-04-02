const numb1 = 5
const numb2 = 10

function addValues (){
    console.log(`The sum is: ${numb1 + numb2}`)
}

//As everything is module in Node, we can omit the export and call this file just with the 'require'in app.js
addValues()