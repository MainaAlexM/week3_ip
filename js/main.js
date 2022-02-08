var points=0;       //Variable to add up the points scored.

//Function to evaluate correctness of choices.
function evaluation(){
    defaultMessage = "Your score is ";
    points = 0;
    var correct1=document.quiz.quiz1.value;     //Evaluation is done for each choice made on the form.
    var correct2=document.quiz.quiz2.value;
    var correct3=document.quiz.quiz3.value;
    var correct4=document.quiz.quiz4.value;
    var correct5=document.quiz.quiz5.value;
    var correct6=document.quiz.quiz6.value;
    var correct7=document.quiz.quiz7.value;
    var correct8=document.quiz.quiz8.value;

    //Logic to increment points scored based on correct answers.
    if (correct1=="Yes") {points+=5} 
    if (correct2=="B") {points+=5}
    if (correct3=="A") {points+=5}
    if (correct4=="B") {points+=5}
    if (correct5=="D") {points+=5}
    if (correct6=="A") {points+=5}
    if (correct7=="A") {points+=5}
    if (correct8=="B") {points+=5}

    //Script to write the results on the html view div.
    document.getElementById("results").innerHTML = defaultMessage + points;

    grading();      //The function generates comments for each student based on scored points.

    document.quiz.reset();      //The Script clears the html form after submission.
}


//Grading function generates comments based on points scored overall.
function grading() {
    if (points>=32) {message = "Your Performance was Excellent!"}
    if (32>points>=21) {message = "Congratulations. Your Performance was Fair!"}
    if (points==20) {message = "You have Passed! "}
    if (points<=19) {message = "You have Failed! " + " You need to retake the test."}

    document.getElementById("commentary").innerHTML = message;  //Writes comments on html commentary Paragraph
}

