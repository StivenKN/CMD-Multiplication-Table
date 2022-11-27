const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors')

console.clear()

crearArchivo(argv.base, argv.listar, argv.hasta)
	.then(() => console.log('Todo correcto'.green))
	.catch(() => console.log('Todo mal'.magenta))
