var newGame = document.querySelector(".newGame");
var diceScore = document.querySelector("#diceScore");
var playTurnP1=document.querySelector("#playTurnP1");
var playTurnP2=document.querySelector("#playTurnP2");
var totalScoreP1=document.querySelector("#totalScoreP1");
var totalScoreP2=document.querySelector("#totalScoreP2");
var currentScoreP1=document.querySelector("span#currentScoreP1");
var currentScoreP2=document.querySelector("#currentScoreP2");
var roleDice= document.querySelector("#roleDice");
var holdAndPass=document.querySelector("#holdAndPass");
var player1Turn = document.querySelector("#player1Turn");
var player2Turn = document.querySelector("#player2Turn");

var diceNum=0;
var turnNo=1;
var p1CScore=0;
var p2CScore=0;
var p1TScore=0;
var p2TScore=0;
decideTurn();

roleDice.addEventListener("click", function(){
    diceNum = Math.floor(Math.random()*5)+1;
    diceScore.textContent=Number(diceNum);
    if (turnNo%2===0){
        console.log("turnno:"+turnNo);
        incrementScore(diceNum);
    }else{
        console.log("turnno:i"+turnNo);
        incrementScore(diceNum);
    }
    currentScoreP1.textContent=p1CScore;
    currentScoreP2.textContent=p2CScore;   
});

holdAndPass.addEventListener("click", function(){
    if(turnNo%2===0){
            p2TScore+=p2CScore;
            turnNo++;
    }else{
        p1TScore+=p1CScore;
        turnNo++;
    }
    totalScoreP1.textContent=p1TScore;
    totalScoreP2.textContent=p2TScore;
    p2CScore=0;
    p1CScore=0;
    currentScoreP1.textContent=p1CScore;
    currentScoreP2.textContent=p2CScore; 
    diceScore.textContent="Dice Val";
    decideTurn();

})

function incrementScore(diceNum){
    if (diceNum!==1 && turnNo%2!==0){11
        p1CScore+=diceNum;
    }else if(diceNum!==1 && turnNo%2===0){
        p2CScore+=diceNum;
    } else if(diceNum===1 && turnNo%2!==0){
        p1CScore=0;
        turnNo++;

    }
    else if(diceNum===1 && turnNo%2===0){
        p2CScore=0;
        turnNo++;
    }
    decideTurn();
}
function decideTurn()
{
    if(turnNo%2===0){
        player1Turn.classList.remove("selected");
        player2Turn.classList.add("selected");
    }else{
        player2Turn.classList.remove("selected");
        player1Turn.classList.add("selected");
    }
}
