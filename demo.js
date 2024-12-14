function nextQuestion() {
    var options = document.getElementsByName("answer");
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        var selected = options[i].value;
        var userAnswer = questions[index - 1][`option${selected}`];
        var correctAns = questions[index - 1].correctAnswer;
        if (userAnswer === correctAns) {
          score++;
        }
      }
      options[i].checked = false;
    }
    // console.log(options);
    if (index > questions.length - 1) {
      score = (score / questions.length) * 100 + "%";
      btn.innerHTML = "Submit";
    } 
    else {
      ques.innerText = questions[index].question;
      option1.innerText = questions[index].option1;
      option2.innerText = questions[index].option2;
      option3.innerText = questions[index].option3;
      index++;
      btn.disabled = true;
    }
  }

  nextQuestion();

function enableBtn() {
  btn.disabled = false;
}

var min = 1;
var sec = 3;

setInterval(function () {
  timer.innerHTML = `${min}:${sec}`;
  sec--;
  if (sec < 0) {
    if (min < 1) {
        nextQuestion()
        min = 1;
        sec = 3
    } else {
      min--;
      sec = 3;
    }
  }
}, 1000);