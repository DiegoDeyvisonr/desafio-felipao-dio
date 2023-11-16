// Variaveis do heroi ##
let nomeHeroi = "Bichu piruleta"
let xp = 1500

//variavel matriz do ranque... ##
let nivel = ["ferro", "Bronze", "prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

// variavel para armazenar a mensagem de saída ##
let message;

// condições
switch (true) {
    case (xp <= 1000):
        message = `O Heroi ${nomeHeroi} está no nível ${nivel[0]}`;
        break;

    case (xp > 1001 && xp < 2000):
        message = `O Heroi ${nomeHeroi} está no nível ${nivel[1]}`;
        break;

    case (xp > 2001 && xp < 5000):
        message = `O Heroi ${nomeHeroi} está no nível ${nivel[2]}`;
        break;

    case (xp > 6001 && xp < 7000):
        message = `O Heroi ${nomeHeroi} está no nível ${nivel[3]}`;
        break;

    case (xp > 7001 && xp < 8000):
        message = `O Heroi ${nomeHeroi} está no nível ${nivel[4]}`;
        break;

    case (xp > 8001 && xp < 9000):
        message = `O Heroi ${nomeHeroi} está no nível ${nivel[5]}`;
        break;

    case (xp > 9001 && xp < 10000):
        message = `O Heroi ${nomeHeroi} está no nível ${nivel[6]}`;
        break;

    case (xp >= 10001):
        message = `O Heroi ${nomeHeroi} está no nível ${nivel[7]}`;
        break;

    default:
        message = `O Heroi ${nomeHeroi} está sem nível`;
        break;

}
// mensagem de saida ##

console.log(message);

