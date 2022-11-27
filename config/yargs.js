const argv = require('yargs')
	.option('b', {
		alias: 'base',
		type: 'number',
		description: 'Es la base de la tabla de multiplicar',
		demandOption: true,
	})
	.option('l', {
		alias: 'listar',
		type: 'boolean',
		description: 'Muestra la tabla en consola',
		demandOption: false,
		default: false,
	})
	.option('h', {
		alias: 'hasta',
		type: 'number',
		description: 'Es el multiplicador máximo',
		demandOption: true,
		default: 10,
	})
	.check((argv, options) => {
		if (isNaN(argv.base)) {
			throw 'La base tiene que ser un numero'
		}
		return true
	}).argv

module.exports = argv
