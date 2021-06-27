// Get all the elements of class componenet and puth them in array
componenets = document.getElementsByClassName("componenet");
var componenet = Array.prototype.slice.call(componenets);
document.getElementById("left").disabled = true;
document.getElementById("left").style.color = "#CCC";
// Add to each component event listenner
for (var i = 0; i < componenet.length; i++) {
  componenet[i].addEventListener("click", slider);
}

document.getElementById("start").style.color = "#75BB43";

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
var videoSouce = "./videos/yt1s.com - Our people  Our heroes_1080p.mp4";

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

var questionFull = [
  {
    question:
      "Which of the following statements is correct for a three-phase system ?",
    choice1:
      "The power delivered to a three-phase load is pulasting in nature.",
    choice2:
      "Power per kilogram of metal from a three-phase machine is less as compared to a single-phase machine.",
    choice3: "A three-phase machine does not require a starter.",
    choice4:
      "Mechanical vibration in three-phase motors are more as copmared to single phase motors.",
  },
  {
    question:
      "The main purpose of a generating plant substation is to ______________.",
    choice1:
      "Step up the incoming voltage so that it can be transmitted over long distances.",
    choice2:
      "Step down the voltage so that it can be transmitted over long distances.",
    choice3:
      "Step up or step down the voltage to an appropriate level so that it can be transmitted over long distances",
    choice4:
      "Reverse the direction of the current to maintain a constant voltage.",
  },
];

var question = document.querySelector(".question");
var submitButton = document
  .querySelector(".submit-quiz")
  .addEventListener("click", submitAnswer);

var hideMessage = document
  .querySelector(".hide")
  .addEventListener("click", hideMessage);

var answers = document.getElementsByClassName("container");
var answer = Array.prototype.slice.call(answers);

inputRadio = document.getElementsByClassName("input");
var input = Array.prototype.slice.call(inputRadio);

document.querySelector(".quiz-frame").style.pointerEvents = "";

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

videoPath.style.display = "";
videoPath.src = videoSouce;

var red = document.querySelector(".red").addEventListener("click", fillGas);
var orange = document
  .querySelector(".orange")
  .addEventListener("click", fillSteam);
var blue = document
  .querySelector(".blue")
  .addEventListener("click", fillDiesel);
var lightblue = document
  .querySelector(".lightblue")
  .addEventListener("click", fillComb);
var green = document
  .querySelector(".green")
  .addEventListener("click", fillDGas);
var gray = document
  .querySelector(".gray")
  .addEventListener("click", fillShowAll);

var continueAction = document
  .querySelector(".continue")
  .addEventListener("click", continueAction);

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
  var quizTitles = document.getElementsByClassName("quiz");
  var quizTitle = Array.prototype.slice.call(quizTitles);

  for (var i = 0; i < quizTitle.length; i++) {
    quizTitle[i].style.color = "#444444";
  }
  var videoTitles = document.getElementsByClassName("video");
  var videoTitle = Array.prototype.slice.call(videoTitles);

  for (var i = 0; i < videoTitle.length; i++) {
    videoTitle[i].style.color = "#444444";
  }

  var infoTitles = document.getElementsByClassName("info");
  var infoTitle = Array.prototype.slice.call(infoTitles);

  for (var i = 0; i < infoTitle.length; i++) {
    infoTitle[i].style.color = "#444444";
  }

  index.target.style.color = "#75BB43";

  index.target.parentElement.children[1].style.display = "block";
  index.target.parentElement.children[0].style.display = "none";

  const loading = () => {
    index.target.parentElement.children[1].style.display = "none";

    index.target.parentElement.children[0].style.display = "block";
  };

  quizFrame.style.display = "none";
  videoPath.style.display = "";
  infoFrame.style.display = "none";

  videoPath.src = videoSouce;
  videoPath.play();

  videoPath.addEventListener("canplay", function () {
    setTimeout(loading, 0);
  });
}

