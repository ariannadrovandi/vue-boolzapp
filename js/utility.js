function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

//massimo escluso e minimo incluso
function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// massimo e minimo inclusi
function getRndNumIncl(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}