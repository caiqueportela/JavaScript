(async function asyncAwaitListaLivros() {
    try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=javascript');

        const dados = await response.json();
        
        renderizarLista('asyncAwaitListaLivro', dados.items
            .map(livro => livro.volumeInfo)
            .map(livro => livro.title)
        );
    } catch (erro) {
        console.error(erro.message);
    } finally {
        console.log('Fim da asyncAwaitListaLivros');
    }
})();
