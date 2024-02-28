async function listaProjetosAnderson(){
    
        const busca = await fetch("https://andeersondev.github.io/teste-base/dados.json")
        const buscaConvertida = await busca.json()
    
        return buscaConvertida
            
}
 export const conectaApi = {
    listaProjetosAnderson
 }