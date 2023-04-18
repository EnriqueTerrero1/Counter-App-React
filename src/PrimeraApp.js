import React from "react";

import PropTypes from 'prop-types';
export default function PrimeraApp({saludo,subtitulo="Hi it's me"}){
    
    // const saludos = "Hola Mundo";

   
    console.log(saludo);
    // const persona = {
    //     nombre:"Enrique",
    //     edad:22
    // }

    // if(!saludo){
    //     throw new Error("El saludo es necesario");
    // }
    return(
        <>
        <h1>{saludo}</h1>
        <h2>{subtitulo}</h2>

        <h3>Mi primera aplicacion</h3>
        </>
    );
  
    
}
PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired
}
