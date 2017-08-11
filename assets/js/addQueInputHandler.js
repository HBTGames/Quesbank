//script for adding inputs
var TotalInput = [0,0];
var defaultInputHtml;
var tagSelect;


function setDefaultInputHtml(tagSelect){
  console.log("tagSelect in default");
  console.log(tagSelect);
  if(tagSelect == 0){
    document.getElementsByName("deleteInputFillBlank")[0].value = TotalInput[tagSelect] + 1;
    defaultInputHtml   =  document.getElementsByName("firstInput")[tagSelect].innerHTML;

 document.getElementsByName("deleteInputFillBlank")[0].value = TotalInput[tagSelect];
  }else if (tagSelect == 1) {
    document.getElementsByName("deleteInputMultiChoice")[0].value = TotalInput[tagSelect] + 1;
    defaultInputHtml   =  document.getElementsByName("firstInput")[tagSelect].innerHTML;
 document.getElementsByName("deleteInputMultiChoice")[0].value = TotalInput[tagSelect];
  }

    console.log(defaultInputHtml);
}

//structure to memorize
//fillblank
var currentYearInputsFillBlank = [];
var currentGradeInputsFillBlank  = [];
var currentTestTypeInputsFillBlank = [];
var currentReferenceInputsFillBlank = [];
var currentTextBookInputsFillBlank = [];
var currentLessonInputsFillBlank =[];
var currentKnowledgeInputsFillBlank = [];
var currentDiffInputsFillBlank = [];
var currentQuestionInputsFillBlank = [];
var currentAnswerInputsFillBlank = [];
//multichoice
var currentYearInputsMultiChoice = [];
var currentGradeInputsMultiChoice  = [];
var currentTestTypeInputsMultiChoice = [];
var currentReferenceInputsMultiChoice = [];
var currentTextBookInputsMultiChoice = [];
var currentLessonInputsMultiChoice =[];
var currentKnowledgeInputsMultiChoice = [];
var currentDiffInputsMultiChoice = [];
var currentQuestionInputsMultiChoice = [];
var currentAnswerInputsMultiChoice = [];

function storeCurrentInput (){
//store fillblank
currentYearInputsFillBlank = [];
currentGradeInputsFillBlank  = [];
currentTestTypeInputsFillBlank = [];
currentReferenceInputsFillBlank = [];
currentTextBookInputsFillBlank = [];
currentLessonInputsFillBlank =[];
currentKnowledgeInputsFillBlank = [];
currentDiffInputsFillBlank = [];
currentQuestionInputsFillBlank = [];
currentAnswerInputsFillBlank = [];
$('.yearInputFillBlank').each(function ( ) {
currentYearInputsFillBlank.push($(this).val());
});

$('.gradeInputFillBlank').each(function ( ) {
currentGradeInputsFillBlank.push($(this).val());
});

$('.testtypeInputFillBlank').each(function ( ) {
currentTestTypeInputsFillBlank.push($(this).val());
});
$('.referenceInputFillBlank').each(function ( ) {
currentReferenceInputsFillBlank.push($(this).val());
});
$('.textbookInputFillBlank').each(function ( ) {
currentTextBookInputsFillBlank.push($(this).val());
});
$('.lessonInputFillBlank').each(function ( ) {
currentLessonInputsFillBlank.push($(this).val());
});
$('.knowledgeInputFillBlank').each(function ( ) {
currentKnowledgeInputsFillBlank.push($(this).val());
});
$('.difficultyInputFillBlank').each(function ( ) {
currentDiffInputsFillBlank.push($(this).val());
});

$('.questionInputFillBlank').each(function ( ) {
currentQuestionInputsFillBlank.push($(this).val());
});
$('.answerInputFillBlank').each(function ( ) {
currentAnswerInputsFillBlank.push($(this).val());
});

//store multichoice
currentYearInputsMultiChoice = [];
currentGradeInputsMultiChoice  = [];
currentTestTypeInputsMultiChoice = [];
currentReferenceInputsMultiChoice = [];
currentTextBookInputsMultiChoice = [];
currentLessonInputsMultiChoice =[];
currentKnowledgeInputsMultiChoice = [];
currentDiffInputsMultiChoice = [];
currentQuestionInputsMultiChoice = [];
currentAnswerInputsMultiChoice = [];

$('.yearInputMultiChoice').each(function ( ) {
currentYearInputsMultiChoice.push($(this).val());
});

$('.gradeInputMultiChoice').each(function ( ) {
currentGradeInputsMultiChoice.push($(this).val());
});

$('.testtypeInputMultiChoice').each(function ( ) {
currentTestTypeInputsMultiChoice.push($(this).val());
});
$('.referenceInputMultiChoice').each(function ( ) {
currentReferenceInputsMultiChoice.push($(this).val());
});
$('.textbookInputMultiChoice').each(function ( ) {
currentTextBookInputsMultiChoice.push($(this).val());
});
$('.lessonInputMultiChoice').each(function ( ) {
currentLessonInputsMultiChoice.push($(this).val());
});
$('.knowledgeInputMultiChoice').each(function ( ) {
currentKnowledgeInputsMultiChoice.push($(this).val());
});
$('.difficultyInputMultiChoice').each(function ( ) {
currentDiffInputsMultiChoice.push($(this).val());
});

$('.questionInputMultiChoice').each(function ( ) {
currentQuestionInputsMultiChoice.push($(this).val());
});
$('.answerInputMultiChoice').each(function ( ) {
currentAnswerInputsMultiChoice.push($(this).val());
});

}








