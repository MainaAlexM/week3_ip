function evaluate(){
    var m=0;
    
    var mk1=document.quiz.quiz1.value;
    var mk2=document.quiz.quiz2.value;
    var mk3=document.quiz.quiz3.value;
    var mk4=document.quiz.quiz4.value;
    var mk5=document.quiz.quiz5.value;
    var mk6=document.quiz.quiz6.value;
    var mk7=document.quiz.quiz7.value;
    var mk8=document.quiz.quiz8.value;

    if (mk1=="A") {m++} 
    if (mk2=="B") {m++}
    if (mk3=="A") {m++}
    if (mk4=="B") {m++}
    if (mk5=="D") {m++}
    if (mk6=="A") {m++}
    if (mk7=="A") {m++}
    if (mk8=="B") {m++}

    document.write(m);
        m = document.getElementByName("marks").value;


    console.log(m);
}

document.getElementById("submission").onclick = evaluate()

