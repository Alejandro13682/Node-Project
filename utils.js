const sayHi = (name) => {
    console.log(`Hi ${name}`)
}

//Export one value:
module.exports = sayHi

/*'module.exports' is equal to previous 'export default' sintax. As we're exporting default, when the module is called we can name it the way we want*/