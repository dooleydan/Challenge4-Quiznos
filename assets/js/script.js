//need variables for the content within the containers as well as the headers (just for styling). Need to figure out how to swap questions in the quiz. 
// User is presented with 5 questions - array of objects
    //  Format for questions???
        // Object that conatins {question: string, Choices: array, answer: string}
        // Display question - loop
        //  append question
        // append choices array

// user selects an answer(button,radio,checkboxes)data-answer = ""
    //  click event is on the parent container
    //  how to know which element was clicked(event.target)
    // if the answer is correct display next quesrion access array of questions object 
    // if answer is incorrect add 15 seconds to score and display next question

    //  When all questions are answered display form to submit initials
    //  save form values score and initials to local STrorage

//  change to highscores HTML
    //  read values from localstorage
    //  append score values to page


//need a function that starts the quiz
//need a function that will continue to the next question.
//need a function for selecting the answer.
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


startButton.addEventListener('click', startQuiz)

let shuffledQuestions, currentQuestionsIndex

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    ShowQuestion(shuffledQuestions[currentQuestionsIndex])
}

function ShowQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What does a splice command do?',
        answers: [
            {text: 'changes the contents of an array by removing or replacing existing elements and/or adding new elements in place', correct: true},
            {text: 'Make you feel some type of way with pop rhythm', correct: false }
        ]
    }
]
