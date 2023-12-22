var h2  = document.querySelector("h2");
var btn1=  document.getElementById("add");
var btn2=  document.getElementById("subtruct");
var btn3=  document.getElementById("multiply");
var btn4=  document.getElementById("divide");

btn1.addEventListener("click", function(event){

    event.preventDefault(); 
    var Num1= parseInt(document.getElementById("input").value);
    var Num2 = parseInt(document.getElementById("input1").value);
    var result = Num1 + Num2;
    h2.innerHTML= "The answer is " + result;



})

btn2.addEventListener("click", function(event){

    event.preventDefault(); 
    var Num1= parseInt(document.getElementById("input").value);
    var Num2 = parseInt(document.getElementById("input1").value);
    var result = Num1 - Num2;
    h2.innerHTML= "The answer is " + result;


})


btn3.addEventListener("click", function(event){

    event.preventDefault(); 
    var Num1= parseInt(document.getElementById("input").value);
    var Num2 = parseInt(document.getElementById("input1").value);
    var result = Num1 * Num2;
    h2.innerHTML= "The answer is " + result;


})



btn4.addEventListener("click", function(event){

    event.preventDefault(); 
    var Num1= parseInt(document.getElementById("input").value);
    var Num2 = parseInt(document.getElementById("input1").value);
    if(Num1<Num2){
        var result = parseFloat(Num1/Num2);
        h2.innerHTML= "The answer is" + result;
    }
    else if(Num2 == 0){
         h2.innerHTML= "Undefine!"
    }
    else{

    
    var result = Num1 / Num2;
    h2.innerHTML= "The answer is " + result;
    }


})