function fillQuiz(index) {
  document.querySelector(".quiz-frame").style.pointerEvents = "";

  var quizTitles = document.getElementsByClassName("quiz");
  var quizTitle = Array.prototype.slice.call(quizTitles);

  for (var i = 0; i < quizTitle.length; i++) {
    quizTitle[i].style.color = "#444444";
  }
  var videoTitles = document.getElementsByClassName("video");
  var videoTitle = Array.prototype.slice.call(videoTitles);

  for (var i = 0; i < videoTitle.length; i++) {
    videoTitle[i].style.color = "#444444";
  }

  var infoTitles = document.getElementsByClassName("info");
  var infoTitle = Array.prototype.slice.call(infoTitles);

  for (var i = 0; i < infoTitle.length; i++) {
    infoTitle[i].style.color = "#444444";
  }
  index.target.style.color = "#75BB43";

  index.target.parentElement.children[1].style.display = "block";
  index.target.parentElement.children[0].style.display = "none";

  const loading = () => {
    index.target.parentElement.children[1].style.display = "none";
    index.target.parentElement.children[0].style.display = "block";
  };
  setTimeout(loading, 100);

  videoPath.style.display = "none";
  quizFrame.style.display = "";
  infoFrame.style.display = "none";
  videoPath.pause();

  question.innerHTML = questionFull[1].question;

  answer[0].innerHTML =
    questionFull[0].choice1 +
    "<input id = 'r1' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";
  answer[1].innerHTML =
    questionFull[0].choice2 +
    "<input id = 'r2' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";
  answer[2].innerHTML =
    questionFull[0].choice3 +
    "<input id = 'true' class='input' value = 'Correct' type='radio' name='radio'><span class='checkmark'></span>";
  answer[3].innerHTML =
    questionFull[0].choice4 +
    "<input id = 'r4' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";

  var containers = document.getElementsByClassName("container");
  var container = Array.prototype.slice.call(containers);
  for (var i = 0; i < container.length; i++) {
    container[i].addEventListener("click", openSubmit);
  }
}

function openSubmit() {
  document.getElementById("submit-button").disabled = false;
}

function nextQuestion() {
  document.getElementById("left").disabled = false;
  document.getElementById("left").style.color = "white";
  document.getElementById("left").style.color = null;

  if (currnetQuestion < numQuestion) {
    currnetQuestion++;
    document.querySelector(".questions").innerHTML =
      " Question " + currnetQuestion + " / " + numQuestion;
    question.innerHTML = questionFull[1].question;

    answer[0].innerHTML =
      questionFull[1].choice1 +
      "<input id = 'true' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";
    answer[1].innerHTML =
      questionFull[1].choice2 +
      "<input id = 'r2' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";
    answer[2].innerHTML =
      questionFull[1].choice3 +
      "<input id = 'r3' class='input' value = 'Correct' type='radio' name='radio'><span class='checkmark'></span>";
    answer[3].innerHTML =
      questionFull[1].choice4 +
      "<input id = 'r4' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";

    var checkmarks = document.getElementsByClassName("checkmark");
    var checkmark = Array.prototype.slice.call(checkmarks);
    for (var i = 0; i < checkmark.length; i++) {
      checkmark[i].addEventListener("click", openSubmit);
    }

    if (currnetQuestion == numQuestion) {
      document.getElementById("right").disabled = true;
      document.getElementById("right").style.color = "#cccccc";
    } else {
      document.getElementById("right").disabled = false;
      document.getElementById("right").style.color = "white";
      document.getElementById("right").style.color = null;
    }
  }
}

