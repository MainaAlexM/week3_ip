var points=0;
function evaluation(){

    points = 0;
    var correct1=document.quiz.quiz1.value;
    var correct2=document.quiz.quiz2.value;
    var correct3=document.quiz.quiz3.value;
    var correct4=document.quiz.quiz4.value;
    var correct5=document.quiz.quiz5.value;
    var correct6=document.quiz.quiz6.value;
    var correct7=document.quiz.quiz7.value;
    var correct8=document.quiz.quiz8.value;

    if (correct1=="Yes") {points+=5} 
    if (correct2=="B") {points+=5}
    if (correct3=="A") {points+=5}
    if (correct4=="B") {points+=5}
    if (correct5=="D") {points+=5}
    if (correct6=="A") {points+=5}
    if (correct7=="A") {points+=5}
    if (correct8=="B") {points+=5}



    // document.write(points);

    document.getElementById("results").innerHTML = points;



    grading();


}   

