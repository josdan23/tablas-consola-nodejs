const getUserById = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Daniel'
    }

    setTimeout( () => {
        callback( user );
    }, 1500 );

}

getUserById( 10 , ( ) => {
    console.log( 'hola' );
});