function prevQuestion() {
  document.getElementById("right").disabled = false;
  document.getElementById("right").style.color = "white";
  document.getElementById("right").style.color = null;
  if (currnetQuestion > 1) {
    currnetQuestion--;
    document.querySelector(".questions").innerHTML =
      " Question " + currnetQuestion + " / " + numQuestion;

    question.innerHTML = questionFull[0].question;

    answer[0].innerHTML =
      questionFull[0].choice1 +
      "<input id = 'r1' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";
    answer[1].innerHTML =
      questionFull[0].choice2 +
      "<input id = 'r2' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";
    answer[2].innerHTML =
      questionFull[0].choice3 +
      "<input id = 'true' class='input' value = 'Correct' type='radio' name='radio'><span class='checkmark'></span>";
    answer[3].innerHTML =
      questionFull[0].choice4 +
      "<input id = 'r4' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";

    var checkmarks = document.getElementsByClassName("checkmark");
    var checkmark = Array.prototype.slice.call(checkmarks);
    for (var i = 0; i < checkmark.length; i++) {
      checkmark[i].addEventListener("click", openSubmit);
    }

    if (currnetQuestion == 1) {
      document.getElementById("left").disabled = true;
      document.getElementById("left").style.color = "#cccccc";
    } else {
      document.getElementById("left").disabled = false;
      document.getElementById("left").style.color = "white";
      document.getElementById("left").style.color = null;
    }
  }
}

function submitAnswer(e) {
  // showMessage.style.display = "block";
  e.preventDefault();
  document.querySelector(".submit-quiz").disabled = true;

  if (document.getElementById("true").checked) {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".respond").style.display = "block";
    document.querySelector(".respond2").style.display = "none";
    document.querySelector(".submit-quiz").disabled = true;

    var checkmarks = document.getElementsByClassName("checkmark");
    var checkmark = Array.prototype.slice.call(checkmarks);
    for (var i = 0; i < checkmark.length; i++) {
      checkmark[i].disabled = true;
    }
  } else {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".respond2").style.display = "block";
    document.querySelector(".respond").style.display = "none";
    document.querySelector(".submit-quiz").disabled = true;

    var checkmarks = document.getElementsByClassName("checkmark");
    var checkmark = Array.prototype.slice.call(checkmarks);
    for (var i = 0; i < checkmark.length; i++) {
      checkmark[i].disabled = true;
    }
  }
}

function hideMessage() {
  document.querySelector(".overlay").style.display = "none";
}

