//script for adding inputs
var TotalInput = [0,0,0,0,0];
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
  }else if (tagSelect == 2) {
    document.getElementsByName("deleteInputSentenceTrans")[0].value = TotalInput[tagSelect] + 1;
    defaultInputHtml   =  document.getElementsByName("firstInput")[tagSelect].innerHTML;
 document.getElementsByName("deleteInputSentenceTrans")[0].value = TotalInput[tagSelect];
  }else if (tagSelect == 3) {
    document.getElementsByName("deleteInputInteraction")[0].value = TotalInput[tagSelect] + 1;
    defaultInputHtml   =  document.getElementsByName("firstInput")[tagSelect].innerHTML;
 document.getElementsByName("deleteInputInteraction")[0].value = TotalInput[tagSelect];
  }else if (tagSelect == 4) {
    document.getElementsByName("deleteInputReadingMulti")[0].value = TotalInput[tagSelect] + 1;
    defaultInputHtml   =  document.getElementsByName("firstInput")[tagSelect].innerHTML;
 document.getElementsByName("deleteInputReadingMulti")[0].value = TotalInput[tagSelect];
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
//sentence_trans
var currentYearInputsSentenceTrans = [];
var currentGradeInputsSentenceTrans  = [];
var currentTestTypeInputsSentenceTrans = [];
var currentReferenceInputsSentenceTrans = [];
var currentTextBookInputsSentenceTrans = [];
var currentLessonInputsSentenceTrans =[];
var currentKnowledgeInputsSentenceTrans = [];
var currentDiffInputsSentenceTrans = [];
var currentQuestionInputsSentenceTrans = [];
var currentAnswerInputsSentenceTrans = [];
//interaction
var currentYearInputsInteraction = [];
var currentGradeInputsInteraction  = [];
var currentTestTypeInputsInteraction = [];
var currentReferenceInputsInteraction = [];
var currentTextBookInputsInteraction = [];
var currentLessonInputsInteraction =[];
var currentKnowledgeInputsInteraction = [];
var currentDiffInputsInteraction = [];
var currentQuestionInputsInteraction = [];
var currentAnswerInputsInteraction = [];
//reading multi (waxing)
var currentYearInputsReadingMulti = [];
var currentGradeInputsReadingMulti  = [];
var currentTestTypeInputsReadingMulti = [];
var currentReferenceInputsReadingMulti = [];
var currentTextBookInputsReadingMulti = [];
var currentLessonInputsReadingMulti =[];
var currentKnowledgeInputsReadingMulti = [];
var currentDiffInputsReadingMulti = [];
var currentQuestionInputsReadingMulti = [];
var currentAnswerInputsReadingMulti = [];



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

//store sentence trans
currentYearInputsSentenceTrans = [];
currentGradeInputsSentenceTrans  = [];
currentTestTypeInputsSentenceTrans = [];
currentReferenceInputsSentenceTrans = [];
currentTextBookInputsSentenceTrans = [];
currentLessonInputsSentenceTrans =[];
currentKnowledgeInputsSentenceTrans = [];
currentDiffInputsSentenceTrans = [];
currentQuestionInputsSentenceTrans = [];
currentAnswerInputsSentenceTrans = [];

$('.yearInputSentenceTrans').each(function ( ) {
currentYearInputsSentenceTrans.push($(this).val());
});

$('.gradeInputSentenceTrans').each(function ( ) {
currentGradeInputsSentenceTrans.push($(this).val());
});

$('.testtypeInputSentenceTrans').each(function ( ) {
currentTestTypeInputsSentenceTrans.push($(this).val());
});
$('.referenceInputSentenceTrans').each(function ( ) {
currentReferenceInputsSentenceTrans.push($(this).val());
});
$('.textbookInputSentenceTrans').each(function ( ) {
currentTextBookInputsSentenceTrans.push($(this).val());
});
$('.lessonInputSentenceTrans').each(function ( ) {
currentLessonInputsSentenceTrans.push($(this).val());
});
$('.knowledgeInputSentenceTrans').each(function ( ) {
currentKnowledgeInputsSentenceTrans.push($(this).val());
});
$('.difficultyInputSentenceTrans').each(function ( ) {
currentDiffInputsSentenceTrans.push($(this).val());
});

$('.questionInputSentenceTrans').each(function ( ) {
currentQuestionInputsSentenceTrans.push($(this).val());
});
$('.answerInputSentenceTrans').each(function ( ) {
currentAnswerInputsSentenceTrans.push($(this).val());
});

//store interaction
currentYearInputsInteraction = [];
currentGradeInputsInteraction  = [];
currentTestTypeInputsInteraction = [];
currentReferenceInputsInteraction = [];
currentTextBookInputsInteraction = [];
currentLessonInputsInteraction =[];
currentKnowledgeInputsInteraction = [];
currentDiffInputsInteraction = [];
currentQuestionInputsInteraction = [];
currentAnswerInputsInteraction = [];
$('.yearInputInteraction').each(function ( ) {
currentYearInputsInteraction.push($(this).val());
});

$('.gradeInputInteraction').each(function ( ) {
currentGradeInputsInteraction.push($(this).val());
});

$('.testtypeInputInteraction').each(function ( ) {
currentTestTypeInputsInteraction.push($(this).val());
});
$('.referenceInputInteraction').each(function ( ) {
currentReferenceInputsInteraction.push($(this).val());
});
$('.textbookInputInteraction').each(function ( ) {
currentTextBookInputsInteraction.push($(this).val());
});
$('.lessonInputInteraction').each(function ( ) {
currentLessonInputsInteraction.push($(this).val());
});
$('.knowledgeInputInteraction').each(function ( ) {
currentKnowledgeInputsInteraction.push($(this).val());
});
$('.difficultyInputInteraction').each(function ( ) {
currentDiffInputsInteraction.push($(this).val());
});

$('.questionInputInteraction').each(function ( ) {
currentQuestionInputsInteraction.push($(this).val());
});
$('.answerInputInteraction').each(function ( ) {
currentAnswerInputsInteraction.push($(this).val());
});


//store reading multi (waxing)
currentYearInputsReadingMulti = [];
currentGradeInputsReadingMulti  = [];
currentTestTypeInputsReadingMulti = [];
currentReferenceInputsReadingMulti = [];
currentTextBookInputsReadingMulti = [];
currentLessonInputsReadingMulti =[];
currentKnowledgeInputsReadingMulti = [];
currentDiffInputsReadingMulti = [];
currentQuestionInputsReadingMulti = [];
currentAnswerInputsReadingMulti = [];
$('.yearInputReadingMulti').each(function ( ) {
currentYearInputsReadingMulti.push($(this).val());
});

$('.gradeInputReadingMulti').each(function ( ) {
currentGradeInputsReadingMulti.push($(this).val());
});

$('.testtypeInputReadingMulti').each(function ( ) {
currentTestTypeInputsReadingMulti.push($(this).val());
});
$('.referenceInputReadingMulti').each(function ( ) {
currentReferenceInputsReadingMulti.push($(this).val());
});
$('.textbookInputReadingMulti').each(function ( ) {
currentTextBookInputsReadingMulti.push($(this).val());
});
$('.lessonInputReadingMulti').each(function ( ) {
currentLessonInputsReadingMulti.push($(this).val());
});
$('.knowledgeInputReadingMulti').each(function ( ) {
currentKnowledgeInputsReadingMulti.push($(this).val());
});
$('.difficultyInputReadingMulti').each(function ( ) {
currentDiffInputsReadingMulti.push($(this).val());
});

$('.questionInputReadingMulti').each(function ( ) {
currentQuestionInputsReadingMulti.push($(this).val());
});
$('.answerInputReadingMulti').each(function ( ) {
currentAnswerInputsReadingMulti.push($(this).val());
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
//restore sentence trans
for (var i = 0; i < currentYearInputsSentenceTrans.length; i++) {
  document.getElementsByClassName("yearInputSentenceTrans")[i].value = currentYearInputsSentenceTrans[i];
  document.getElementsByClassName("gradeInputSentenceTrans")[i].value = currentGradeInputsSentenceTrans[i];
  document.getElementsByClassName("testtypeInputSentenceTrans")[i].value = currentTestTypeInputsSentenceTrans[i];
  document.getElementsByClassName("referenceInputSentenceTrans")[i].value = currentReferenceInputsSentenceTrans[i];
  document.getElementsByClassName("textbookInputSentenceTrans")[i].value = currentTextBookInputsSentenceTrans[i];
  document.getElementsByClassName("lessonInputSentenceTrans")[i].value = currentLessonInputsSentenceTrans[i];
    document.getElementsByClassName("knowledgeInputSentenceTrans")[i].value = currentKnowledgeInputsSentenceTrans[i];
    document.getElementsByClassName("difficultyInputSentenceTrans")[i].value = currentDiffInputsSentenceTrans[i];
  document.getElementsByClassName("questionInputSentenceTrans")[i].value = currentQuestionInputsSentenceTrans[i];
  document.getElementsByClassName("answerInputSentenceTrans")[i].value = currentAnswerInputsSentenceTrans[i];
}
//restore interaction
for (var i = 0; i < currentYearInputsInteraction.length; i++) {
  document.getElementsByClassName("yearInputInteraction")[i].value = currentYearInputsInteraction[i];
  document.getElementsByClassName("gradeInputInteraction")[i].value = currentGradeInputsInteraction[i];
  document.getElementsByClassName("testtypeInputInteraction")[i].value = currentTestTypeInputsInteraction[i];
  document.getElementsByClassName("referenceInputInteraction")[i].value = currentReferenceInputsInteraction[i];
  document.getElementsByClassName("textbookInputInteraction")[i].value = currentTextBookInputsInteraction[i];
  document.getElementsByClassName("lessonInputInteraction")[i].value = currentLessonInputsInteraction[i];
    document.getElementsByClassName("knowledgeInputInteraction")[i].value = currentKnowledgeInputsInteraction[i];
    document.getElementsByClassName("difficultyInputInteraction")[i].value = currentDiffInputsInteraction[i];
  document.getElementsByClassName("questionInputInteraction")[i].value = currentQuestionInputsInteraction[i];
  document.getElementsByClassName("answerInputInteraction")[i].value = currentAnswerInputsInteraction[i];
}
//restore reading multi (waxing)
for (var i = 0; i < currentYearInputsReadingMulti.length; i++) {
  document.getElementsByClassName("yearInputReadingMulti")[i].value = currentYearInputsReadingMulti[i];
  document.getElementsByClassName("gradeInputReadingMulti")[i].value = currentGradeInputsReadingMulti[i];
  document.getElementsByClassName("testtypeInputReadingMulti")[i].value = currentTestTypeInputsReadingMulti[i];
  document.getElementsByClassName("referenceInputReadingMulti")[i].value = currentReferenceInputsReadingMulti[i];
  document.getElementsByClassName("textbookInputReadingMulti")[i].value = currentTextBookInputsReadingMulti[i];
  document.getElementsByClassName("lessonInputReadingMulti")[i].value = currentLessonInputsReadingMulti[i];
    document.getElementsByClassName("knowledgeInputReadingMulti")[i].value = currentKnowledgeInputsReadingMulti[i];
    document.getElementsByClassName("difficultyInputReadingMulti")[i].value = currentDiffInputsReadingMulti[i];
  document.getElementsByClassName("questionInputReadingMulti")[i].value = currentQuestionInputsReadingMulti[i];
  document.getElementsByClassName("answerInputReadingMulti")[i].value = currentAnswerInputsReadingMulti[i];
}
}


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



}else if (tagSelect == 2) {
  for (var i = 0; i <= finalInputNumber; i++) {
  if(i < deleteIndex){
  document.getElementsByClassName("yearInputSentenceTrans")[i].value = currentYearInputsSentenceTrans[i];
  document.getElementsByClassName("gradeInputSentenceTrans")[i].value = currentGradeInputsSentenceTrans[i];
  document.getElementsByClassName("testtypeInputSentenceTrans")[i].value = currentTestTypeInputsSentenceTrans[i];
  document.getElementsByClassName("referenceInputSentenceTrans")[i].value = currentReferenceInputsSentenceTrans[i];
  document.getElementsByClassName("textbookInputSentenceTrans")[i].value = currentTextBookInputsSentenceTrans[i];
  document.getElementsByClassName("lessonInputSentenceTrans")[i].value = currentLessonInputsSentenceTrans[i];
  document.getElementsByClassName("knowledgeInputSentenceTrans")[i].value = currentKnowledgeInputsSentenceTrans[i];
  document.getElementsByClassName("difficultyInputSentenceTrans")[i].value = currentDiffInputsSentenceTrans[i];
  document.getElementsByClassName("questionInputSentenceTrans")[i].value = currentQuestionInputsSentenceTrans[i];
  document.getElementsByClassName("answerInputSentenceTrans")[i].value = currentAnswerInputsSentenceTrans[i];
  }else if(i >= deleteIndex){
    document.getElementsByClassName("yearInputSentenceTrans")[i].value = currentYearInputsSentenceTrans[i+1];
    document.getElementsByClassName("gradeInputSentenceTrans")[i].value = currentGradeInputsSentenceTrans[i+1];
    document.getElementsByClassName("testtypeInputSentenceTrans")[i].value = currentTestTypeInputsSentenceTrans[i+1];
    document.getElementsByClassName("referenceInputSentenceTrans")[i].value = currentReferenceInputsSentenceTrans[i+1];
    document.getElementsByClassName("textbookInputSentenceTrans")[i].value = currentTextBookInputsSentenceTrans[i+1];
    document.getElementsByClassName("lessonInputSentenceTrans")[i].value = currentLessonInputsSentenceTrans[i+1];
    document.getElementsByClassName("knowledgeInputSentenceTrans")[i].value = currentKnowledgeInputsSentenceTrans[i+1];
    document.getElementsByClassName("difficultyInputSentenceTrans")[i].value = currentDiffInputsSentenceTrans[i+1];
    document.getElementsByClassName("questionInputSentenceTrans")[i].value = currentQuestionInputsSentenceTrans[i+1];
    document.getElementsByClassName("answerInputSentenceTrans")[i].value = currentAnswerInputsSentenceTrans[i+1];
  }
  }
}else if (tagSelect == 3) {
  for (var i = 0; i <= finalInputNumber; i++) {
  if(i < deleteIndex){
  document.getElementsByClassName("yearInputInteraction")[i].value = currentYearInputsInteraction[i];
  document.getElementsByClassName("gradeInputInteraction")[i].value = currentGradeInputsInteraction[i];
  document.getElementsByClassName("testtypeInputInteraction")[i].value = currentTestTypeInputsInteraction[i];
  document.getElementsByClassName("referenceInputInteraction")[i].value = currentReferenceInputsInteraction[i];
  document.getElementsByClassName("textbookInputInteraction")[i].value = currentTextBookInputsInteraction[i];
  document.getElementsByClassName("lessonInputInteraction")[i].value = currentLessonInputsInteraction[i];
  document.getElementsByClassName("knowledgeInputInteraction")[i].value = currentKnowledgeInputsInteraction[i];
  document.getElementsByClassName("difficultyInputInteraction")[i].value = currentDiffInputsInteraction[i];
  document.getElementsByClassName("questionInputInteraction")[i].value = currentQuestionInputsInteraction[i];
  document.getElementsByClassName("answerInputInteraction")[i].value = currentAnswerInputsInteraction[i];
  }else if(i >= deleteIndex){
    document.getElementsByClassName("yearInputInteraction")[i].value = currentYearInputsInteraction[i+1];
    document.getElementsByClassName("gradeInputInteraction")[i].value = currentGradeInputsInteraction[i+1];
    document.getElementsByClassName("testtypeInputInteraction")[i].value = currentTestTypeInputsInteraction[i+1];
    document.getElementsByClassName("referenceInputInteraction")[i].value = currentReferenceInputsInteraction[i+1];
    document.getElementsByClassName("textbookInputInteraction")[i].value = currentTextBookInputsInteraction[i+1];
    document.getElementsByClassName("lessonInputInteraction")[i].value = currentLessonInputsInteraction[i+1];
    document.getElementsByClassName("knowledgeInputInteraction")[i].value = currentKnowledgeInputsInteraction[i+1];
    document.getElementsByClassName("difficultyInputInteraction")[i].value = currentDiffInputsInteraction[i+1];
    document.getElementsByClassName("questionInputInteraction")[i].value = currentQuestionInputsInteraction[i+1];
    document.getElementsByClassName("answerInputInteraction")[i].value = currentAnswerInputsInteraction[i+1];
  }
  }
}else if (tagSelect == 4) {
  for (var i = 0; i <= finalInputNumber; i++) {
  if(i < deleteIndex){
    document.getElementsByClassName("yearInputReadingMulti")[i].value = currentYearInputsReadingMulti[i];
    document.getElementsByClassName("gradeInputReadingMulti")[i].value = currentGradeInputsReadingMulti[i];
    document.getElementsByClassName("testtypeInputReadingMulti")[i].value = currentTestTypeInputsReadingMulti[i];
    document.getElementsByClassName("referenceInputReadingMulti")[i].value = currentReferenceInputsReadingMulti[i];
    document.getElementsByClassName("textbookInputReadingMulti")[i].value = currentTextBookInputsReadingMulti[i];
    document.getElementsByClassName("lessonInputReadingMulti")[i].value = currentLessonInputsReadingMulti[i];
      document.getElementsByClassName("knowledgeInputReadingMulti")[i].value = currentKnowledgeInputsReadingMulti[i];
      document.getElementsByClassName("difficultyInputReadingMulti")[i].value = currentDiffInputsReadingMulti[i];
    document.getElementsByClassName("questionInputReadingMulti")[i].value = currentQuestionInputsReadingMulti[i];
    document.getElementsByClassName("answerInputReadingMulti")[i].value = currentAnswerInputsReadingMulti[i];
  }else if(i >= deleteIndex){
    document.getElementsByClassName("yearInputReadingMulti")[i].value = currentYearInputsReadingMulti[i+1];
    document.getElementsByClassName("gradeInputReadingMulti")[i].value = currentGradeInputsReadingMulti[i+1];
    document.getElementsByClassName("testtypeInputReadingMulti")[i].value = currentTestTypeInputsReadingMulti[i+1];
    document.getElementsByClassName("referenceInputReadingMulti")[i].value = currentReferenceInputsReadingMulti[i+1];
    document.getElementsByClassName("textbookInputReadingMulti")[i].value = currentTextBookInputsReadingMulti[i+1];
    document.getElementsByClassName("lessonInputReadingMulti")[i].value = currentLessonInputsReadingMulti[i+1];
      document.getElementsByClassName("knowledgeInputReadingMulti")[i].value = currentKnowledgeInputsReadingMulti[i+1];
      document.getElementsByClassName("difficultyInputReadingMulti")[i].value = currentDiffInputsReadingMulti[i+1];
    document.getElementsByClassName("questionInputReadingMulti")[i].value = currentQuestionInputsReadingMulti[i+1];
    document.getElementsByClassName("answerInputReadingMulti")[i].value = currentAnswerInputsReadingMulti[i+1];
  }
  }


}


 }
