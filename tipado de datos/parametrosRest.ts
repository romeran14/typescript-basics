//Parametro res, recibe un array de elementos y los recorre
const cartapostres = (postre: string, ...frutas:string[]):void => {
    console.log(`El postre es ${postre} y tiene ${frutas} `)
}

cartapostres('pie de limon', 'limon', 'fresa', 'banana')

//el resultado seria "El postre es pie de limon y tiene limon,fresa,banana"  