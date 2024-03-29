//Variável com nome e Quantidade de XP do Pokemon
let nomePokemon = "Pikachu";
let xpPokemon = 12000;

//Variável que receberá o nível e o rank do pokémon
let nivelPokemon;

//Estrutura de switch/Case para determinar o nível do herói com base na quantidade de XP
switch (true) {
    case xpPokemon < 1000:
        nivelPokemon = "0 á 2 e no Rank: FERRO," + " Continue evoluindo!";
        break;
    case xpPokemon >= 1001 && xpPokemon <= 2000:
        nivelPokemon = "2 a 3 e no Rank: BRONZE," + " Você está ficando forte!";
        break;
    case xpPokemon >= 2001 && xpPokemon <= 5000:
        nivelPokemon = "3 a 5 e no Rank: PRATA," + " a jornada é longa... Mas não para os guerreiros!";
        break;
    case xpPokemon >= 5001 && xpPokemon <= 7000:
        nivelPokemon = "5 a 6 e no Rank: OURO," + " Sua evolução é notória!";
        break;
    case xpPokemon >= 7001 && xpPokemon <= 8000:
        nivelPokemon = "6 a 8 e no Rank: PLATINA," + " Falta pouco para o poder máximo!";
        break;
    case xpPokemon >= 8001 && xpPokemon <= 9000:
        nivelPokemon = "8 a 9 e no Rank: ASCENDENTE," + " Realmente você é muito forte!";
        break;
    case xpPokemon >= 9001 && xpPokemon <= 10000:
        nivelPokemon = "9 a 10 e no Rank: Imortal," + " Incrível você superou seu mestre!";
        break;
    default:
        nivelPokemon = "10+ que coloca ele no rank: RADIANTE!!! " + " Nada mais te para!";
}

//Mensagem final com o nome e nível do pokémon no console
console.log("Uau! Seu Pokémon: " + nomePokemon +  " está no nível: "+ nivelPokemon);
