function mostrar():void{
  console.log('funtcion 1')
}

const mostrar2 = (a:string):void =>{
    console.log(a)
}

mostrar()
mostrar2("Rome")

//Parametros opcionales dentro de las funciones
  //El parametro edad es opcional, daria como resultado undefined
const opcionales = (nombre:string, apellido:string, edad?:number) =>{
    if(edad){
        console.log(`Se llama ${nombre }${ apellido} y tiene ${edad} años`)
    }else{
        console.log(`Se llama ${nombre }${ apellido}`)
    }
}

opcionales('ROme', 'Rodriguez')

//Parametros por defecto
  //El parametro edad se define por defecto
const defecto = (nombre:string, apellido:string, edad:number = 32):string =>{
   return `Se llama ${nombre }${ apellido} y tiene ${edad} años`
}
console.log(defecto('Rome', 'Rodriguez'))

