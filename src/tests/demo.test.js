describe('Pruebas en el archivo demo.test.js',()=>{
    test('deben de ser iguales los string',()=>{
        const mensaje = 'Hola Mundo';
        const mensaje2 = `Hola Mundo`;
    
        expect(mensaje).toBe(mensaje2);
    
    })
})

