import { getUser } from "../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones',()=>
{
    test('getUser debe de retornar un objeto', ()=>{
        const userTest ={
            uid:'ABC123',
            username:'El_Papi1502'
        }
            const user = getUser();
          
            expect(user).toStrictEqual(userTest);

    })
    test('usuarios Activos',()=>{
        const nombre= 'Juan';
        const user = getUsuarioActivo(nombre);
        expect(user).toStrictEqual(userTest);
    })
})