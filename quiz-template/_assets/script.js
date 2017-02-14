//define which answers are right, and which are wrong
//give each answer a value, right ones give +1, wrong add 0
//tell submit button to count selected answers, put value in a var
//display the final score var

var nickName;
var error = document.createElement("p");
var errorMsg = document.createTextNode("field error");
var q1 = document.forms[1];
var q11 = document.forms[2];
var q21 = document.forms[3];
var q31 = document.forms[4];
var score = 0;
var scorePart1;
var quizSelect = document.forms[0];


//var qArray = [document.getElementById("q1"), document.getelementbyid("q2")vbnm,];


//sets nickname var to the text form value, hides form after submission

//check answers
function checkAnswer(){
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

    document.getElementById("score").innerHTML = "Hey " + nickName + ", you scored " + score + "/10!";

    scorePart1 = score;
};

