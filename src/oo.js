//function Pokemon(nomeDoPokemon, tipoDoPokemon) {
    //this.nome = nomeDoPokemon;
    //this.tipo = tipoDoPokemon;
//}

//const pikachu = new Pokemon("Pikachu", "eletrico")

class Pokemon {
    //para todo dado sensivel devemos usar o encapsulamento com # somete dentro do metodo conseguimos alterar os privados
    #hp = 100;

    //fazemos assim uma função construtora no ecmascript
    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;    
    }
    //para criar um metodo
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

//herança com extends podemos fazer uma nova classe para herdar propriedades da mãe
class Pikachu extends Pokemon {
    constructor() {
        super('Picachu', 'Elerico');     //a palavra reservada super nos permite acessar um nivel superior de instancia..
    }

    //polimorfismo
    atacar() {
        console.log(`${this.nome} atacou com choque do trovão.`)
    }
}

const pikachuDoAsh = new Pikachu('picachu', 'eletrico');

pikachuDoAsh.recebeuAtaque();
console.log(pikachuDoAsh.hp);


const pikachu = new Pokemon('pikachu', 'eletrico');
pikachu.atacar('choque do trovão')

console.log(pikachu);
console.log(pikachuDoAsh);
pikachuDoAsh.exibeHp()
//para sabermos se picachu do ash é uma instancia do pikachu 
console.log(pikachuDoAsh instanceof Pikachu);
//para saber se herdou do classe pokemon
console.log(pikachuDoAsh instanceof Pokemon);