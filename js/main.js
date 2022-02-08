function evaluate(){
    var points=0;
    var message="Your Test is Submitted. Click Okay to view your score.";

    var correct1=document.quiz.quiz1.value;
    var correct2=document.quiz.quiz2.value;
    var correct3=document.quiz.quiz3.value;
    var correct4=document.quiz.quiz4.value;
    var correct5=document.quiz.quiz5.value;
    var correct6=document.quiz.quiz6.value;
    var correct7=document.quiz.quiz7.value;
    var correct8=document.quiz.quiz8.value;

    if (correct1=="Yes") {points+=5}; 
    if (correct2=="B") {points+=5};
    if (correct3=="A") {points+=5};
    if (correct4=="B") {points+=5};
    if (correct5=="D") {points+=5};
    if (correct6=="A") {points+=5};
    if (correct7=="A") {points+=5};
    if (correct8=="B") {points+=5};

    console.log("Done");
    // test.style.display="none"

    // if(points>=18) {
    //     alert(message)
}   

document.getElementById("results").innerHTML = $(points);