// make result invisible

var	results = document.getElementById('results');
var quizForm = document.getElementById('quiz');
var scoreResult = document.getElementById('scoreResult');
results.style.display = 'none';
var i;

// check answers

function showResult() {
	var total = 10,
			score = 0,
			answers =  ["b","a","d","b","d","c","d","a","b","c"],
            answerNames = ["red","a","d","b","d","c","d","a","b","c"];
	
	// Get user input
	var q1 = document.forms['quizForm']['q1'].value;
	var q2 = document.forms['quizForm']['q2'].value;
	var q3 = document.forms['quizForm']['q3'].value;
	var q4 = document.forms['quizForm']['q4'].value;
	var q5 = document.forms['quizForm']['q5'].value;
    var q1 = document.forms['quizForm']['q6'].value;
	var q2 = document.forms['quizForm']['q7'].value;
	var q3 = document.forms['quizForm']['q8'].value;
	var q4 = document.forms['quizForm']['q9'].value;
	var q5 = document.forms['quizForm']['q10'].value;

	// Validation
/*	for(i=1; i<=total; i++) {
		if(eval('q'+i) == null || eval('q'+i) == '') {
			alert('You missed question #' + i);
			return false;
		}
	} */
	
	// Check for Answers
	for(i=1; i <= total; i++){
		if(eval('q'+i) == answers[i -1]){
				score++
		}
	}
    
    var correctAnswerStatus = document.getElementsByClassName('correctAnswer');
    
    for (i=0; i < correctAnswerStatus.length; i++) {
        
        correctAnswerStatus[i].innerHTML += answerNames[i];
            
    }
    
  //  correctAnswerStatus.innerHTML(answers[i]);
	
    quizForm.style.display = 'none';
	results.style.display = 'block';

    scoreResult.innerHTML = 'Your Score is <strong>'+ score +'</strong> of <strong>'+ total+'</strong>';
                
	
}


