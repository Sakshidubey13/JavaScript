
const score = localStorage.getItem("quizScore");
const total = localStorage.getItem("totalQuestions");


const scoreText = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");


if (score !== null && total !== null) {
  scoreText.textContent = `${score}/${total}`;
} else {
  scoreText.textContent = " /10";
}

restartBtn.addEventListener("click", () => {
  // Clear old quiz data
  localStorage.removeItem("quizScore");
  localStorage.removeItem("totalQuestions");

  // Redirect to quiz page
  window.location.href = "quiz.html";
});
const percent = (score / total) * 100;
const message = document.querySelector(".result-text");

if (percent >= 80) {
  message.innerText = "🔥 Excellent! You have a strong command on this topic.";
} else if (percent >= 50) {
  message.innerText =
    "👍 Good job! A little more practice will make you perfect.";
} else {
  message.innerText = "💡 Don't worry! Practice makes progress.";
}
// let current = 0;
// const interval = setInterval(() => {
//   scoreText.textContent = `${current}/${total}`;
//   current++;

//   if (current > score) {
//     clearInterval(interval);
//   }
// }, 80);
if (percent >= 80) {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });
}

