const prompt = require ('prompt-sync');

const input = prompt();

let propriedade = "";
let arrayPropriedades = []

while (propriedade!="sair") {
    propriedade = input('Digite a propriedade CSS: ')
    if(propriedade !="sair"){
        arrayPropriedades.push(propriedade)
        }
    let propriedadesOrdenadas = arrayPropriedades.sort()
    if(propriedade=="sair"){
        console.log("\n" + "Propriedades Ordenadas: " + "\n")
        for (var i = 0; i<propriedadesOrdenadas.length; i++){
            console.log(propriedadesOrdenadas[i])
        }
        console.log("\n")
    }
}

