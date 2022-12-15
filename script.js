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

let currentScore;

function switchPlayer() {
  let active = activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
  activePlayer = active;
  p1Half.classList.toggle("med-bg");
  p2Half.classList.toggle("med-bg");
  return activePlayer;
}

let bigScore = document.querySelector(
  `.player-${activePlayer}-score`
).textContent;

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
  } else {
    scores[activePlayer] = document.querySelector(
      `#p${activePlayer}`
    ).textContent;
    document.querySelector(`.player-${activePlayer}-score`).textContent =
      scores[activePlayer];
  }
});
