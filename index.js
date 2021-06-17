// Get all the elements of class componenet and puth them in array
componenets = document.getElementsByClassName("componenet");
var componenet = Array.prototype.slice.call(componenets);

// Add to each component event listenner
for (var i = 0; i < componenet.length; i++) {
  componenet[i].addEventListener("click", slider);
}

// Get all the elements of class video and puth them in array
var videos = document.getElementsByClassName("video");
var video = Array.prototype.slice.call(videos);

// Add to each video event listenner
for (var i = 0; i < video.length; i++) {
  video[i].addEventListener("click", fillVideo);
}
// Set the attributes for the video frame
var videoPath = document.getElementById("video-frame");
videoPath.style.display = "none";
var videoSouce = "https://www.youtube.com/embed/TXfGj7CFbqs";

// Get all the elements of class quiz and puth them in array
quizes = document.getElementsByClassName("quiz");
var quiz = Array.prototype.slice.call(quizes);

// Add to each quiz event listenner
for (var i = 0; i < quiz.length; i++) {
  quiz[i].addEventListener("click", fillQuiz);
}

var quizFrame = document.querySelector(".quiz-frame");
// When the page load the quiz frame set to hidden
quizFrame.style.display = "none";

// Flag to detect whether the component is close or open
var bool = false;

var numQuestion = 2;
var currnetQuestion = 1;
document.querySelector(".questions").innerHTML =
  " Question " + currnetQuestion + " / " + numQuestion;

var rightButton = document
  .getElementById("right")
  .addEventListener("click", nextQuestion);

var leftButton = document
  .getElementById("left")
  .addEventListener("click", prevQuestion);

var quizForm = document.getElementById("quiz-form");

var questionFull = {
  question:
    "Which of the following statements is correct for a three-phase system ?",
  choice1: "The power delivered to a three-phase load is pulasting in nature.",
  choice2:
    "Power per kilogram of metal from a three-phase machine is less as compared to a single-phase machine.",
  choice3: "A three-phase machine does not require a starter.",
  choice4:
    "Mechanical vibration in three-phase motors are more as copmared to single phase motors.",
};

var question = document.querySelector(".question");
var submitButton = document
  .querySelector(".submit-quiz")
  .addEventListener("click", submitAnswer);

var hideMessage = document
  .querySelector(".hide")
  .addEventListener("click", hideMessage);

var info = document.getElementsByClassName("info");
var inf = Array.prototype.slice.call(info);

// Add to each info event listenner
for (var i = 0; i < inf.length; i++) {
  inf[i].addEventListener("click", fillInfo);
}

var infoFrame = document.querySelector(".info-container");

var lockIcon = document
  .querySelector(".lock-icon")
  .addEventListener("click", addScroll);

var scrollToggle = false;

function slider(index) {
  var parent = index.target.parentElement;
  var child = parent.children[1];
  if (bool == false) {
    child.style.display = "none";
    bool = true;
  } else {
    child.style.display = "";
    bool = false;
  }
}

function fillVideo(index) {
  index.target.parentElement.children[1].style.display = "block";
  index.target.parentElement.children[0].style.display = "none";

  const loading = () => {
    index.target.parentElement.children[1].style.display = "none";

    index.target.parentElement.children[0].style.display = "block";
  };
  setTimeout(loading, 1000);

  quizFrame.style.display = "none";
  videoPath.style.display = "";
  infoFrame.style.display = "none";

  videoPath.src = videoSouce;
}

function fillQuiz(index) {
  index.target.parentElement.children[1].style.display = "block";
  index.target.parentElement.children[0].style.display = "none";

  const loading = () => {
    index.target.parentElement.children[1].style.display = "none";
    index.target.parentElement.children[0].style.display = "block";
  };
  setTimeout(loading, 200);
  videoPath.style.display = "none";
  quizFrame.style.display = "";
  infoFrame.style.display = "none";

  question.innerHTML = questionFull.question;

  var answers = document.getElementsByClassName("container");
  var answer = Array.prototype.slice.call(answers);

  answer[0].innerHTML =
    questionFull.choice1 +
    "<input id = 'r1' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";
  answer[1].innerHTML =
    questionFull.choice2 +
    "<input id = 'r2' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";
  answer[2].innerHTML =
    questionFull.choice3 +
    "<input id = 'r3' class='input' value = 'Correct' type='radio' name='radio'><span class='checkmark'></span>";
  answer[3].innerHTML =
    questionFull.choice4 +
    "<input id = 'r4' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";

  inputRadio = document.getElementsByClassName("input");
  var input = Array.prototype.slice.call(inputRadio);

  document.querySelector(".quiz-frame").style.pointerEvents = "";

  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("click", openSubmit);
  }
}

function openSubmit() {
  document.getElementById("submit-button").disabled = false;
}

function nextQuestion() {
  if (currnetQuestion < numQuestion) {
    currnetQuestion++;
    document.querySelector(".questions").innerHTML =
      " Question " + currnetQuestion + " / " + numQuestion;
  }
}

function prevQuestion() {
  if (currnetQuestion > 1) {
    currnetQuestion--;
    document.querySelector(".questions").innerHTML =
      " Question " + currnetQuestion + " / " + numQuestion;
  }
}

function submitAnswer() {
  // showMessage.style.display = "block";
  document.querySelector(".submit-quiz").disabled = true;

  if (document.getElementById("r3").checked) {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".respond").style.display = "block";
    document.querySelector(".respond2").style.display = "none";
    document.querySelector(".quiz-frame").style.pointerEvents = "none";
  } else {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".respond2").style.display = "block";
    document.querySelector(".respond").style.display = "none";
    document.querySelector(".quiz-frame").style.pointerEvents = "none";
  }
}

function hideMessage() {
  document.querySelector(".overlay").style.display = "none";
}

function fillInfo(index) {
  index.target.parentElement.children[1].style.display = "block";
  index.target.parentElement.children[0].style.display = "none";
  const loading = () => {
    index.target.parentElement.children[1].style.display = "none";
    index.target.parentElement.children[0].style.display = "block";
  };
  setTimeout(loading, 200);
  quizFrame.style.display = "none";
  videoPath.style.display = "none";
  infoFrame.style.display = "block";
}

function addScroll() {
  if (scrollToggle == false) {
    document.querySelector(".course-container").style.height = "400px";
    document.querySelector(".lock-icon").innerHTML =
      "<i class='fas fa-lock-alt'></i>";

    scrollToggle = true;
  } else {
    document.querySelector(".course-container").style.height = "fit-content";
    document.querySelector(".lock-icon").innerHTML =
      "<i class='fas fa-unlock-alt'></i>";
    scrollToggle = false;
  }
}
