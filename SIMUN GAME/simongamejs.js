let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }

}) ;
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
};
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelup(){
    userseq=[];
 level++;
 h2.innerText=`level no: ${level}`;
 let random=Math.floor(Math.random()*3);
 let randomcolor=btns[random];
 let randombtn=document.querySelector(`.${randomcolor}`);
 gameseq.push(randomcolor);
 console.log(gameseq);
 btnflash(randombtn);
};
function btnpress(){
    console.log(this);
    let btn=this;
    // btnflash(btn); // this is for white color
    userflash(btn);  // this is for another color
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);
    checkans(userseq.length-1);
};
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
};
 function checkans(index){
    console.log("currrent level", level);
    // let index=level-1;
    if(userseq[index]==gameseq[index]){
        // console.log("same value");
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
            
        }
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start game`;
        document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
       }, 200);
       reset();
    }
 };
 function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
 };