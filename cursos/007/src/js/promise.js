(function listaLivrosJavascript() {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
        .then(data => data.json())
        .then(data => data.items.map(livro => livro))
        .then(livros => livros.map(livro => livro.volumeInfo))
        .then(livros => livros.map(livro => livro.title))
        .then(livros => renderizarLista('promiseListaLivro', livros))
        .catch(erro => console.log(erro.message))
        .finally(() => console.log('Fim da listaLivrosJavascript'));
})();