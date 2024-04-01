var con=document.getElementById('con');
var quizz=document.getElementById('quizz');
var option1=document.getElementById('option1');
var option2=document.getElementById('option2');
var option3=document.getElementById('option3');
var selected=document.querySelector('#con input[type=radio] checked');

function dk(){

   
if( option1==selected.value1){
    quizz.style.background="green";

}
else{
    quizz.style.background="red";

}
}
dk(quizz);