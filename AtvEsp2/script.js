function adicionarItem(){
    let itemAdicionar = document.getElementById("itemAdicionar");
    let listaItens = document.getElementById("listaItens");

    let itemLista = document.createElement("li");
    itemLista.textContent = itemAdicionar.value;

    listaItens.appendChild(itemLista);

    itemAdicionar.value = "";
    itemAdicionar.focus();
}