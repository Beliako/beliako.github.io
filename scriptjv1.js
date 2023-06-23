
// Questions data
const questions = [
  {
    question: "Comment s'appelle le monde de World of Warcraft ?",
    choices: ["Overworld", "Jyunde", "Azerot","Lysandra"],
    correctAnswer: 2
  },
  {
    question: "Comment s'appelle les trois d\351esses de la s\351rie The Legend of Zelda ?",
    choices: ["Din, Naryu et Farore", "Epona, Impa et Celesta", "Firone, Ordin et Lanelle", "Mojo, Goron et Gerudo"],
    correctAnswer: 0
  },
  {
    question: "NES signifie",
    choices: ["New Epic Game","Nintendo Entertainment System","Nouvelle Evolution Sony","Nintendo Energy Super"],
    correctAnswer : 1
   },
   {
     question: "Quel est l'ultime boss de Minecraft ?",
     choices: ["Dragon de l'Ender","Warden", "Zombie G\351ant","Wither Storm"],
     correctAnswer : 3
   },
   {
 	question: "Comment s'appelle le docteur qui accompagne le personnage principal dans Pok\351mon Arceus ?",
 	choices: ["Romarin", "Thym", "Lavande", "Chiboulet"],
	correctAnswer : 2
    },
    {
        question: "Combien de pi\350ces faut-il pour avoir les roues en or dans Mariokart 7 ?",
	choices: ["Il ne faut pas pi\350ces, elles se d\351ploquent autrement","15k pi\350ces","Je ne sais pas, personne ne joue \340 MarioKart 7","100k pi\350ces"], 
	correctAnswer : 1
    },
    {
	question: "Que veut dire PES ?",
	choices: ["Pro Evolution Soccer","Playstation Etertainment System","Partie Extr\350mement satisfaisante","Pro Energy Sega"],
	correctAnswer : 0
    }
    ];

// Quiz variables
let currentQuestion = 0;
let score = 0;

// DOM elements
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");

// Load question and choices
function loadQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;

  choicesElement.innerHTML = "";
  for (let i = 0; i < question.choices.length; i++) {
    const choice = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "choice";
    radio.value = i;

    choice.appendChild(radio);
    choice.appendChild(document.createTextNode(question.choices[i]));

    choicesElement.appendChild(choice);
  }
}

// Check answer and go to the next question
function checkAnswer() {
  const selectedChoice = document.querySelector(
    'input[name="choice"]:checked'
  );

  if (selectedChoice) {
    const answer = parseInt(selectedChoice.value);

    if (answer === questions[currentQuestion].correctAnswer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
}

// Show the quiz result
function showResult() {
  const totalQuestions = questions.length;

  questionElement.textContent = "Le questionnaire est terminé!";
  choicesElement.style.display = "none";
  submitButton.style.display = "none";

  const resultElement = document.createElement("p");
  resultElement.textContent = `Ton score est de  ${score} sur ${totalQuestions}.`;
  questionElement.parentNode.insertBefore(resultElement, choicesElement);

  document.querySelector("footer").style.position = "absolute";
}

// Event listener
submitButton.addEventListener("click", checkAnswer);

// Initialize quiz
loadQuestion();
