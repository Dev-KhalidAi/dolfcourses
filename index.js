componenets = document.getElementsByClassName("componenet");
var componenet = Array.prototype.slice.call(componenets);

for (var i = 0; i < componenet.length; i++) {
  componenet[i].addEventListener("click", slider);
}

var videos = document.getElementsByClassName("video");
var video = Array.prototype.slice.call(videos);

for (var i = 0; i < video.length; i++) {
  video[i].addEventListener("click", fillVideo);
}

var videoPath = document.getElementById("video-frame");
videoPath.style.display = "none";

quizes = document.getElementsByClassName("quiz");
var quiz = Array.prototype.slice.call(quizes);

for (var i = 0; i < quiz.length; i++) {
  quiz[i].addEventListener("click", fillQuiz);
}

var quizFrame = document.querySelector(".quiz-frame");
// quizFrame.style.display = "none";

// var videos = document
//   .getElementById("video")
//   .addEventListener("click", fillVideo);

var classesContainer = document.querySelector("#classes-container");
var bool = false;

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
  quizFrame.style.display = "none";
  videoPath.style.display = "";
  videoPath.src = "https://www.youtube.com/embed/TXfGj7CFbqs";
}

function fillQuiz() {
  videoPath.style.display = "none";
  quizFrame.style.display = "";
}
