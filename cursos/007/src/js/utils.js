function renderizarLista(...itens) {
    return document.querySelector(`#${itens[0]}`).innerHTML = `<ul>
        ${itens[1].map(item => `<li>${item}</li>`).join('')}
    </ul>`;
}