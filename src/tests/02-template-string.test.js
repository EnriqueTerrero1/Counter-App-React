import { getSaludo } from "../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js',()=>{

      test('prueba en el metodo getSaludo',()=>{
            const nombre = 'Fernando';
                const saludo= getSaludo(nombre)

                expect(saludo).toBe(`Hola ${nombre}`);
      } ) 
})