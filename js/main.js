let doc = document;
let btn = doc.querySelector('.btn');
let pwd = doc.querySelector('.pwd');
let res = doc.querySelector('.res');

let btn11 = doc.querySelector('#pl1-1');
let btn12 = doc.querySelector('#pl1-2');
let btn13 = doc.querySelector('#pl1-3');
let btn21 = doc.querySelector('#pl2-1');
let btn22 = doc.querySelector('#pl2-2');
let btn23 = doc.querySelector('#pl2-3');

let btnTurn = doc.querySelector('button');

let turn1, turn2;

btnTurn.onclick = function() {
    if (!turn1 || !turn2) {
        console.log('Один из игроков не совершил ход');
        return;
    }

    console.log(`player1: ${turn1}`);
    console.log(`player2: ${turn2}`);
    
}

btn11.onclick = function() {
    turn1 = 'Камень';
    doc.querySelector('#ch1').innerHTML = `player1: ${turn1}`;
}
btn12.onclick = function() {
    turn1 = 'Ножницы';
    doc.querySelector('#ch1').innerHTML = `player1: ${turn1}`;
}
btn13.onclick = function() {
    turn1 = 'Бумага';
    doc.querySelector('#ch1').innerHTML = `player1: ${turn1}`;
}
btn21.onclick = function() {
    turn2 = 'Камень';
    doc.querySelector('#ch2').innerHTML = `player2: ${turn2}`;
}
btn22.onclick = function() {
    turn2 = 'Ножницы';
    doc.querySelector('#ch2').innerHTML = `player2: ${turn2}`;
}
btn23.onclick = function() {
    turn2 = 'Бумага';
    doc.querySelector('#ch2').innerHTML = `player2: ${turn2}`;
}



