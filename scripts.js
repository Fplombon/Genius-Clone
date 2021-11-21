let order = [];
let clickedOrder = [];
let score = 0;

// 0 - Verde
// 1 - Vermelho
// 2 - Amarelo
// 3 - Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }

}

//Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

// Checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

// Função para o clique do usuário

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)

    

}

// Função que retorna a cor

let createColorElement = (color) => {
    if (color == 0) {
        return green
    } else if (color == 1) {
        return red;
    } else if  (color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}

// Função para próximo nível de jogo

let nextLevel = () => {
    score++;
    shuffleOrder(); 
}

// Função para game over

let gameOver = () => {
    alert (`Pontuação: ${score}!\nFim de Jogo\nClique em OK para reiniciar`);
    order=[];
    clickedOrder=[];

    playGame ();
}

// Função para iniciar

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo Jogo');
    score = 0;

    nextLevel();
}

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));


// Eventos de Clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame();


