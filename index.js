var RandomNumber1 = Math.floor(Math.random() * 100) + 1;
console.log(RandomNumber1);
var btn = document.getElementById("btn");
var button = document.getElementById("btn1");
var playAgainButton = document.querySelector(".btn2");
var p1 = document.querySelector(".p1")
setTimeout(function() {
    p1.style.display = "block";
  }, 3000);
btn.addEventListener("click", function(event) {
  event.preventDefault(); 
  
  var Number2 = parseInt(document.getElementById("input").value);

  if (RandomNumber1 < Number2) {
    document.querySelector(".p1").innerHTML = "Lower number please!";
    button.style.backgroundColor = "red";
    button.textContent = "Wrong🙃🙃";
  } else if (RandomNumber1 >  Number2) {
    document.querySelector(".p1").innerHTML = "Higher number please!";
    button.style.backgroundColor = "red";
    button.textContent = "Wrong🙃🙃";
  } else {
   p1.innerHTML = "You got it👍👍";
    button.textContent = "Congratulations, you win!!🎉🎉";
    button.style.backgroundColor = "green";
   
    playAgainButton.style.display = "block";
  }
});

playAgainButton.addEventListener("click", function() {
  RandomNumber1 = Math.floor(Math.random() * 100) + 1;
  document.getElementById("input").value = "";
  document.querySelector(".p1").innerHTML = "Good Luck🤗🤗";
  button.textContent = "Let us begin:)";
  button.style.backgroundColor = "";
  
  playAgainButton.style.display = "none";
});


