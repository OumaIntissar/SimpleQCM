//10 questions to be updated here
const questions = [
    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: {
            value: "10 players",
            field: "SVT"
        },
        optionB: {
            value: "11 players",
            field: "NSI"
        },
        optionC: {
            value: "9 players",
            field: "PC"
        },
        optionD: {
            value: "12 players",
            field: "HGGSP"
        },
        optionE: {
            value: "90 players",
            field: "SES"
        },
        optionF: {
            value: "2 players",
            field: "MATHS"
        }
    },
    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: {
            value: "10 players",
            field: "SVT"
        },
        optionB: {
            value: "11 players",
            field: "NSI"
        },
        optionC: {
            value: "9 players",
            field: "PC"
        },
        optionD: {
            value: "12 players",
            field: "HGGSP"
        },
        optionE: {
            value: "9 players",
            field: "SES"
        },
        optionF: {
            value: "12 players",
            field: "MATHS"
        }
    },
    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: {
            value: "10 players",
            field: "SVT"
        },
        optionB: {
            value: "11 players",
            field: "NSI"
        },
        optionC: {
            value: "9 players",
            field: "PC"
        },
        optionD: {
            value: "12 players",
            field: "HGGSP"
        },
        optionE: {
            value: "9 players",
            field: "SES"
        },
        optionF: {
            value: "12 players",
            field: "MATHS"
        }
    },
    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: {
            value: "10 players",
            field: "SVT"
        },
        optionB: {
            value: "11 players",
            field: "NSI"
        },
        optionC: {
            value: "9 players",
            field: "PC"
        },
        optionD: {
            value: "12 players",
            field: "HGGSP"
        },
        optionE: {
            value: "9 players",
            field: "SES"
        },
        optionF: {
            value: "12 players",
            field: "MATHS"
        }
    },
    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: {
            value: "10 players",
            field: "SVT"
        },
        optionB: {
            value: "11 players",
            field: "NSI"
        },
        optionC: {
            value: "9 players",
            field: "PC"
        },
        optionD: {
            value: "12 players",
            field: "HGGSP"
        },
        optionE: {
            value: "9 players",
            field: "SES"
        },
        optionF: {
            value: "12 players",
            field: "MATHS"
        }
    },
    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: {
            value: "10 players",
            field: "SVT"
        },
        optionB: {
            value: "11 players",
            field: "NSI"
        },
        optionC: {
            value: "9 players",
            field: "PC"
        },
        optionD: {
            value: "12 players",
            field: "HGGSP"
        },
        optionE: {
            value: "9 players",
            field: "SES"
        },
        optionF: {
            value: "12 players",
            field: "MATHS"
        }
    },
    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: {
            value: "10 players",
            field: "SVT"
        },
        optionB: {
            value: "11 players",
            field: "NSI"
        },
        optionC: {
            value: "9 players",
            field: "PC"
        },
        optionD: {
            value: "12 players",
            field: "HGGSP"
        },
        optionE: {
            value: "9 players",
            field: "SES"
        },
        optionF: {
            value: "12 players",
            field: "MATHS"
        }
    },
    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: {
            value: "10 players",
            field: "SVT"
        },
        optionB: {
            value: "11 players",
            field: "NSI"
        },
        optionC: {
            value: "9 players",
            field: "PC"
        },
        optionD: {
            value: "12 players",
            field: "HGGSP"
        },
        optionE: {
            value: "9 players",
            field: "SES"
        },
        optionF: {
            value: "12 players",
            field: "MATHS"
        }
    },
    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: {
            value: "10 players",
            field: "SVT"
        },
        optionB: {
            value: "11 players",
            field: "NSI"
        },
        optionC: {
            value: "9 players",
            field: "PC"
        },
        optionD: {
            value: "12 players",
            field: "HGGSP"
        },
        optionE: {
            value: "9 players",
            field: "SES"
        },
        optionF: {
            value: "12 players",
            field: "MATHS"
        }
    },
    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: {
            value: "10 players",
            field: "SVT"
        },
        optionB: {
            value: "11 players",
            field: "NSI"
        },
        optionC: {
            value: "9 players",
            field: "PC"
        },
        optionD: {
            value: "12 players",
            field: "HGGSP"
        },
        optionE: {
            value: "9 players",
            field: "SES"
        },
        optionF: {
            value: "12 players",
            field: "MATHS"
        }
    }

];

//intitialisation of fields and their scores
let fields = [
    {
        name: "MATHS",
        score: 0
    },
    {
        name: "SES",
        score: 0
    },
    {
        name: "HGGSP",
        score: 0
    },
    {
        name: "PC",
        score: 0
    },
    {
        name: "NSI",
        score: 0
    },
    {
        name: "SVT",
        score: 0
    }
];

