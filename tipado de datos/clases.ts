class Vehiculo {
    marca:string
    fecha:string
    puertas:number

    constructor(marca_:string, fecha_: string, puertas_:number){
        this.marca = marca_
        this.fecha = fecha_
        this.puertas = puertas_
    }

    acelerar():void{
        console.log('ojo que acelero')
    }
    frenar():void{
        console.log('ojo que freno')
            }
}

const coche = new Vehiculo ('Ford', '12/7/2018', 4)

//Herencia

class Padre{
    nombre:string
    edad:number
    constructor(_nombre:string, _edad:number){
        this.nombre = _nombre
        this.edad = _edad
    }
    mostrarNombre(){
        console.log(this.nombre)
    }
}

class Hijo extends Padre{
    apellido: string
    constructor(_nombre:string, _edad: number,_apellido:string){
      super(_nombre,_edad)
      this.apellido= _apellido
    }
    mostrarNombreHijo(): void {
        console.log(this.nombre)
    }
}

const nuevohijo = new Hijo('Manuel', 22, 'Muñoz')
nuevohijo.mostrarNombre
nuevohijo.mostrarNombreHijo