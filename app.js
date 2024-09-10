

//const { argv } = require('process');
 const { crearArchivo } = require('./helpers/multiplicar');
//const { options } = require('yargs');
 const argv = require('./config/yargs');
 require('colors');

 console.clear();

//console.log( process.argv );
//console.log( argv );

//console.log( `base: yargs`,argv.base);
crearArchivo( argv.b, argv.l,argv.h )
.then( nombreArchivo => console.log(nombreArchivo.rainbow,`creado`))
.catch( err => console.log(err) );

// const [ , ,arg3=`base=5`] = process.argv;
// const [ , base = 5] = arg3.split(`=`);
// console.log( base );


// const base = 3;

//  creararchivo( base )
//  .then( nombrearchivo => console.log(nombrearchivo, 'creado'))
//  .catch( err => console.log(err));