async function listaProjetosAnderson(){
    
        const busca = await fetch("https://andeersondev.github.io/teste-base/dados.json")
        const buscaConvertida = await busca.json()
    
        return buscaConvertida
        // console.log(buscaConvertida)
}
// listaProjetosAnderson()
 export const conectaApi = {
    listaProjetosAnderson
 }