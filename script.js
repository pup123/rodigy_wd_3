let turn = "X";
let title = document.querySelector(".title");
let squar = [];

function end(num1,num2,num3){
    title.innerHTML=`${squar[num1]} Winner Winner`
    document.getElementById('item'+num1).style.background="#EDFC65"
    document.getElementById('item'+num2).style.background="#EDFC65"
    document.getElementById('item'+num3).style.background="#EDFC65"

    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){location.reload()},3000)
}
function checkDraw() {
    // Check if all cells are filled
    if (squar.every(cell => cell !== "")) {
        // All cells are filled and no winner found, so it's a draw
        announceDraw();
    }
}
function announceDraw() {
    title.innerHTML = "It's a Draw!";
    setInterval(function() {title.innerHTML += "."}, 1000);
    setTimeout(function() {location.reload()}, 3000);
}
function winner() {
    for (let i = 1; i <= 9; i++) {
        let element = document.getElementById("item" + i);
        if (element) {
            squar[i] = element.innerHTML;
        } else {
            squar[i] = "";
        }
    }
    if (squar[1] === squar[2] && squar[2] === squar[3] && squar[1] !== "") {
        end(1,2,3);
    } else if (squar[4] === squar[5] && squar[5] === squar[6] && squar[4] !== "") {
        end(4,5,6);
    } else if (squar[7] === squar[8] && squar[8] === squar[9] && squar[7] !== "") {
        end(7,8,9);
    } else if (squar[1] === squar[4] && squar[4] === squar[7] && squar[1] !== "") {
        end(1,4,7);
    } else if (squar[2] === squar[5] && squar[5] === squar[8] && squar[2] !== "") {
        end(2,5,8);
    } else if (squar[3] === squar[6] && squar[6] === squar[9] && squar[3] !== "") {
        end(3,6,9);
    } else if (squar[1] === squar[5] && squar[5] === squar[9] && squar[1] !== "") {
        end(1,5,9);
    } else if (squar[3] === squar[5] && squar[5] === squar[7] && squar[3] !== "") {
        end(3,5,7);
    } else {
        // Check if it's a draw if no winner is found
        checkDraw();
    }
}

    
    

function game(id) {
    let element = document.getElementById(id);
    if (element) {
        if (turn === "X" && element.innerHTML === '') {
            element.innerHTML = 'X';
            turn = "O";
            title.innerHTML = "O'Turn";
        } else if (turn === "O" && element.innerHTML === '') {
            element.innerHTML = 'O';
            turn = "X";
            title.innerHTML = "X'Turn ";
        }
        winner();
    } else {
        console.error("Element with ID '" + id + "' is not found.");
    }
}