function fillInfo(index) {
  videoPath.pause();

  var quizTitles = document.getElementsByClassName("quiz");
  var quizTitle = Array.prototype.slice.call(quizTitles);

  for (var i = 0; i < quizTitle.length; i++) {
    quizTitle[i].style.color = "#444444";
  }
  var videoTitles = document.getElementsByClassName("video");
  var videoTitle = Array.prototype.slice.call(videoTitles);

  for (var i = 0; i < videoTitle.length; i++) {
    videoTitle[i].style.color = "#444444";
  }

  var infoTitles = document.getElementsByClassName("info");
  var infoTitle = Array.prototype.slice.call(infoTitles);

  for (var i = 0; i < infoTitle.length; i++) {
    infoTitle[i].style.color = "#444444";
  }

  index.target.style.color = "#75BB43";

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

function fillGas() {
  document.getElementById("Group_494").style.display = "block";
  document.getElementById("Group_495").style.display = "none";
  document.getElementById("Group_491").style.display = "none";
  document.getElementById("Group_492").style.display = "none";
  document.getElementById("Group_493").style.display = "none";
}
function fillDiesel() {
  document.getElementById("Group_492").style.display = "block";
  document.getElementById("Group_494").style.display = "none";
  document.getElementById("Group_495").style.display = "none";
  document.getElementById("Group_491").style.display = "none";
  document.getElementById("Group_493").style.display = "none";
}
function fillComb() {
  document.getElementById("Group_495").style.display = "block";
  document.getElementById("Group_494").style.display = "none";
  document.getElementById("Group_491").style.display = "none";
  document.getElementById("Group_492").style.display = "none";
  document.getElementById("Group_493").style.display = "none";
}
function fillSteam() {
  document.getElementById("Group_491").style.display = "block";
  document.getElementById("Group_495").style.display = "none";
  document.getElementById("Group_494").style.display = "none";
  document.getElementById("Group_492").style.display = "none";
  document.getElementById("Group_493").style.display = "none";
}
function fillDGas() {
  document.getElementById("Group_493").style.display = "block";
  document.getElementById("Group_491").style.display = "none";
  document.getElementById("Group_495").style.display = "none";
  document.getElementById("Group_494").style.display = "none";
  document.getElementById("Group_492").style.display = "none";
}
function fillShowAll() {
  document.getElementById("Group_493").style.display = "block";
  document.getElementById("Group_491").style.display = "block";
  document.getElementById("Group_495").style.display = "block";
  document.getElementById("Group_494").style.display = "block";
  document.getElementById("Group_492").style.display = "block";
}

function continueAction() {
  var classes = document.getElementsByClassName("classes");
  var classTitle = Array.prototype.slice.call(classes);
  var color = "rgb(117, 187, 67)";
  for (var i = 0; i < classTitle.length; i++) {
    if (classTitle[i].style.color == color) {
      classTitle[i + 1].style.color = "rgb(117, 187, 67)";
      classTitle[i].style.color = "#444444";
      if (classTitle[i + 1].className.includes("quiz")) {
        quizFrame.style.display = "block";
        videoPath.style.display = "none";
        infoFrame.style.display = "none";
        videoPath.pause();

        question.innerHTML = questionFull[0].question;

        answer[0].innerHTML =
          questionFull[0].choice1 +
          "<input id = 'r1' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";
        answer[1].innerHTML =
          questionFull[0].choice2 +
          "<input id = 'r2' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";
        answer[2].innerHTML =
          questionFull[0].choice3 +
          "<input id = 'true' class='input' value = 'Correct' type='radio' name='radio'><span class='checkmark'></span>";
        answer[3].innerHTML =
          questionFull[0].choice4 +
          "<input id = 'r4' class='input' value = 'false' type='radio' name='radio'><span class='checkmark'></span>";

        var checkmarks = document.getElementsByClassName("checkmark");
        var checkmark = Array.prototype.slice.call(checkmarks);
        const loading = () => {
          classTitle[i + 1].parentElement.children[0].style.display = "block";
          classTitle[i + 1].parentElement.children[1].style.display = "none";
        };
        setTimeout(loading, 200);
        classTitle[i + 1].parentElement.children[0].style.display = "none";
        classTitle[i + 1].parentElement.children[1].style.display = "block";
        for (var j = 0; j < checkmark.length; j++) {
          checkmark[j].addEventListener("click", openSubmit);
        }

        break;
      } else if (classTitle[i + 1].className.includes("video")) {
        const loading = () => {
          classTitle[i + 1].parentElement.children[0].style.display = "block";
          classTitle[i + 1].parentElement.children[1].style.display = "none";
        };

        classTitle[i + 1].parentElement.children[0].style.display = "none";
        classTitle[i + 1].parentElement.children[1].style.display = "block";

        quizFrame.style.display = "none";
        videoPath.style.display = "block";
        infoFrame.style.display = "none";
        videoPath.src = videoSouce;

        videoPath.addEventListener("canplay", function () {
          setTimeout(loading, 0);
        });
        break;
      } else if (classTitle[i + 1].className.includes("info")) {
        quizFrame.style.display = "none";
        videoPath.style.display = "none";
        infoFrame.style.display = "block";
        videoPath.pause();
        const loading = () => {
          classTitle[i + 1].parentElement.children[0].style.display = "block";
          classTitle[i + 1].parentElement.children[1].style.display = "none";
        };

        classTitle[i + 1].parentElement.children[0].style.display = "none";
        classTitle[i + 1].parentElement.children[1].style.display = "block";

        setTimeout(loading, 200);
        break;
      }
      break;
    }
  }
}
