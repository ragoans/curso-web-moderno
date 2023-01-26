console.log(typeof Object) //function
console.log(typeof new Object()) //objetct

const Cliente = function () {}
console.log(typeof Cliente) //function
console.log(typeof new Cliente()) //object


class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) //class é função
console.log(typeof new Produto()) //object