//add input for different tags
function addInputs(tagSelect){
  setDefaultInputHtml(tagSelect);
  TotalInput[tagSelect] += 1;
console.log("totalinput tagselect is");
console.log(TotalInput[tagSelect]);
    var currentFormContent =  document.getElementsByName("inputs")[tagSelect].innerHTML;
    //fillblank
storeCurrentInput();

document.getElementsByName("inputs")[tagSelect].innerHTML = currentFormContent + defaultInputHtml;



//restore fillblank
for (var i = 0; i < currentYearInputsFillBlank.length; i++) {
  document.getElementsByClassName("yearInputFillBlank")[i].value = currentYearInputsFillBlank[i];
  document.getElementsByClassName("gradeInputFillBlank")[i].value = currentGradeInputsFillBlank[i];
  document.getElementsByClassName("testtypeInputFillBlank")[i].value = currentTestTypeInputsFillBlank[i];
  document.getElementsByClassName("referenceInputFillBlank")[i].value = currentReferenceInputsFillBlank[i];
  document.getElementsByClassName("textbookInputFillBlank")[i].value = currentTextBookInputsFillBlank[i];
  document.getElementsByClassName("lessonInputFillBlank")[i].value = currentLessonInputsFillBlank[i];
    document.getElementsByClassName("knowledgeInputFillBlank")[i].value = currentKnowledgeInputsFillBlank[i];
    document.getElementsByClassName("difficultyInputFillBlank")[i].value = currentDiffInputsFillBlank[i];
  document.getElementsByClassName("questionInputFillBlank")[i].value = currentQuestionInputsFillBlank[i];
  document.getElementsByClassName("answerInputFillBlank")[i].value = currentAnswerInputsFillBlank[i];
}

//restore multichoice
for (var i = 0; i < currentYearInputsMultiChoice.length; i++) {
  document.getElementsByClassName("yearInputMultiChoice")[i].value = currentYearInputsMultiChoice[i];
  document.getElementsByClassName("gradeInputMultiChoice")[i].value = currentGradeInputsMultiChoice[i];
  document.getElementsByClassName("testtypeInputMultiChoice")[i].value = currentTestTypeInputsMultiChoice[i];
  document.getElementsByClassName("referenceInputMultiChoice")[i].value = currentReferenceInputsMultiChoice[i];
  document.getElementsByClassName("textbookInputMultiChoice")[i].value = currentTextBookInputsMultiChoice[i];
  document.getElementsByClassName("lessonInputMultiChoice")[i].value = currentLessonInputsMultiChoice[i];
    document.getElementsByClassName("knowledgeInputMultiChoice")[i].value = currentKnowledgeInputsMultiChoice[i];
    document.getElementsByClassName("difficultyInputMultiChoice")[i].value = currentDiffInputsMultiChoice[i];
  document.getElementsByClassName("questionInputMultiChoice")[i].value = currentQuestionInputsMultiChoice[i];
  document.getElementsByClassName("answerInputMultiChoice")[i].value = currentAnswerInputsMultiChoice[i];
}
  //currentFormContent  = currentFormContent -  document.getElementsByName("add").innerHTML;

}

