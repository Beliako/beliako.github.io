// Questions data
const questions = [
  {
    question: "Qui a réalis\351 le premier Alien ?",
    choices: ["James Cameron","Ridley Scott","David Fincher","Fede Alvarez"],
    correctAnswer: 1
  },
  {
    question: "Lequel de ces acteurs n’a pas jou\351 dans Le diner de cons ?",
    choices: ["Thierry Lermite","Jacques Villeret","Michel Blanc","Daniel Prévost"],
    correctAnswer: 2
  },
  {
	 	question: "Qui incarne Luke dans Star Wars ?",
	 	choices: ["Mark Hamil","Harrison Ford","Ewan McGregor","John Boyega"],
	 	correctAnswer : 0
	},
	{
	 	question: "Comment s’appelle le chef des nais dans Le Hobbit ?",
		choices: ["Thorin","Daïn","Gandalf","Kili"],
		correctAnswer : 2
	},
	{
	 	question: "Quel est le second film d’Indiana Jones ",
		choices: ["Indiana Jones et la derni\350re croisade","Indiana Jones et le temple maudit","Les aventuriers de l'arche perdue","Indiana Jones et le Royaume du Cr\342ne de cristal"],
		correctAnswer : 1
	},
	{
	 	question: "Qui est la m\350re de Marty dans Retour vers le futur ?",
		choices: ["Jessica","Mary","Betty","Lauren"], 
		correctAnswer : 3
	},
	{
	 	question: "Comment s’appelle le garçon incarn\351 par Leonardo DiCaprio dans Titanic ?",
		choices: ["Tom","Sam","Jack","Greg"],
		correctAnswer : 2
	},
	{
	  question: "Qui a r\351alis\351 le premier Harry Potter ?",
		choices: ["David Yates","Chris Columbus","Mike Newell","Alfonso Cuaron"],
		correctAnswer : 1
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
  resultElement.textContent = `Ton score est de ${score} sur ${totalQuestions}.`;
  questionElement.parentNode.insertBefore(resultElement, choicesElement);

  document.querySelector("footer").style.position = "absolute";
}

// Event listener
submitButton.addEventListener("click", checkAnswer);

// Initialize quiz
loadQuestion();
