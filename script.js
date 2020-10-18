const holes=document.querySelectorAll('.hole');
const scoreBoard=document.querySelector('.score');
const moles=document.querySelectorAll('.mole');
let lastHole;
let timeUp=false;
var score=0;

function randomTime(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

function randomHole(holes){
    const index=Math.floor(Math.random()*holes.length);//floor gives the lowest integer valu and removes decimals
    const hole=holes[index];
    if(hole===lastHole)
        return randomHole(holes);//recurssion-calling th same func inside the func
    lastHole=hole;
    return hole;
}

function peep(){
    const time=randomTime(1000,2000);
    const hole=randomHole(holes);
    hole.classList.add("up");
    setTimeout(()=>{
        hole.classList.remove("up");
        if(!timeUp){
            peep();
        }
    },time);
}
function startGame(){
    scoreBoard.textContent=0;
    timeUp=false;
    score=0;
    peep();
    setTimeout(()=>timeUp=true,15000);
}
function whack(e){
    score++;
    this.parentNode.classList.remove("up");
    scoreBoard.textContent=score;
}
moles.forEach(mole=>mole.addEventListener("click",whack));