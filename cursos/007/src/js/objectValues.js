const cursosChave = Object.keys(cursos).map(chave => cursos[chave]);

renderizarLista('cursosChave', cursosChave);

renderizarLista('cursosValues', Object.values(cursos));