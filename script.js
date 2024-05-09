let homeScoreEL =document.getElementById("home-score");
let awayScoreEL =document.getElementById("away-score");
let homeCount = 0;
let awayCount = 0;

let homeScoreBtn1 = document.getElementById("home-plus1");
let homeScoreBtn2 = document.getElementById("home-plus2");
let homeScoreBtn3 = document.getElementById("home-plus3");
let homeScoreResetBtn = document.getElementById("home-reset");

let awayScoreBtn1 = document.getElementById("away-plus1");
let awayScoreBtn2 = document.getElementById("away-plus2");
let awayScoreBtn3 = document.getElementById("away-plus3");
let awayScoreResetBtn = document.getElementById("away-reset");

function homeScorePlusOne(){
    homeCount += 1;
    homeScoreEL.textContent = homeCount
}

function homeScorePlusTwo(){
    homeCount += 2;
    homeScoreEL.textContent = homeCount
}

function homeScorePlusThree(){
    homeCount += 3;
    homeScoreEL.textContent = homeCount
}

function homeScoreReset(){
    homeCount = 0;
    homeScoreEL.textContent = homeCount
}

function awayScorePlusOne(){
    awayCount += 1;
    awayScoreEL.textContent = awayCount
}

function awayScorePlusTwo(){
    awayCount += 2;
    awayScoreEL.textContent = awayCount
}

function awayScorePlusThree(){
    awayCount += 3;
    awayScoreEL.textContent = awayCount
}

function awayScoreReset(){
    awayCount = 0;
    awayScoreEL.textContent = awayCount
}

