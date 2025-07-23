const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const menu = document.getElementById("buttonbutton");
const up = document.getElementById("up");
const down = document.getElementById("down");
const menu_list = document.getElementById("menulist");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const ball = document.querySelector("#ball");
var ballY = 0;
var button_pressed = false;

function hideall(){
page1.style.display= "none";
page2.style.display= "none";
page3.style.display= "none";
}
function closemenu(){
    menu_list.style.display = "none";
}

btn1.addEventListener("click", function() {
    hideall(); 
    page1.style.display="block";
});
btn2.addEventListener("click", function() {
    hideall(); 
    page2.style.display="block";
});
btn3.addEventListener("click", function() {
    hideall(); 
    page3.style.display="block";
});
up.addEventListener("mousedown", function() {
    setInterval(function(){
        ballY -= 1;
        ball.style.top = ballY+"px";
    },50);
    /*ballY -= 1;
    ball.style.top = ballY+"px";*/
});
up.addEventListener("mouseup", function() {
    clearInterval(itvId1);
});

down.addEventListener("click", function() {
    ballY += 1;
    ball.style.top = ballY+"px";
});
menu.addEventListener("click", function(){
    if (menu_list.style.display === ("none")){
        menu_list.style.display="block";
    }
    else{
        menu_list.style.display="none";
    }
})
hideall();
menu_list.style.display = "none"