//implement only in fillblank
 function deleteInputs(deleteIndex, tagSelect){
   storeCurrentInput();
   console.log(TotalInput[tagSelect]);
 if (TotalInput[tagSelect] > 0) {
   TotalInput[tagSelect] -= 1;
 }else{
   console.log("no delete");
   //no delete exit
 return;
 }


 finalInputNumber = TotalInput[tagSelect];
 console.log("finalInputNumber");
 console.log(finalInputNumber);
 //reset total input;
 TotalInput[tagSelect] = 0;
 console.log("tagSelect");
 console.log(tagSelect);
  document.getElementsByName("inputs")[tagSelect].innerHTML = "<span name='firstInput'>" + document.getElementsByName("firstInput")[tagSelect].innerHTML + "<\span>";
 if (tagSelect == 0) {
   document.getElementsByName("deleteInputFillBlank")[0].value = 0;
 }else if (tagSelect == 1) {
   document.getElementsByName("deleteInputMultiChoice")[0].value = 0;
 }

for (var i = 0; i < finalInputNumber; i++) {
var tempHTML = document.getElementsByName("inputs")[tagSelect].innerHTML;
setDefaultInputHtml(tagSelect);
TotalInput[TotalInput] += 1;
document.getElementsByName("inputs")[tagSelect].innerHTML =  tempHTML + defaultInputHtml;
}
//for fillblank
if(tagSelect == 0){
  for (var i = 0; i <= finalInputNumber; i++) {
  if(i < deleteIndex){
  document.getElementsByClassName("yearInputFillBlank")[i].value = currentYearInputsFillBlank[i];
  document.getElementsByClassName("gradeInputFillBlank")[i].value = currentGradeInputsFillBlank[i];
  document.getElementsByClassName("testtypeInputFillBlank")[i].value = currentTestTypeInputsFillBlank[i];
  document.getElementsByClassName("referenceInputFillBlank")[i].value = currentReferenceInputsFillBlank[i];
  document.getElementsByClassName("textbookInputFillBlank")[i].value = currentTextBookInputsFillBlank[i];
  document.getElementsByClassName("lessonInputFillBlank")[i].value = currentLessonInputsFillBlank[i];
  document.getElementsByClassName("knowledgeInputFillBlank")[i].value = currentKnowledgeInputsFillBlank[i];
  document.getElementsByClassName("difficultyInputFillBlank")[i].value = currentDiffInputsFillBlank[i];
  document.getElementsByClassName("questionInputFillBlank")[i].value = currentQuestionInputsFillBlank[i];
  document.getElementsByClassName("answerInputFillBlank")[i].value = currentAnswerInputsFillBlank[i];
  }else if(i >= deleteIndex){
  document.getElementsByClassName("yearInputFillBlank")[i].value = currentYearInputsFillBlank[i+1];
  document.getElementsByClassName("gradeInputFillBlank")[i].value = currentGradeInputsFillBlank[i+1];
  document.getElementsByClassName("testtypeInputFillBlank")[i].value = currentTestTypeInputsFillBlank[i+1];
  document.getElementsByClassName("referenceInputFillBlank")[i].value = currentReferenceInputsFillBlank[i+1];
  document.getElementsByClassName("textbookInputFillBlank")[i].value = currentTextBookInputsFillBlank[i+1];
  document.getElementsByClassName("lessonInputFillBlank")[i].value = currentLessonInputsFillBlank[i+1];
  document.getElementsByClassName("knowledgeInputFillBlank")[i].value = currentKnowledgeInputsFillBlank[i+1];
  document.getElementsByClassName("difficultyInputFillBlank")[i].value = currentDiffInputsFillBlank[i+1];
  document.getElementsByClassName("questionInputFillBlank")[i].value = currentQuestionInputsFillBlank[i+1];
  document.getElementsByClassName("answerInputFillBlank")[i].value = currentAnswerInputsFillBlank[i+1];
  }
  }

}else if (tagSelect == 1) {
  for (var i = 0; i <= finalInputNumber; i++) {
  if(i < deleteIndex){
  document.getElementsByClassName("yearInputMultiChoice")[i].value = currentYearInputsMultiChoice[i];
  document.getElementsByClassName("gradeInputMultiChoice")[i].value = currentGradeInputsMultiChoice[i];
  document.getElementsByClassName("testtypeInputMultiChoice")[i].value = currentTestTypeInputsMultiChoice[i];
  document.getElementsByClassName("referenceInputMultiChoice")[i].value = currentReferenceInputsMultiChoice[i];
  document.getElementsByClassName("textbookInputMultiChoice")[i].value = currentTextBookInputsMultiChoice[i];
  document.getElementsByClassName("lessonInputMultiChoice")[i].value = currentLessonInputsMultiChoice[i];
  document.getElementsByClassName("knowledgeInputMultiChoice")[i].value = currentKnowledgeInputsMultiChoice[i];
  document.getElementsByClassName("difficultyInputMultiChoice")[i].value = currentDiffInputsMultiChoice[i];
  document.getElementsByClassName("questionInputMultiChoice")[i].value = currentQuestionInputsMultiChoice[i];
  document.getElementsByClassName("answerInputMultiChoice")[i].value = currentAnswerInputsMultiChoice[i];
  }else if(i >= deleteIndex){
    document.getElementsByClassName("yearInputMultiChoice")[i].value = currentYearInputsMultiChoice[i+1];
    document.getElementsByClassName("gradeInputMultiChoice")[i].value = currentGradeInputsMultiChoice[i+1];
    document.getElementsByClassName("testtypeInputMultiChoice")[i].value = currentTestTypeInputsMultiChoice[i+1];
    document.getElementsByClassName("referenceInputMultiChoice")[i].value = currentReferenceInputsMultiChoice[i+1];
    document.getElementsByClassName("textbookInputMultiChoice")[i].value = currentTextBookInputsMultiChoice[i+1];
    document.getElementsByClassName("lessonInputMultiChoice")[i].value = currentLessonInputsMultiChoice[i+1];
    document.getElementsByClassName("knowledgeInputMultiChoice")[i].value = currentKnowledgeInputsMultiChoice[i+1];
    document.getElementsByClassName("difficultyInputMultiChoice")[i].value = currentDiffInputsMultiChoice[i+1];
    document.getElementsByClassName("questionInputMultiChoice")[i].value = currentQuestionInputsMultiChoice[i+1];
    document.getElementsByClassName("answerInputMultiChoice")[i].value = currentAnswerInputsMultiChoice[i+1];
  }
  }



}


 }
