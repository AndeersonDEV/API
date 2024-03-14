import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('.lista')

function constroiTabela(titulo, descricao, status, motivo){
    const table = document.createElement("tr")
    table.innerHTML =`
    <td>${titulo}</td>
    <td>${descricao}</td>
    <td>${status}</td>
    <td>${motivo}</td>`
    
    return table

}

async function listaProjetos(){
    const listaAPI = await conectaApi.listaProjetosAnderson();
    listaAPI.forEach(elemento => lista.appendChild(
        constroiTabela(elemento.titulo, elemento.descricao, elemento.status, elemento.motivo)))
}
listaProjetos()
