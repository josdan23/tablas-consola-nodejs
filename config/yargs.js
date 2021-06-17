const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Lista la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    default: 10,
                    describe: 'Hasta donde se multiplica'
                })
                .check( (argv, option) => {
                    if ( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;