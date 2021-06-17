//todo lo creado en este archivo es privado, no puedo usarlo en otro lado
// a menos que lo importe

const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ colors.bgBlack(base) } x ${ i } = ${ base * i }\n`;
        }
        
        if ( listar ){
            console.log(colors.magenta('======================'));
            console.log('   Tabla del:', colors.bgBlack(base));
            console.log(colors.magenta('======================'));
            console.log(consola);
    
        }
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        
        return colors.red(`Archivo: tabla-${ base }.txt`);
        
    } catch (err) {
        return err;
    }

}

// Para importar usamos module.exports
// Importamos un objeto que tiene un metodo igual a la función crearArchivo
module.exports = {
    crearArchivo
}