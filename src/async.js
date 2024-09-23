//assincronismo
function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

//promise
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoess = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve (execucoes);
    } catch(e) {
        reject('Deu ruim')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuario: ${login}`)
        }, 3000)
    })
}

//console.log("inicio")
//console.log = (funcaoMuitoPesada());

//funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

//console.log("fim")

//para voltar a função sincrona novamente nos podemos usar async await
async function execucaoPrincipal() {
    console.log("inicio")

    //await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    //uma outra forma de usar await

    promiseComParametros(`fabiofreitascma@gmail.com`, 123454).then(resultado => {
        console.log(resultado)
    })

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }


    console.log("fim")
}
execucaoPrincipal();