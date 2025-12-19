// Get stored score
const score = localStorage.getItem("quizScore");
const total = localStorage.getItem("totalQuestions");

// Score element
const scoreText = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

// Show score
if (score !== null && total !== null) {
  scoreText.textContent = `${score}/${total}`;
} else {
  scoreText.textContent = "0/0";
}

restartBtn.addEventListener("click", () => {
  // Clear old quiz data
  localStorage.removeItem("quizScore");
  localStorage.removeItem("totalQuestions");

  // Redirect to quiz page
  window.location.href = "quiz.html";
});
