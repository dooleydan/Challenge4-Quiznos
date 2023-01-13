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
startButton.addEventListener('click', startQuiz)

function startQuiz() {

}

function setNextQuestion() {

}

function selectAnswer() {

}
var containersDiv = document.getElementById('container');
var headerDiv = document.getElementById('header');
var timerEl = document.getElementById('countdown');

containersDiv.appendChild[];
containersDiv.children[""].style.fontSize = '50px';