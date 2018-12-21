function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var question11 = document.quiz.question11.value;

  var score = 2;
  var correct = 0;

  if (question1 == "b") {
    correct++;
  }
  if (question2 == "a") {
    correct++;
  }
  if (question3 == "c") {
    correct++;
  }
  if (question4 == "b") {
    correct++;
  }
  if (question5 == "a") {
    correct++;
  }

  if (question6 == "a") {
    correct++;
  }

  if (question7 == "d") {
    correct++;
  }

  if (question8 == "d") {
    correct++;
  }

  if (question9 == "b") {
    correct++;
  }

  if (question10 == "c") {
    correct++;
  }
  if (question11 == "a") {
    correct++;
  }

  if (correct == 0) {
    score = 0;
  }

  if (correct > 0 && correct <= 11) {
    score = correct * score;
  }

  $(document).ready(function() {
    // $("#quiz").submit(function() {
    // $("#button").click(function() {
    // alert("yes");
    $("#quiz").hide();
    $("#result").show();
  });

  // });
  document.getElementById("result").style.visibility = "visible";

  document.getElementById("score").innerHTML =
    "You got " + correct + " correct.";
  document.getElementById("score").innerHTML =
    "Your score are:" + score + " /22";
}
