//Função positions;
//Array posicoesAtletas que recebe os parâmetros da Positions conforme as posições de pódio;
//Condição que vai inverter a posição do daniel caso ele apareça em 2° ou 3° lugar;
//Laço de repetição pra listar os nomes do pódio;



function positions(firtsPlace, secondPlace, lastPlace){

    const posicoesAtletas = ['pódio', firtsPlace, secondPlace, lastPlace];

    if (posicoesAtletas[2] == "Daniel") {
    
        posicoesAtletas[1] = secondPlace
        posicoesAtletas[2] = firtsPlace
        posicoesAtletas[3] = lastPlace
        

    }else if(posicoesAtletas[3] == "Daniel") {

        posicoesAtletas[1] = firtsPlace
        posicoesAtletas[2] = lastPlace
        posicoesAtletas[3] = secondPlace
        
    }
    
    let i = 1

    while (i < posicoesAtletas.length) {
        
        console.log(`${i}ª - Colocado: ${posicoesAtletas[i++]}`)
     
    }
  
}

//console.log(positions("Rafael", "Manoel", "Daniel"))

//Como Daneil tem bônus de vantagem:

//PRIMEIRO TESTE, CASO APAREÇA EM 2º LUGAR console: ['Daniel', 'Rafael', 'Manoel']
//DESCOMENTAR:
//positions("Rafael", "Daniel", "Manoel")

//SEGUNDO TESTE, CASO APAREÇA EM 3º LUGAR console: ['Rafael', 'Daniel','Manoel']
//DESCOMENTAR:
//positions("Rafael", "Manoel", "Daniel")

//TERCEIRO TESTE, CASO APAREÇA EM 1º LUGAR NADA ACONTECE console: ['Daniel', 'Rafael','Manoel']
//DESCOMENTAR:
//positions("Daniel", "Rafael", "Manoel")