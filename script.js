const p1Current = document.querySelector("#p1");
const p1Score = document.querySelector(".player-1-score");
const p1Half = document.querySelector(".player-1-half");
p1Half.style.backgroundColor = "rgb(244, 195, 244)";

const p2Current = document.querySelector("#p2");
const p2Score = document.querySelector(".player-2-score");
const p2Half = document.querySelector(".player-2-half");
p2Half.style.backgroundColor = "rgb(223, 126, 220)";

const dice = document.querySelector(".dice");

const rollButton = document.querySelector(".roll");
const holdButton = document.querySelector(".hold");

rollButton.addEventListener("click", function rollDice() {
  const random = Math.trunc(Math.random() * (7 - 1) + 1);
  console.log(random);

  dice.setAttribute("src", `./assets/dice${random}.png`);

  if (random !== 1) {
    p1Current.textContent = Number(p1Current.textContent) + random;
  } else if (random === 1) {
    p1Current.textContent = 0;
  }
  return random;
});

holdButton.addEventListener("click", function p1AddScore() {
  p1Score.textContent = p1Current.textContent;
  p1Current.textContent = 0;
  if (p1Half.style.backgroundColor === "rgb(223, 126, 220)") {
    p1Half.style.backgroundColor = "rgb(244, 195, 244)";
  } else if (p1Half.style.backgroundColor === "rgb(244, 195, 244)") {
    p1Half.style.backgroundColor = "rgb(223, 126, 220";
  }
  if (p2Half.style.backgroundColor === "rgb(223, 126, 220)") {
    p2Half.style.backgroundColor = "rgb(244, 195, 244)";
  } else if (p2Half.style.backgroundColor === "rgb(244, 195, 244)") {
    p2Half.style.backgroundColor = "rgb(223, 126, 220";
  }
});
