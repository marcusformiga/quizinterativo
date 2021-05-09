const startButton = document.getElementById("startBtn")
const nextButton = document.getElementById("nextBtn")
const questionElementContainer = document.getElementById("questionContainer")
let shuffledQuestions, currentQuestionsIndex
const questionElement = document.getElementById("question")
const answerBtnsElement = document.getElementById("answerBtns")
let rightAnswers = 0
let wrongAnswers = 0


startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () =>{
    currentQuestionsIndex++
    setNextQuestion()
})
function startGame(){
    rightAnswers = 0
    wrongAnswers = 0
    startButton.classList.add("hide")
    questionElementContainer.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    setNextQuestion()
    

}
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}
function selectAnswer(event){
    
    const selectButton = event.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionsIndex + 1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "Voltar"
        startButton.classList.remove("hide")
        alert(`Quiz Finalizado: Você acertou ${rightAnswers} questões e errou ${wrongAnswers}`)
    }
    if(selectButton.dataset = correct){
        rightAnswers++
    }else{
        wrongAnswers++
    }
    
    
}
function setStatusClass(element, correct){
    clearStatusClass(element)
        if(correct){
            element.classList.add("correct")
        }else{
            element.classList.add("wrong")
        }
    }

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}    
function showQuestion(questions){
    questionElement.innerText = questions.question
    questions.answers.map(answer =>{
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerBtnsElement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while(answerBtnsElement.firstChild){
        answerBtnsElement.removeChild(answerBtnsElement.firstChild)
    }
    
}

const questions = [
    {
        question: "Quanto é 2 + 2 ?",
        answers: [
            {text: "4", correct:true},
            {text: "22", correct:false},
            {text: "44", correct:false},
            {text: "-2", correct:false}
        ]
    },
    {
        question: "Qual linguagem é a mais usada no frontend?",
        answers: [
            {text: "Javascript", correct: true},
            {text: "Python", correct: false},
            {text: "Java", correct: false},
            {text: "Typescript", correct: false}
        ]
    },
    {
        question: "Qual dessas NÃO é uma linguagem de programação ?",
        answers: [
            {text: "Java", correct: false},
            {text: "Typescript", correct: true},
            {text: "Python", correct: false},
            {text: "Php", correct: false}
        ]
    },
    {
        question: "Qual palavra é utilizada para criar um hook em react ?",
        answers: [
            {text: "Get", correct: false},
            {text: "Use", correct: true},
            {text: "Create", correct: false},
            {text: "Set", correct: false}
        ]
    },
    {
        question: "Qual método é utilizado para criar um elemento no react ?",
        answers: [
            {text: "CreateElement()", correct: true},
            {text: "CreateComponent()", correct:false},
            {text: "CreateEl()", correct: false},
            {text: "GetElement()", correct: false}
        ]
    },
    {
        question: "Qual é a tag html para destacar um texto?",
        answers: [
            {text: "strong", correct: true},
            {text: "small", correct: false},
            {text: "h1", correct: false},
            {text: "body", correct: false}
        ]
    },
    {
        question: "Qual dessas tags não tem significado semântico ?",
        answers: [
            {text: "div", correct: true},
            {text: "section", correct: false},
            {text: "header", correct: false},
            {text: "aside", correct: false}

        ]

    }
    
]