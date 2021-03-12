/* timer */

var startingMinutes = 05;
let time = startingMinutes * 60;
var question = document.getElementById("question");
var counter = 0;
var score = 0;
question.style.display = "none";
var gameTimer;
var timerEl = document.getElementById('timer');

// setInterval(updateTimer, 1000);

function updateTimer() {
    var minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // timerEl.innerHTML = "hello timer"
    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(gameTimer)
    }


}

console.log("time")

document.getElementById("start-btn").addEventListener("click", function () {
    gameTimer = setInterval(updateTimer, 1000);
    document.getElementById("main-div").style.display = "none";
    question.style.display = "block";
    displayQUestion();
});


/* Exam */

var questions = [
    {
        question: "what is the symmbol for a tag?",
        correctAnswer: "<>",
        choices: ["#", "@", "<>", "&"]
    },

    {
        question: "How many heading are there in HTML",
        correctAnswer: "6",
        choices: ["4", "6", "10", "infinite"]

    },

    {
        question: "What does <ul> stands for?",
        correctAnswer: "Unordered lists",
        choices: ["universal lag", "Underwriter Laboratories", "Unordered lists", "None of the above"]

    },

    {
        question: "What symbol do you use for an ID in CSS?",
        correctAnswer: "#",
        choices: ["#", ".", "@", "$"]

    },
];

function displayQUestion() {
    question.textContent = "";
    var ques = document.createElement("h3");
    ques.textContent = questions[counter].question;
    question.appendChild(ques);

    for (var i = 0; i < questions[counter].choices.length; i++) {
        console.log("Inside FOR loop");
        var ans = document.createElement("button");
        ans.textContent = questions[counter].choices[i];
        ans.setAttribute("data-ans", questions[counter].choices[i]);
        ans.classList.add("answer");
        question.appendChild(ans);
        ans.addEventListener("click", checkAns);
    };
};

function checkAns() {
    var userAns = this.getAttribute("data-ans");
    console.log(userAns);
    if (userAns === questions[counter].correctAnswer) {
        score = score + 10;
        //counter++;
        counterCheck();
        displayQUestion();
    }
    else {
        time = time - 5;
        //counter++;
        counterCheck();
        displayQUestion();
    }
}

function counterCheck() {
    if (counter === (questions.length - 1)) {
        endGame();
    }
    else {
        counter++;
    }
}
console.log(time)
function endGame() {
    console.log("Inside end game");
    //hide questions div
    //show div with an inputbox to enter initials
    //store initials and score into the localStorge(you can use localStorage.setItem)
    //Once it's stored in localStorage you can display it on the page as well
}


//Add event listener for answer buttons for class called "answer"

//document.getElementsByClassName("answer").addEventListener()

//grab the data-ans attribute value and store into a variable

//compare user answer against correctAnswer andif answer is correct you can increment the score else reduce the time

//increment the counter value and call displayQuestion function



