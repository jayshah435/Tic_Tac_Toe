var player = "Player 1";
var chance = player + "'s Chance!";
var drawbox = 0;
document.getElementById("player").innerHTML = chance;

function checkfn() {

    var box1 = document.getElementById("box-1").innerHTML;
    var box2 = document.getElementById("box-2").innerHTML;
    var box3 = document.getElementById("box-3").innerHTML;
    var box4 = document.getElementById("box-4").innerHTML;
    var box5 = document.getElementById("box-5").innerHTML;
    var box6 = document.getElementById("box-6").innerHTML;
    var box7 = document.getElementById("box-7").innerHTML;
    var box8 = document.getElementById("box-8").innerHTML;
    var box9 = document.getElementById("box-9").innerHTML;
    var result = document.getElementById("result");


    if(box1 == "X" && box2 == "X" && box3 == "X"){
        .style.textDecoration = "line-through";
        result.innerHTML = "Player 1 Won!";
        result.style.visibility = "visible";

    }
    else if(box4 === "X" && box5 === "X" && box6 === "X"){
        result.innerHTML = "Player 1 Won!"
        result.style.visibility = "visible";
    }
    else if(box7 == "X" && box8 == "X" && box9 == "X"){
        result.innerHTML = "Player 1 Won!"
        result.style.visibility = "visible";
    }
    else if(box1 == "X" && box4 == "X" && box7 == "X"){
        result.innerHTML = "Player 1 Won!"
        result.style.visibility = "visible";
    }
    else if(box2 == "X" && box5 == "X" && box8 == "X"){
        result.innerHTML = "Player 1 Won!"
        result.style.visibility = "visible";
    }
    else if(box3 == "X" && box6 == "X" && box9 == "X"){
        result.innerHTML = "Player 1 Won!"
        result.style.visibility = "visible";
    }
    else if(box1 == "X" && box5 == "X" && box9 == "X"){
        result.innerHTML = "Player 1 Won!"
        result.style.visibility = "visible";
    }
    else if(box3 == "X" && box5 == "X" && box7 == "X"){
        result.innerHTML = "Player 1 Won!"
        result.style.visibility = "visible";
    }
    else if(box1 == "O" && box2 == "O" && box3 == "O"){
        result.innerHTML = "Player 2 Won!"
        result.style.visibility = "visible";
    }
    else if(box4 == "O" && box5 == "O" && box6 == "O"){
        result.innerHTML = "Player 2 Won!"
        result.style.visibility = "visible";
    }
    else if(box7 == "O" && box8 == "O" && box9 == "O"){
        result.innerHTML = "Player 2 Won!"
        result.style.visibility = "visible";
    }
    else if(box1 == "O" && box4 == "O" && box7 == "O"){
        result.innerHTML = "Player 2 Won!"
        result.style.visibility = "visible";
    }
    else if(box2 == "O" && box5 == "O" && box8 == "O"){
        result.innerHTML = "Player 2 Won!"
        result.style.visibility = "visible";
    }
    else if(box3 == "O" && box6 == "O" && box9 == "O"){
        result.innerHTML = "Player 2 Won!"
        result.style.visibility = "visible";
    }
    else if(box1 == "O" && box5 == "O" && box9 == "O"){
        result.innerHTML = "Player 2 Won!"
        result.style.visibility = "visible";
    }
    else if(box3 == "O" && box5 == "O" && box7 == "O"){
        result.innerHTML = "Player 2 Won!"
        result.style.visibility = "visible";
    }
    else {
        if (drawbox == 9){
            result.innerHTML = "Match Draw!"
            result.style.visibility = "visible";
        }
    }

}

function clickfn(clk){
    console.log(clk);
    if(player == "Player 1"){
        document.getElementById(clk).innerHTML = "X";
        document.getElementById(clk).style.pointerEvents = 'none';
        player = "Player 2";
        chance = player + "'s Chance!";
        document.getElementById("player").innerHTML = chance;
        drawbox = drawbox+1;
        checkfn();

    }
    else if(player == "Player 2"){
        document.getElementById(clk).innerHTML = "O";
        document.getElementById(clk).style.pointerEvents = 'none';
        player = "Player 1";
        chance = player + "'s Chance!";
        document.getElementById("player").innerHTML = chance;
        drawbox = drawbox+1;
        checkfn();
    }
}



function resetfn(){
    for (var i=1; i<10; i++){
        var clk = "box-" + i;
        document.getElementById(clk).style.pointerEvents = 'auto';
        document.getElementById(clk).innerHTML = "";
        player = "Player 1";
        chance = player + "'s Chance!";
        document.getElementById("player").innerHTML = chance;
        result.style.visibility = "hidden";
        drawbox= 0;

    }
}