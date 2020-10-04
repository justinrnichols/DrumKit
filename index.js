var numOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    keyBoardSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
document.addEventListener("keydown", function(e) {
  keyBoardSound(e.key);
  buttonAnimation(e.key);
});

function keyBoardSound(key) {
  switch(key) {
    case "w":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var cymbal = new Audio("sounds/cymbal.mp3");
      cymbal.play();
      break;
    case "l":
      var bass = new Audio("sounds/bass.mp3");
      bass.play();
      break;
    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(buttonLetter) {
  var activeButton = document.querySelector("." + buttonLetter);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
