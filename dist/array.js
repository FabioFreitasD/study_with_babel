"use strict";

var redesSocias = ['Facebbok', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSocias.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSocias[i]));
}

//array com EcmaScript
redesSocias.forEach(function (nomeDaRedeSocial) {
  console.log("Eu tenho perfil na rede social: ".concat(nomeDaRedeSocial));
});

//array com map
var alunos = ['Fabio', 'Josiane', 'Ezequiel', 'Derick'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var fabio = alunos2.find(function (item) {
  return item.nome == 'Fabio';
}); //find significa procurar buscar
console.log(fabio);
var indiceDoFabio = alunos2.findIndex(function (item) {
  return item.nome == 'Fabio';
}); //findIndex serve para retornar a posição do item
console.log(indiceDoFabio);

//metodo every vamos ter o returno de true ou false
alunos2.push({
  //push vai injetar esse novo atributo ao objeto
  nome: 'Mayeli',
  curso: 'Backend' //quando adicionamos um novo atributo ao objeto tenos o returno de false
});
var todosAlunosSaoFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoFrontend);
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend'; // o && completa a frase para procurar algum aluno que estude back e front 
}); //O some vai procurar se pelo menos um dos atributos existe
console.log(existeAlgumAlunoDeBackend);

//filter 
var alunosDeBackend = alunos2.filter(function (item) {
  return item.curso === 'Backend';
});

//Uma outra maneira de escrever essa função seria

//function filtrarAlunosDeBackend(aluno) {
//    return aluno.curso == 'Backend';
//}
//const alunosDeBackend = alunos2.filter(filtrarAlunosDeBackend);

console.log(alunosDeBackend);

//reduce ele serve para acumular nossos atributos
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomeDosAlunos);