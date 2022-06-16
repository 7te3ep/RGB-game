let redForm = document.getElementById('redForm')
let greenForm = document.getElementById('greenForm')
let blueForm = document.getElementById('blueForm')
let startButton = document.getElementById('startButton');
let jauges = document.getElementById('jauge');

var randomRedValue = 0;
var randomGreenValue = 0;
var randomBlueValue = 0;
var RGBValue = "";
var gameFinished = 0

var selectRedValue = 0;
var selectGreenValue = 0;
var selectBlueValue = 0;
var selectRGB = "";

var totalRandomValue = 0;
var score = 0;
randomRGBValue()
// donne un rgb aleatoire + le met en background
function randomRGBValue() {
    randomRedValue = parseInt(Math.random()*256)
    randomGreenValue = parseInt(Math.random()*256)
    randomBlueValue = parseInt(Math.random()*256)
    randomRGB = `rgb(${randomRedValue},${randomGreenValue},${randomBlueValue})` //formater pour le mettre en RGB
    document.querySelector("body").style.backgroundColor = randomRGB; // met la couleur au hasard en fond d'ecran
}

function scoreCalc(selectValue, randomValue) {
    score = randomValue - selectValue
    if (score < 0) {
        score = score * -1
    }
    score = parseInt((score)/2.55)
    score = 100 - score
    return score
}

// recupere le form pour le donner en rgb + l'utilise qqlq part
function selectRGBValue() {
    selectRedValue = parseInt(redForm.value); // recupere les values
    selectGreenValue = parseInt(greenForm.value);
    selectBlueValue = parseInt(blueForm.value);
    selectRGB = `rgb(${selectRedValue},${selectGreenValue},${selectBlueValue})` // les transformer en RGB
    document.getElementById("mainBox").style.backgroundColor = selectRGB // changer le background du panneau
    redScore = scoreCalc(selectRedValue, randomRedValue)
    greenScore = scoreCalc(selectGreenValue, randomGreenValue)
    blueScore = scoreCalc(selectBlueValue, randomBlueValue)
    console.log(randomBlueValue)
    console.log(randomRedValue)
    console.log(randomGreenValue)
    console.log(redScore)
    document.getElementById('jaugeRed').style.width = `${redScore}%`
    console.log(greenScore)
    document.getElementById('jaugeGreen').style.width = `${greenScore}%`
    console.log(blueScore)
    document.getElementById('jaugeBlue').style.width = `${blueScore}%`
}



function buttonClicked() {
    if (gameFinished == 1) {
        document.getElementById('validateButton').textContent = 'restart ?'
    }
    if (gameFinished == 2) {
        window.location.reload();
    }
    gameFinished = gameFinished +1
    selectRGBValue()
}
