//define which answers are right, and which are wrong
//give each answer a value, right ones give +1, wrong add 0
//tell submit button to count selected answers, put value in a var
//display the final score var

var nickName;
var error = document.createElement("p");
var errorMsg = document.createTextNode("field error");
var q1 = document.forms[1];
var score = 0;
var scorePart1;

//var qArray = [document.getElementById("q1"), document.getelementbyid("q2")vbnm,];


//sets nickname var to the text form value, hides form after submission
function getName() {
    nickName = document.getElementById("nameInput").value;
    if(nickName == " " || isNaN(nickName) == false){
        nickName = null;
        document.getElementById("error").innerHTML = "field error";
        document.getElementById("nameInput").value = null;
    } else {
        nickName = document.getElementById("nameInput").value;   
        document.getElementById("error").innerHTML = "Hey " + nickName + "! Good luck!";
        document.getElementById("nameForm").style.display = "none";
        document.getElementById("set1").style.display = "block";
    }
};

//check answer
function checkAnswer(){
    document.getElementById("finalSubmit").style.display = "none";
    if(q1[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[1].style.color = "red";
    }
    
    if(q2[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[2].style.color = "red";
    }
    
    if(q3[1].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[3].style.color = "red";
    }
    
    if(q4[3].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[4].style.color = "red";
    }
    
    if(q5[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[5].style.color = "red";
    }
    
    if(q6[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[6].style.color = "red";
    }
    
    if(q7[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[7].style.color = "red";
    }
    
    if(q8[1].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[8].style.color = "red";
    }
    
    if(q9[3].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[9].style.color = "red";
    }
    
    if(q10[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[10].style.color = "red";
    }

    document.getElementById("scoreOfHistory").innerHTML = "Hey " + nickName + ", you scored " + score + "/10!";
    
    scorePart1 = score;
};

function goToPart2(){
    document.getElementById("set1").style.display = "none";
    document.getElementById("title").innerHTML = "Section 2";
    document.getElementById("error").innerHTML = nickName + ", this is part two of the test, it goes over HTML"
};

function 