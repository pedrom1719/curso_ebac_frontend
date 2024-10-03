const notasAlunos = [
    {nome: 'Marcos', nota: 7},
    {nome: 'Jessica', nota: 9},
    {nome: 'Nicolas', nota: 2},
    {nome: 'Isabela', nota: 6},
];

const alunosFormados = notasAlunos
    .filter(function(aluno){
        return aluno.nota >= 6;
    })
    .map(function(aluno){
        const info = `Aluno: ${aluno.nome} - Nota: ${aluno.nota}`;
        return info;
    });

console.log(alunosFormados);

