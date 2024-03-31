const crearPerfilDeUsuario = (nombre:string, edad:number, pais:string = "No especificado"):object => {
    const perfil = {
        nombre: nombre,
        edad: edad,
        pais: pais
    }
    return perfil;
}

let usuario = crearPerfilDeUsuario("Gregory", 30, "RD");
let usuario1 = crearPerfilDeUsuario("Jose", 35);

console.log(usuario);
console.log(usuario1);

export {};