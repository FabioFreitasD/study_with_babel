// operadores rest

/*function somar(a, b) {
    return a + b;
}
console.log(somar(10, 20))

se quisermos continuar passando valores ficaria insustentavel para isso temos o arguments */

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10, 20, 30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10,30, 50))

//spread
const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebolDeMg = ['Cruzeiro', 'Atletico', 'America', 'Villa Nova'];
const timesDeFutebolDeSp = ['São Paulo', 'Palmeiras', 'Santos', 'Corinthias'];

const timesDeFutebol = [...timesDeFutebolDeMg, ...timesDeFutebolDeSp];

console.log(timesDeFutebol)

//podemos usar o spread com objetos literais
const carroDoFabio = {
    modelo: 'civic',
    marca: 'honda',
    motor: 1.8
}

const carroDaJosiane = {
    ...carroDoFabio,
    motor: 1.6
}

console.log(carroDaJosiane);

// desestruturação
//const motorDoCarroDaJosiane = carroDaJosiane.motor;
const { motor: motorDoCarroDaJosiane } = carroDaJosiane;
const { motor: motorDoCarroDoFabio } = carroDoFabio;

console.log(motorDoCarroDaJosiane);
console.log(carroDoFabio);
