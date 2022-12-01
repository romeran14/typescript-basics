interface Persona{
    nombre:string
}

function caminar(persona:Persona):void{
    console.log(persona.nombre)
}

let nueva_persona = {nombre: 'Romeran'}
caminar(nueva_persona)

//Parametro opcional
interface Persona2{
   
    peso:number
    altura: number
    nombre?:string
}

let sujetonuevo = {altura:2, peso:120}

function MostrarMediaPersona(sujeto:Persona2):string{
   
   let mediapeso:number = sujeto.altura/sujeto.peso
if (sujeto.nombre) {
    return ` ${sujeto.nombre} tiene una media de ${mediapeso} `
} else {
    return ` no tiene nombre pero tiene una media de ${mediapeso} `
}

}
console.log(MostrarMediaPersona(sujetonuevo))

//Parametros solo de lectura

interface Persona3 {
  readonly  peso:number
  readonly  altura: number
  readonly  nombre?:string
}

let tipo:Persona3 = {nombre:"Rome", altura:20, peso:220}
console.log(tipo)

//Interfaz para funciones

interface General{
    (nombre:string, apellido:string, edad: number):void
}

let funcionGeneralUno:General
funcionGeneralUno = function(nombre:string, apellido:string, edad:number):void{
    console.log(`${nombre} con el apellido ${apellido} y la edad ${edad} `)
}

funcionGeneralUno('Rome', 'Rodriguez', 30)