const fs = require('fs')

const crearArchivo = async (base, listar, hasta) => {
	try {
		let salida = ''

		for (let index = 1; index <= hasta; index++) {
			salida += `${base} x ${index} = ${base * index} \n`
		}

		fs.writeFileSync(`./output/tabla-${base}.txt`, salida)
		console.log('Archivo creado! \n'.blue)

		if (listar) {
			console.log('========================'.rainbow)
			console.log(`Tabla del ${base}`.yellow)
			console.log('========================'.rainbow)
			console.log(salida.yellow)
		}
	} catch (error) {
		throw error
	}
}

module.exports = {
	crearArchivo,
}
