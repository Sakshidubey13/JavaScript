const timer_text = document.getElementById("timer-text");
const next_button = document.getElementById("next-button");
const question = document.getElementById("question");
const option_a = document.getElementById("option-a");
const option_b = document.getElementById("option-b");
const option_c = document.getElementById("option-c");
const option_d = document.getElementById("option-d");

const radio_option_a = document.getElementById("radio-option-a");
const radio_option_b = document.getElementById("radio-option-b");
const radio_option_c = document.getElementById("radio-option-c");
const radio_option_d = document.getElementById("radio-option-d");

let timer_id = 0;
let currentQuestionIndex = 0;
let score = 0;

const questionBank = [
  {
    id: 1,
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    category: "Science",
  },
  {
    id: 2,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
    category: "Geography",
  },
  {
    id: 3,
    question: "Who painted the 'Mona Lisa'?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
    category: "Art",
  },
  {
    id: 4,
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1932"],
    answer: "1912",
    category: "History",
  },
  {
    id: 5,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Silver", "Oxygen", "Iron"],
    answer: "Oxygen",
    category: "Science",
  },
  {
    id: 6,
    question: "What is the capital city of Japan?",
    options: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
    answer: "Tokyo",
    category: "Geography",
  },
  {
    id: 7,
    question: "Which country won the first-ever FIFA World Cup in 1930?",
    options: ["Brazil", "Argentina", "Uruguay", "Germany"],
    answer: "Uruguay",
    category: "Sports",
  },
  {
    id: 8,
    question: "Who is the author of the 'Harry Potter' series?",
    options: [
      "J.R.R. Tolkien",
      "George R.R. Martin",
      "J.K. Rowling",
      "Stephen King",
    ],
    answer: "J.K. Rowling",
    category: "Literature",
  },
  {
    id: 9,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
    category: "Mathematics",
  },
  {
    id: 10,
    question:
      "Which gas do plants absorb from the atmosphere for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"],
    answer: "Carbon Dioxide",
    category: "Science",
  },
];

const startTimer = () => {
  let counter = 60;
  timer_id = setInterval(() => {
    timer_text.textContent = counter;
    counter--;
    if (counter < 0) {
      clearInterval(timer_id); //stop
      if (currentQuestionIndex < questionBank.length) {
        // console.log("current score : " + score);
        calculateResult();
        nextQuestion();
      } else {
        calculateResult();
        alert("Your Score is " + score + "/10");
      }
      return;
    }
  }, 1000);
};

const nextQuestion = () => {
  // if(currentQuestionIndex !== 0 ) {
  //   calculateResult();
  // }
  radio_option_a.checked = false;
  radio_option_b.checked = false;
  radio_option_c.checked = false;
  radio_option_d.checked = false;

  // timer_text.textContent = "";
  clearInterval(timer_id);
  startTimer();
  console.log("next question caLLed - ", currentQuestionIndex);
  question.textContent =
    currentQuestionIndex +
    1 +
    ". " +
    questionBank[currentQuestionIndex].question;
  option_a.textContent = questionBank[currentQuestionIndex].options[0];
  option_b.textContent = questionBank[currentQuestionIndex].options[1];
  option_c.textContent = questionBank[currentQuestionIndex].options[2];
  option_d.textContent = questionBank[currentQuestionIndex].options[3];
  if (currentQuestionIndex < questionBank.length - 1) {
    currentQuestionIndex++;
  } else {
    currentQuestionIndex++;
    next_button.textContent = "Submit";

    next_button.href = "result.html"
  }
};

const calculateResult = () => {
  // console.log("CaLs resuLt caLLed !!");

  // console.log(radio_option_b.checked);

  if (radio_option_a.checked) {
    if (
      questionBank[currentQuestionIndex - 1].answer ==
      questionBank[currentQuestionIndex - 1].options[0]
    ) {
      console.log(true);
      score++;
    }
  } else if (radio_option_b.checked) {
    // console.log("b SeLected !!");
    if (
      questionBank[currentQuestionIndex - 1].answer ==
      questionBank[currentQuestionIndex - 1].options[1]
    ) {
      console.log(true);
      score++;
    }
  } else if (radio_option_c.checked) {
    if (
      questionBank[currentQuestionIndex - 1].answer ==
      questionBank[currentQuestionIndex - 1].options[2]
    ) {
      console.log(true);
      score++;
    }
  } else if (radio_option_d.checked) {
    if (
      questionBank[currentQuestionIndex - 1].answer ==
      questionBank[currentQuestionIndex - 1].options[3]
    ) {
      console.log(true);
      score++;
    }
  }
  console.log("Current score : " + score);
};

// aLL function caLL .
startTimer();
nextQuestion();
next_button.addEventListener("click", () => {
  if (currentQuestionIndex < questionBank.length) {
    calculateResult();
    nextQuestion();
  } else {
    calculateResult();
    localStorage.setItem("quizScore",score);
     localStorage.setItem("totalQuestion", questionBank.length);
    
    window.location.href = "result.html";
  }
});

// if aLert box is visibLe one time on end time not shouLd be visibLe.
// after press on ok - quiz shobe be refresh /restart .

// window.onload = () => {
//   timer_text.textContent = "";
// };
// // after press on ok - quiz shobe be refresh /restart .
// window.onfocus = () => {
//   if (currentQuestionIndex >= questionBank.length) {
//     window.location.reload();
//   }
// };


// localStorage.setItem("quizScore", score);
// localStorage.setItem("totalQuestions", questionBank.length);
// // window.location.href = "result.html";
// quizFinished = true;
// localStorage.setItem("quizScore", score);
// localStorage.setItem("totalQuestions", questionBank.length);
// // window.location.href = "result.html";



