let scores = [0, 0, 0];

const p1Current = document.querySelector("#p1");
const p1Score = document.querySelector(".player-1-score");
const p1Half = document.querySelector(".player-1-half");

p1Half.classList.remove("med-bg");

const p2Current = document.querySelector("#p2");
const p2Score = document.querySelector(".player-2-score");
const p2Half = document.querySelector(".player-2-half");

//set current player
let activePlayer = 1;

const dice = document.querySelector(".dice");

const rollButton = document.querySelector(".roll");
const holdButton = document.querySelector(".hold");
const newButton = document.querySelector(".btn-new");

let currentScore;

function switchPlayer() {
  let active = activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
  activePlayer = active;
  p1Half.classList.toggle("med-bg");
  p2Half.classList.toggle("med-bg");
  document.querySelector(`#p${activePlayer}`).textContent = 0;
  return activePlayer;
}

// switchPlayer();

let activeCurrent;

rollButton.addEventListener("click", function rollDice() {
  const random = Math.trunc(Math.random() * (7 - 1) + 1);
  // console.log(random);

  dice.setAttribute("src", `./assets/dice${random}.png`);
  activeCurrent = document.querySelector(`#p${activePlayer}`).textContent =
    Number(document.querySelector(`#p${activePlayer}`).textContent) +
    Number(random);

  if (random === 1) {
    activeCurrent = 0;
    document.querySelector(`#p${activePlayer}`).textContent = 0;
    // console.log(activeCurrent);
    switchPlayer();
  }
  console.log(activeCurrent);
  scores[activePlayer] = activeCurrent;
  return scores[activePlayer];
  // console.log(scores[activePlayer]);
  // return activeCurrent;
});

holdButton.addEventListener("click", () => {
  scoreUpdate();
  switchPlayer();
});

function scoreUpdate() {
  document.querySelector(`.player-${activePlayer}-score`).textContent =
    Number(
      document.querySelector(`.player-${activePlayer}-score`).textContent
    ) + scores[activePlayer];
}

function newGame() {
  p1Score.textContent = 0;
  p2Score.textContent = 0;
  p1Current.textContent = 0;
  p2Current.textContent = 0;
}

newButton.addEventListener("click", newGame);