let questionNumber = 1
let indexNumber = 0

let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA.value;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB.value;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC.value;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD.value;
    document.getElementById("option-five-label").innerHTML = currentQuestion.optionE.value;
    document.getElementById("option-six-label").innerHTML = currentQuestion.optionF.value;

}

function calculateScoreForEachField() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false && options[4].checked == false && options[5].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //update fields score based on checked option
    options.forEach((option) => {
        if (option.checked === true) {
            if (option.value === "optionA") {
                if (currentQuestion.optionA.field === "MATHS") {
                    fields[0].score++
                } else if (currentQuestion.optionA.field === "SES") {
                    fields[1].score++
                } else if (currentQuestion.optionA.field === "HGGSP") {
                    fields[2].score++
                } else if (currentQuestion.optionA.field === "PC") {
                    fields[3].score++
                } else if (currentQuestion.optionA.field === "NSI") {
                    fields[4].score++
                } else if (currentQuestion.optionA.field === "SVT") {
                    fields[5].score++
                }

            } else if (option.value === "optionB") {
                if (currentQuestion.optionB.field === "MATHS") {
                    fields[0].score++
                } else if (currentQuestion.optionB.field === "SES") {
                    fields[1].score++
                } else if (currentQuestion.optionB.field === "HGGSP") {
                    fields[2].score++
                } else if (currentQuestion.optionB.field === "PC") {
                    fields[3].score++
                } else if (currentQuestion.optionB.field === "NSI") {
                    fields[4].score++
                } else if (currentQuestion.optionB.field === "SVT") {
                    fields[5].score++
                }
            } else if (option.value === "optionC") {
                if (currentQuestion.optionC.field === "MATHS") {
                    fields[0].score++
                } else if (currentQuestion.optionC.field === "SES") {
                    fields[1].score++
                } else if (currentQuestion.optionC.field === "HGGSP") {
                    fields[2].score++
                } else if (currentQuestion.optionC.field === "PC") {
                    fields[3].score++
                } else if (currentQuestion.optionC.field === "NSI") {
                    fields[4].score++
                } else if (currentQuestion.optionC.field === "SVT") {
                    fields[5].score++
                }
            } else if (option.value === "optionD") {
                if (currentQuestion.optionD.field === "MATHS") {
                    fields[0].score++
                } else if (currentQuestion.optionD.field === "SES") {
                    fields[1].score++
                } else if (currentQuestion.optionD.field === "HGGSP") {
                    fields[2].score++
                } else if (currentQuestion.optionD.field === "PC") {
                    fields[3].score++
                } else if (currentQuestion.optionD.field === "NSI") {
                    fields[4].score++
                } else if (currentQuestion.optionD.field === "SVT") {
                    fields[5].score++
                }
            } else if (option.value === "optionE") {
                if (currentQuestion.optionE.field === "MATHS") {
                    fields[0].score++
                } else if (currentQuestion.optionE.field === "SES") {
                    fields[1].score++
                } else if (currentQuestion.optionE.field === "HGGSP") {
                    fields[2].score++
                } else if (currentQuestion.optionE.field === "PC") {
                    fields[3].score++
                } else if (currentQuestion.optionE.field === "NSI") {
                    fields[4].score++
                } else if (currentQuestion.optionE.field === "SVT") {
                    fields[5].score++
                }
            } else if (option.value === "optionF") {
                if (currentQuestion.optionF.field === "MATHS") {
                    fields[0].score++
                } else if (currentQuestion.optionF.field === "SES") {
                    fields[1].score++
                } else if (currentQuestion.optionF.field === "HGGSP") {
                    fields[2].score++
                } else if (currentQuestion.optionF.field === "PC") {
                    fields[3].score++
                } else if (currentQuestion.optionF.field === "NSI") {
                    fields[4].score++
                } else if (currentQuestion.optionF.field === "SVT") {
                    fields[5].score++
                }
            }


            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 500)
        }
    })


}


//called when the next button is called
function handleNextQuestion() {
    calculateScoreForEachField()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 500);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        option.checked = false;
    })
}


function getMaxFieldScore(fields, prop) {
    let max;
    fields.forEach((field) => {
        if (!max || field[prop] > max[prop])
            max = field;
    })
    return max;
}

// function for when all questions being answered
function handleEndGame() {
    let maxScore = getMaxFieldScore(fields, "score");
    console.log("Value of : " + maxScore.name + ", Score of: " + maxScore.score);

    //data to display to score board
    document.getElementById('results-field').innerHTML = maxScore.name
    document.getElementById('results-score').innerHTML = maxScore.score
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    indexNumber = 0
    fields.forEach((field) => {
        field.score = 0;
    })
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}