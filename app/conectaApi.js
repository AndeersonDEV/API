

const containerVideos = document.querySelector('.lista')

async function buscarEMostrarProjetos(){
    try{
        const busca = await fetch("https://andeersondev.github.io/teste-base/dados.json")
        const buscaConvertida = await busca.json()
            buscaConvertida.forEach(projeto => {
                containerVideos.innerHTML += `
                <tr>
                    <td>${projetos.titulo}</td>
                    <td>${projetos.descricao}</td>
                    <td>${projetos.status}</td>
                    <td>${projetos.motivo}</td>
                </tr>
                `
            })
    }catch(error){
        containerVideos.innerHTML =`
        <p>Houve um erro ao carregar os videos: ${error}</p>
        `

    }
}
buscarEMostrarProjetos()