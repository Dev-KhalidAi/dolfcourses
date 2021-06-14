var test = document
  .getElementById("componenet")
  .addEventListener("click", test);

var test2 = document.querySelector("#classes-container");
var bool = false;

function test() {
  if (bool == false) {
    test2.style.display = "none";
    test2.style.transition = "display 300ms";
    bool = true;
  } else {
    test2.style.display = "";
    bool = false;
  }
}
