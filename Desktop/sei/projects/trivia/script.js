

let trivia = {
    firstQuestion: 'What is the largest planet in our solar system?',
    firstAnswer: ['Saturn', 'Jupitor', 'Neptune', 1],
    secondQuestion: 'Every action has an equal and opposite reaction. Who proposed this law?',
    secondAnswer: ['Newton', 'Einstien' , 'Planck', 0],
    thirdQuestion: 'Who is known as the father of mathematics?',
    thirdAnswer: ['Eintein', 'Archimedes', 'Newton', 1]
};


// display question and answers to page

let question = document.querySelector('#question')
let answerOne = document.querySelector("#answer-one")
let answerTwo= document.querySelector("#answer-two")
let answerThree = document.querySelector("#answer-three")
let result = document.querySelector("#result")
let streak = document.querySelector("#winning-streak")
let turn = 0
let numInARow = 0
let numberRight = 0



//addeventlistener to buttons(if == correct, model pops up)

firstTurn();

function firstTurn(){

question.innerHTML = trivia.firstQuestion
answerOne.innerHTML = trivia.firstAnswer[0]
answerTwo.innerHTML = trivia.firstAnswer[1]
answerThree.innerHTML = trivia.firstAnswer[2]


answerOne.addEventListener('click', function(){
    result.innerHTML= "That was incorrect"
    numInARow=0
    streak.innerHTML = "Your winning streak is " + numInARow
    secondTurn()
})
answerTwo.addEventListener('click', function(){
    result.innerHTML= "That was correct"
    numInARow++
    numberRight++
    streak.innerHTML = "Your winning streak is " + numInARow
    secondTurn();


    // input modal and then put in a new question / answer
})
answerThree.addEventListener('click', function(){
    result.innerHTML= "That was incorrect"
    numInARow=0
    streak.innerHTML = "Your winning streak is " + numInARow
    secondTurn()
})
}


// function for second quesiotn

function secondTurn(){

question.innerHTML = trivia.secondQuestion
answerOne.innerHTML = trivia.secondAnswer[0]
answerTwo.innerHTML = trivia.secondAnswer[1]
answerThree.innerHTML = trivia.secondAnswer[2]

    answerOne.addEventListener('click', function(){
        result.innerHTML= "That was corrent"
        numInARow++
        numberRight++
        streak.innerHTML = "Your winning streak is " + numInARow
        thirdTurn()
    })
    answerTwo.addEventListener('click', function(){
        result.innerHTML= "That was incorrect"
        numberRight = 0 
        streak.innerHTML = "Your winning streak is " + numberRight
        thirdTurn()
 
    
    })
    answerThree.addEventListener('click', function(){
        result.innerHTML= "That was incorrect"
        numberRight=0
        streak.innerHTML = "Your winning streak is " + numInARow
        thirdTurn()
    })
    

}
//function for thrid question
function thirdTurn(){
question.innerHTML = trivia.thirdQuestion
answerOne.innerHTML = trivia.thirdAnswer[0]
answerTwo.innerHTML = trivia.thirdAnswer[1]
answerThree.innerHTML = trivia.thirdAnswer[2]

    answerOne.addEventListener('click', function(){
        result.innerHTML= "That was incorrect"
        numberRight = 0
        streak.innerHTML = "Your winning streak is " + numInARow
        gameOver()
    })
    answerTwo.addEventListener('click', function(){
        result.innerHTML= "That was correct"
        numberRight++
        numInARow++
        streak.innerHTML = "Your winning streak is " + numInARow
        gameOver()

 
    })
    answerThree.addEventListener('click', function(){
        result.innerHTML= "That was incorrect"
        numberRight=0
        streak.innerHTML = "Your winning streak is " + numInARow
        gameOver()
    })
}


function gameOver(){
document.getElementById("title").innerHTML = "Game Over"
question.innerHTML = ""
answerOne.innerHTML = ""
answerTwo.innerHTML = ""
result.innerHTML = ""
answerThree.innerHTML = ""
streak.innerHTML="Your score is " + numberRight

}

   
//when get the right answer, add modal and then go to next question

//

// to add: correct # streak, number correct, number incorrect, play again button. 

//function is called when user clicks on new game button
// function is called when
//include high score!