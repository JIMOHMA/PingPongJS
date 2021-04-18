// alert("Hello");

const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

const winningScoreSelect = document.querySelector('#playto');
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    console.log("Winning score is: ", winningScore);
    if(player.score === winningScore ) {
      isGameOver = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
    // player.display.disabled = true;
  }
}

p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
})

const resetButton = document.querySelector('#Reset');
resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;

  for (let p of [p1, p2]) {
    p.score = p2.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove("loser", "winner");
    p.button.disabled = false;
  }
}