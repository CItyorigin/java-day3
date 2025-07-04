const gameArea = document.getElementById('gameArea');
const startBtn = document.getElementById('startBtn');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');

let score = 0;
let time = 30;
let timerInterval;
let monsterInterval;

function randomPosition() {
  const x = Math.random() * (gameArea.clientWidth - 50);
  const y = Math.random() * (gameArea.clientHeight - 50);
  return { x, y };
}

function spawnMonster() {
  const monster = document.createElement('div');
  monster.classList.add('monster');

  const { x, y } = randomPosition();
  monster.style.left = `${x}px`;
  monster.style.top = `${y}px`;

  monster.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    gameArea.removeChild(monster);
  });

  gameArea.appendChild(monster);

  // 일정 시간 지나면 사라지게
  setTimeout(() => {
    if (gameArea.contains(monster)) {
      gameArea.removeChild(monster);
    }
  }, 1000);
}

function startGame() {
  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  gameArea.innerHTML = '';

  timerInterval = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time <= 0) {
      clearInterval(timerInterval);
      clearInterval(monsterInterval);
      alert(`게임 종료! 당신의 점수는 ${score}점 입니다.`);
    }
  }, 1000);

  monsterInterval = setInterval(spawnMonster, 800);
}

startBtn.addEventListener('click', startGame);
