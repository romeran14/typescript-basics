//Funciones Genericas
function mostrarGenerico<T>(dato:T):T{
    return dato
}

console.log(mostrarGenerico("Jose"))
console.log(mostrarGenerico(23))
console.log(mostrarGenerico(true))

//Clases Genericas

class Personas<T>{
    nombre:string
    cedula: number
    edad:T
    Mostrar:(dato:T) => T
}

const obj = new Personas()

//Interfaz Generica

  // las interfaces como tal no pueden ser genericas.
  // Siempre hay que definir de que tipo sera entre tags cuando se crea un elemento
  interface Gente<T>{
    nombre: T
  }

  let item:Gente<string> = {nombre: 'Rome'}
  let item2:Gente<number> = {nombre: 34}