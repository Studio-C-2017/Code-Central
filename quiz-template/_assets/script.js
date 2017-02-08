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
function displayTestSelect() {
    document.getElementById("testselect").style.display = "block";
    document.getElementById("mainpage").style.display = "none";
};

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
    };
};

//begin quiz
function startQuiz() {
    document.getElementById("title").innerHTML = "History Quiz"
    window.scrollTo(0,0);
};

//check answers
function checkAnswerHistory(){
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

function checkAnswerHtml() {
    if(q11[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[1].style.color = "red";
    }

    if(q12[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[2].style.color = "red";
    }

    if(q13[1].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[3].style.color = "red";
    }

    if(q14[3].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[4].style.color = "red";
    }

    if(q15[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[5].style.color = "red";
    }

    if(q16[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[6].style.color = "red";
    }

    if(q17[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[7].style.color = "red";
    }

    if(q18[1].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[8].style.color = "red";
    }

    if(q19[3].checked == true){
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

    document.getElementById("scoreOfHtml").innerHTML = "Hey " + nickName + ", you scored " + score + "/10!"

}

function checkAnswerCss() {
    score = 0;
    if(q21[3].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[1].style.color = "red";
    }

    if(q22[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[2].style.color = "red";
    }

    if(q23[1].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[3].style.color = "red";
    }

    if(q24[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[4].style.color = "red";
    }

    if(q25[1].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[5].style.color = "red";
    }

    if(q26[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[6].style.color = "red";
    }

    if(q27[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[7].style.color = "red";
    }

    if(q28[3].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[8].style.color = "red";
    }

    if(q29[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[9].style.color = "red";
    }

    if(q30[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[10].style.color = "red";
    }
    document.getElementById("scoreOfCss").innerHTML = "Hey " + nickName + ", you scored " + score + "/10!";
};

function checkAnswerJavascript() {
    if(q31[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[1].style.color = "red";
    }

    if(q32[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[2].style.color = "red";
    }

    if(q33[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[3].style.color = "red";
    }

    if(q34[3].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[4].style.color = "red";
    }

    if(q35[0].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[5].style.color = "red";
    }

    if(q36[1].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[6].style.color = "red";
    }

    if(q37[2].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[7].style.color = "red";
    }

    if(q38[1].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[8].style.color = "red";
    }

    if(q39[1].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[9].style.color = "red";
    }

    if(q40[03].checked == true){
        score += 1;
    } else{
        score += 0;
        document.forms[10].style.color = "red";
    }
    document.getElementById("scoreOfJavascript").innerHTML = "Hey " + nickName + ", you scored " + score + "/10!";
};

function goHome() {
    document.getElementById("mainpage").style.display = "block";
    document.getElementById("history").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("html").style.display = "none";
    document.getElementById("javascript").style.display = "none";
    document.getElementById("testselect").style.display = "none";
}
