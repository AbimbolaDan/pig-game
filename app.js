"use strict";

// const btnroll = document.querySelector(".btn-roll");
// const btnhold = document.querySelector(".btn-hold");
// const btnnew = document.querySelector(".btn-new");

// const current_0 = document.getElementById("current-0");
// const current_1 = document.getElementById("current-1");
// const die_1 = document.querySelector(".die-1");
// const score_0 = document.querySelector("#score-0");
// const score_1 = document.getElementById("score-1");
// const player_0 = document.querySelector(".player-0");
// const player_1 = document.querySelector(".player-1");

// const scores = [0, 0];
// let currentSCore = 0;
// let activePlayer = 0;

// score_0.textContent = 0;
// score_1.textContent = 0;
// die_1.classList.add("hide");

// btnroll.addEventListener("click", () => {
//   const randomDiceRoll = Math.trunc(Math.random() * 6 + 1);
//   die_1.src = `./imgs/die-${randomDiceRoll}.jpg`;
//   die_1.classList.remove("hide");
//   if (randomDiceRoll !== 1) {
//     currentSCore += randomDiceRoll;
//     document.getElementById(`current-${activePlayer}`).textContent =
//       currentSCore;
//   } else {
//     document.getElementById(`current-${activePlayer}`).textContent = 0;
//     currentSCore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player_0.classList.toggle("player-active");
//     player_1.classList.toggle("player-active");
//   }
// });

// btnhold.addEventListener("click", () => {
//   document.getElementById(`current-${activePlayer}`).textContent = 0;
//   currentSCore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player_0.classList.toggle("player-active");
//   player_1.classList.toggle("player-active");

//   scores[activePlayer] += currentSCore;
//   scores[activePlayer] = document.getElementById(
//     `current-${activePlayer}`,
//   ).textContent = scores[activePlayer];
// });

const btnroll = document.querySelector(".btn-roll");
const btnhold = document.querySelector(".btn-hold");
const btnreset = document.querySelector(".btn-reset");
const die_1 = document.querySelector(".die-1");

const score_0 = document.querySelector("#score-0");
const score_1 = document.querySelector("#score-1");
const current_0 = document.querySelector("#current-0");
const current_1 = document.querySelector("#current-1");
const player_0 = document.querySelector(".player-0");
const player_1 = document.querySelector(".player-1");

let scores;
let currentSCore;
let activePlayer;
let playing;

const init = function () {
  scores = [0, 0];
  currentSCore = 0;
  activePlayer = 0;
  playing = true;

  score_0.textContent = 0;
  score_1.textContent = 0;
  current_0.textContent = 0;
  current_1.textContent = 0;

  die_1.classList.add("hide");
  player_0.classList.remove("player-winner");
  player_1.classList.remove("player-winner");
  player_0.classList.add("player-active");
  player_1.classList.remove("player-active");
};

init();
btnroll.addEventListener("click", () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    die_1.src = `./imgs/die-${dice}.jpg`;
    die_1.classList.remove("hide");

    if (dice !== 1) {
      currentSCore += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentSCore;
    } else {
      currentSCore += dice;
      document.getElementById(`current-${activePlayer}`).textContent = 0;
      currentSCore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player_0.classList.toggle("player-active");
      player_1.classList.toggle("player-active");
    }
  }
});

btnhold.addEventListener("click", function () {
  if (playing) {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    scores[activePlayer] += currentSCore;
    currentSCore = 0;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      die_1.classList.add("hide");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-ative");
    } else {
      activePlayer = activePlayer === 0 ? 1 : 0;
      player_0.classList.toggle("player-active");
      player_1.classList.toggle("player-active");
    }
  }
});

btnreset.addEventListener("click", init);
