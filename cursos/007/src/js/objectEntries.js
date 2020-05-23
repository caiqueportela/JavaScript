const cursos = {
    node: 90,
    angular: 70,
    react: 50,
    backbone: 80,
};

const cursosChaves = Object.keys(cursos);

document.querySelector('#cursos').innerHTML = `<ul>
    ${cursosChaves.map(curso => `<li>${curso}</li>`).join('')}
</ul>`;

const cursosEntries = Object.entries(cursos);

document.querySelector('#cursosEntries').innerHTML = `<ul>
    ${cursosEntries.map(curso => `<li>${curso[0]} - ${curso[1]} alunos</li>`).join('')}
</ul>`;

const cursosMap = new Map(cursosEntries);
console.log(cursosMap.get('node'));
console.log(cursosMap.has('java'));