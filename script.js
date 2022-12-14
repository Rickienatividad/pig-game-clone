const p1Current = document.querySelector("#p1");
const p1Score = document.querySelector(".player-1-score");
const p1Half = document.querySelector(".player-1-half");
p1Half.style.backgroundColor = "rgb(244, 195, 244)";

const p2Current = document.querySelector("#p2");
const p2Score = document.querySelector(".player-2-score");
const p2Half = document.querySelector(".player-2-half");
p2Half.style.backgroundColor = "rgb(223, 126, 220)";

//set current player
let activePlayer = 1;

const dice = document.querySelector(".dice");

const rollButton = document.querySelector(".roll");
const holdButton = document.querySelector(".hold");

let currentScore;

function switchPlayer() {
  let active = activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
  activePlayer = active;
  // console.log(activePlayer);
  return activePlayer;
}

holdButton.addEventListener("click", switchPlayer);
// switchPlayer();

rollButton.addEventListener("click", function rollDice() {
  const random = Math.trunc(Math.random() * (7 - 1) + 1);
  console.log(random);

  dice.setAttribute("src", `./assets/dice${random}.png`);
  document.querySelector(`#p${activePlayer}`).textContent =
    Number(document.querySelector(`#p${activePlayer}`).textContent) +
    Number(random);

  if (random === 1) {
    document.querySelector(`#p${activePlayer}`).textContent = 0;

    switchPlayer();
  }
});
