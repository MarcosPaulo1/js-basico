
let idade = 45;


let aluno1 = {
    nome: "Roger",
    idade: 21,
    curso: "js"
}
let aluno2 = {
    nome: "Carlsen",
    idade: idade,
    curso: "xadrez"
}
let lista = [aluno1, aluno2];

for (let aluno of lista){
    if (aluno.idade < 50){
        console.log(aluno);
    }
}