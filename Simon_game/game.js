var randomNumber;
var userChosenColor;
var randomChoosenColor;
var gamePattern = [];
var  userClickedPattern=[];
var buttonColors = ["red", "blue", "green", "yellow"];
var started=false;
var level=0;


$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

$ (".btn").click(function(){
    userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);

playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
});


function nextSequence() {
  level++;
    $("#level-title").text("Level "+level);
    randomNumber = Math.floor(Math.random() * 4);
    randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    var selectedButton = $("#" + randomChoosenColor);
    selectedButton.fadeOut(100).fadeIn(100);
   playSound(randomChoosenColor);
    animatePress(randomChoosenColor);
}

//sound
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//animation
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
   
    setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {
    playSound("wrong");
        $("body").addClass("game-over");
     
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any key to Restart!");
    var audio = new Audio(sounds/wrong.mp3);
   startOver();
}
}
function startOver(){
     started=false;
     level=0;
     gamePattern=[];
}




  