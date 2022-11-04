const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const radio5 = document.getElementById("radio5");
const radio10 = document.getElementById("radio10");
const radio15 = document.getElementById("radio15");
const radio20 = document.getElementById("radio20");
const radioHide = document.getElementById("radio-hide");
const h3 = document.querySelector("h3");
const h2 = document.querySelector("h2");
const maxRounds = document.getElementById("max-rounds");
let count = document.getElementById("count");
let scoreUser = document.getElementById("score-user");
let scoreAi = document.getElementById("score-ai");

radio5.addEventListener(`click`, () => {
    radioHide.hidden = true;
    h2.style.color = "rgb(237, 237, 237)";
    h3.hidden = false;
    maxRounds.innerHTML = 5;
    btnDisableCondition();
});
radio10.addEventListener(`click`, () => {
    radioHide.hidden = true;
    h2.style.color = "rgb(237, 237, 237)";
    h3.hidden = false;
    maxRounds.innerHTML = 10;
    btnDisableCondition();
});
radio15.addEventListener(`click`, () => {
    radioHide.hidden = true;
    h2.style.color = "rgb(237, 237, 237)";
    h3.hidden = false;
    maxRounds.innerHTML = 15;
    btnDisableCondition();
});
radio20.addEventListener(`click`, () => {
    radioHide.hidden = true;
    h2.style.color = "rgb(237, 237, 237)";
    h3.hidden = false;
    maxRounds.innerHTML = 20;
    btnDisableCondition();
});

let x; //chosen variable of user
let y; //random variable of computer
//1 = rock, 2 = paper, 3 = Scissors
btnDisableCondition();
rock.addEventListener(`click`, () => {
    x = rock.value;
    y = Math.ceil(Math.random(1) * 3);
    count.innerHTML++;
    if (x == y) {
        console.log("pc choose rock, draw!");
        h2.innerHTML = "Both choose rock! It's a draw!";
        rock.style.boxShadow = "0px 0px 15px grey";
    } else if (y == 2) {
        h2.innerHTML = `Paper<span style="font-size: 50%; vertical-align: top;">(AI)</span> beats Rock<span style="font-size: 50%; vertical-align: top;">(User)</span>`;
        rock.style.boxShadow = "0px 0px 15px red";
        scoreAi.innerHTML++;
    } else {
        h2.innerHTML = `Rock<span style="font-size: 50%; vertical-align: top;">(User)</span> beats Scissors<span style="font-size: 50%; vertical-align: top;">(AI)</span>`;
        scoreUser.innerHTML++;
        rock.style.boxShadow = "0px 0px 15px green";
    }
    btnDisableCondition();
    endText();
});
rock.addEventListener(`mouseout`, () => {
    rock.style.boxShadow = "none";
});

paper.addEventListener(`click`, () => {
    x = paper.value;
    y = Math.ceil(Math.random(1) * 3);
    count.innerHTML++;
    if (x == y) {
        console.log("pc choose paper, draw!");
        h2.innerHTML = "Both choose paper! It's a draw!";
        paper.style.boxShadow = "0px 0px 15px grey";
    } else if (y == 1) {
        console.log("pc choose rock, you win!");
        h2.innerHTML = `Paper<span style="font-size: 50%; vertical-align: top;">(User)</span> beats Rock<span style="font-size: 50%; vertical-align: top;">(Ai)</span>`;
        paper.style.boxShadow = "0px 0px 15px green";
        scoreUser.innerHTML++;
    } else {
        console.log("pc choose Scissors, pc wins!");
        h2.innerHTML = `Scissors<span style="font-size: 50%; vertical-align: top;">(AI)</span> beats Paper<span style="font-size: 50%; vertical-align: top;">(User)</span>`;
        paper.style.boxShadow = "0px 0px 15px red";
        scoreAi.innerHTML++;
    }
    btnDisableCondition();
    endText();
});
paper.addEventListener(`mouseout`, () => {
    paper.style.boxShadow = "none";
});

scissors.addEventListener(`click`, () => {
    x = scissors.value;
    y = Math.ceil(Math.random(1) * 3);
    count.innerHTML++;
    if (x == y) {
        console.log("pc choose Scissors, draw!");
        scissors.style.boxShadow = "0px 0px 15px grey";
        h2.innerHTML = "Both choose Scissors! It's a draw!";
    } else if (y == 1) {
        console.log("pc choose rock, pc wins!");
        h2.innerHTML = `Rock<span style="font-size: 50%; vertical-align: top;">(AI)</span> beats Scissors<span style="font-size: 50%; vertical-align: top;">(User)</span>`;
        scissors.style.boxShadow = "0px 0px 15px red";
        scoreAi.innerHTML++;
    } else {
        console.log("pc choose paper, you win!");
        h2.innerHTML = `Scissors<span style="font-size: 50%; vertical-align: top;">(User)</span> beats Scissors<span style="font-size: 50%; vertical-align: top;">(AI)</span>`;
        scissors.style.boxShadow = "0px 0px 15px green";
        scoreUser.innerHTML++;
    }
    btnDisableCondition();
    endText();
});
scissors.addEventListener(`mouseout`, () => {
    scissors.style.boxShadow = "none";
});

function btnDisableCondition() {
    if (Number(count.innerHTML) == Number(maxRounds.innerHTML)) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else {
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    }
}

function endText() {
    if (Number(count.innerHTML) == Number(maxRounds.innerHTML)) {
        h2.style.color = "rgb(218, 218, 85)";
        if (Number(scoreUser.innerHTML) > Number(scoreAi.innerHTML)) {
            h2.innerHTML = "You won!";
        } else if (Number(scoreUser.innerHTML) < Number(scoreAi.innerHTML)) {
            h2.innerHTML = "Ai won!";
        } else {
            h2.innerHTML = "Noone won! ~ yaaay o/ you are both loosers!";
        }
    }
}
