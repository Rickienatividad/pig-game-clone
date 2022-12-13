const p1Current = document.querySelector("#p1");
const p1Score = document.querySelector(".player-1-score");

const p2Current = document.querySelector("#p2");
const p2Score = document.querySelector(".player-2-score");

const rollButton = document.querySelector(".roll");

rollButton.addEventListener("click", function rollDice() {
  const random = Math.trunc(Math.random() * (7 - 1) + 1);
  console.log(random);
  return random;
});
