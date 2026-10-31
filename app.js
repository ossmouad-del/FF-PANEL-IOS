
let score = 0;
let running = false;
let demo = false;

function startTrainer() {
  score = 0;
  running = true;
  document.getElementById("score").textContent = "SCORE: 0";
  moveTarget();
}

function moveTarget() {
  if (!running) return;

  const arena = document.getElementById("arena");
  const target = document.getElementById("target");

  target.style.display = "block";
  target.style.left = Math.random() * (arena.clientWidth - 40) + "px";
  target.style.top = Math.random() * (arena.clientHeight - 60) + "px";
}

function hitTarget() {
  if (!running) return;

  score++;
  document.getElementById("score").textContent =
    "SCORE: " + score;

  moveTarget();
}

function toggleDemo() {
  demo = !demo;

  document.getElementById("map").style.opacity =
    demo ? "1" : "0.35";

  document.getElementById("demoStatus").textContent =
    demo ? "SIMULATOR: ON" : "SIMULATOR: OFF";
}
