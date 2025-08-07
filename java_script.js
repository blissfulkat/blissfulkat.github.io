const dracorextext = document.querySelector("#dracorex-text");
const peteranodontext = document.querySelector("#peteranodon-text");
const Stygimolochtext = document.querySelector("#Stygimoloch-text");
const Carnotaurustext = document.querySelector("#Carnotaurus-text");
const Ichytiosaurtext = document.querySelector("#Ichytiosaur-text");
const Pachycephalosaurustext=document.querySelector("#Pachycephalosaurus-text");
const dracorexbutton = document.querySelector("#dracorex-button");
const peteranodonbutton = document.querySelector("#peteranodon-button");
const Stygimolochbutton = document.querySelector("#stygimoloch-button");
const Carnotaurusbutton = document.querySelector("#carnotaurus-button");
const Ichytiosaurbutton = document.querySelector("#itchyosaur-button");
const Pachycephalosaurusbutton=document.querySelector("#Pachycephalosaur-button");
const gameguide = document.querySelector("#game-guide");
const gameguidebutton = document.querySelector("#open-game-guide");
const navbar=document.querySelector("#nav-bar");
const navbutton=document.querySelector("#menu");
const navbutton1=document.querySelector("#nav-button-1");
const navbutton2=document.querySelector("#nav-button-2");
const sidebar = document.querySelector("#sidebar");

const learnpage = document.querySelector("#learning-page");
const gamepage = document.querySelector("#game-page");
const gamestartbutton = document.querySelector("#play-game_button");
const plush_p = document.querySelector("#stage-2");


function hideall(){ 
    navbar.style.display="none";
    sidebar.style.display="none";
    gamepage.style.display="none";
}
function hidedata(){
    dracorextext.style.display="none";
    peteranodontext.style.display="none";
    Stygimolochtext.style.display="none";
    Carnotaurustext.style.display="none";
    Ichytiosaurtext.style.display="none";
    Pachycephalosaurustext.style.display="none";
    gameguide.style.display="none";
}

gameguidebutton.addEventListener("click", function () {
    if (gameguide.style.display==="block"){
        gameguide.style.display="none";
    }
    else{
        gameguide.style.display="block";
    }
});

navbutton.addEventListener("click", function () {
    if (navbar.style.display==="block"){
        navbar.style.display="none";
    }
    else{
        navbar.style.display="block";
    }
});

navbutton1.addEventListener("click", function () {
    learnpage.style.display="block";
    gamepage.style.display="none";
});
navbutton2.addEventListener("click", function () {
    if (sidebar.style.display==="block"){
        sidebar.style.display="none";
    }
    else{
        sidebar.style.display="block";
    }
});

dracorexbutton.addEventListener("click", function () {
    if (dracorextext.style.display==="block"){
        dracorextext.style.display="none";
    }
    else{
        dracorextext.style.display="block";
    }
});

peteranodonbutton.addEventListener("click", function () {
    if (peteranodontext.style.display==="block"){
        peteranodontext.style.display="none";
    }
    else{
        peteranodontext.style.display="block";
    }
});
Stygimolochbutton.addEventListener("click", function () {
    if (Stygimolochtext.style.display==="block"){
        Stygimolochtext.style.display="none";
    }
    else{
        Stygimolochtext.style.display="block";
    }
});
Carnotaurusbutton.addEventListener("click", function () {
    if (Carnotaurustext.style.display==="block"){
        Carnotaurustext.style.display="none";
    }
    else{
        Carnotaurustext.style.display="block";
    }
});
Ichytiosaurbutton.addEventListener("click", function () {
    if (Ichytiosaurtext.style.display==="block"){
        Ichytiosaurtext.style.display="none";
    }
    else{
        Ichytiosaurtext.style.display="block";
    }
});
Pachycephalosaurusbutton.addEventListener("click", function () {
    if (Pachycephalosaurustext.style.display==="block"){
        Pachycephalosaurustext.style.display="none";
    }
    else{
        Pachycephalosaurustext.style.display="block";
    }
});

gamestartbutton.addEventListener("click", function () {
    learnpage.style.display=" none";
    gamepage.style.display= "block";
});
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
function MoveDurian() {
plush_p.style.left = GetRandom(0, 500) + "px";
plush_p.style.top = GetRandom(0, 500) + "px";
}
setInterval(MoveDurian, 1000);
const stat=document.getElementById("stage");
const popAudio = new Audio('audio/dinosaur-roar-with-screams-and-growls-193210.mp3');
//create an new Audio Object using sound file
var score=0; //to track how many clicks
function durianCatch() {
//increases score after clicking
score++;
//update html scorebox
stat.innerHTML = "Score: " + score;
popAudio.play(); //play the audio!
}
//link durian to mouseclick to durianCatch function
plush_p.addEventListener("click",durianCatch);

    
hidedata();
hideall();