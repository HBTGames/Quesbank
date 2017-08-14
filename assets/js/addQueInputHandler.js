//script for adding inputs
var TotalInput = [0,0,0,0,0,0,0,0,0];
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
  }else if (tagSelect == 5) {
    document.getElementsByName("deleteInputReading")[0].value = TotalInput[tagSelect] + 1;
    defaultInputHtml   =  document.getElementsByName("firstInput")[tagSelect].innerHTML;
 document.getElementsByName("deleteInputReading")[0].value = TotalInput[tagSelect];
  }else if (tagSelect == 6) {
    document.getElementsByName("deleteInputReadingMission")[0].value = TotalInput[tagSelect] + 1;
    defaultInputHtml   =  document.getElementsByName("firstInput")[tagSelect].innerHTML;
 document.getElementsByName("deleteInputReadingMission")[0].value = TotalInput[tagSelect];
  }else if (tagSelect == 7) {
    document.getElementsByName("deleteInputTranslation")[0].value = TotalInput[tagSelect] + 1;
    defaultInputHtml   =  document.getElementsByName("firstInput")[tagSelect].innerHTML;
 document.getElementsByName("deleteInputTranslation")[0].value = TotalInput[tagSelect];
  }else if (tagSelect == 8) {
    document.getElementsByName("deleteInputListening")[0].value = TotalInput[tagSelect] + 1;
    defaultInputHtml   =  document.getElementsByName("firstInput")[tagSelect].innerHTML;
  document.getElementsByName("deleteInputListening")[0].value = TotalInput[tagSelect];
  }

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
//reading
var currentYearInputsReading = [];
var currentGradeInputsReading = [];
var currentTestTypeInputsReading = [];
var currentReferenceInputsReading = [];
var currentTextBookInputsReading= [];
var currentLessonInputsReading =[];
var currentKnowledgeInputsReading = [];
var currentDiffInputsReading = [];
var currentQuestionInputsReading  = [];
var currentAnswerInputsReading = [];
//reading mission
var currentYearInputsReadingMission = [];
var currentGradeInputsReadingMission = [];
var currentTestTypeInputsReadingMission = [];
var currentReferenceInputsReadingMission = [];
var currentTextBookInputsReadingMission= [];
var currentLessonInputsReadingMission =[];
var currentKnowledgeInputsReadingMission= [];
var currentDiffInputsReadingMission = [];
var currentQuestionInputsReadingMission  = [];
var currentAnswerInputsReadingMission = [];
//translation
var currentYearInputsTranslation = [];
var currentGradeInputsTranslation = [];
var currentTestTypeInputsTranslation = [];
var currentReferenceInputsTranslation = [];
var currentTextBookInputsTranslation= [];
var currentLessonInputsTranslation =[];
var currentKnowledgeInputsTranslation= [];
var currentDiffInputsTranslation = [];
var currentQuestionInputsTranslation  = [];
var currentAnswerInputsTranslation = [];
//listening
var currentYearInputsListening = [];
var currentGradeInputsListening  = [];
var currentTestTypeInputsListening  = [];
var currentReferenceInputsListening  = [];
var currentTextBookInputsListening = [];
var currentLessonInputsListening  =[];
var currentKnowledgeInputsListening = [];
var currentDiffInputsListening  = [];
var currentQuestionInputsListening   = [];
var currentAnswerInputsListening  = [];

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

//store reading
currentYearInputsReading= [];
currentGradeInputsReading  = [];
currentTestTypeInputsReading= [];
currentReferenceInputsReading = [];
currentTextBookInputsReading = [];
currentLessonInputsReading =[];
currentKnowledgeInputsReading = [];
currentDiffInputsReading = [];
currentQuestionInputsReading = [];
currentAnswerInputsReading= [];
$('.yearInputReading').each(function ( ) {
currentYearInputsReading.push($(this).val());
});

$('.gradeInputReading').each(function ( ) {
currentGradeInputsReading.push($(this).val());
});

$('.testtypeInputReading').each(function ( ) {
currentTestTypeInputsReading.push($(this).val());
});
$('.referenceInputReading').each(function ( ) {
currentReferenceInputsReading.push($(this).val());
});
$('.textbookInputReading').each(function ( ) {
currentTextBookInputsReading.push($(this).val());
});
$('.lessonInputReading').each(function ( ) {
currentLessonInputsReading.push($(this).val());
});
$('.knowledgeInputReading').each(function ( ) {
currentKnowledgeInputsReading.push($(this).val());
});
$('.difficultyInputReading').each(function ( ) {
currentDiffInputsReading.push($(this).val());
});

$('.questionInputReading').each(function ( ) {
currentQuestionInputsReading.push($(this).val());
});
$('.answerInputReading').each(function ( ) {
currentAnswerInputsReading.push($(this).val());
});

//store reading mission
currentYearInputsReadingMission= [];
currentGradeInputsReadingMission  = [];
currentTestTypeInputsReadingMission= [];
currentReferenceInputsReadingMission = [];
currentTextBookInputsReadingMission = [];
currentLessonInputsReadingMission =[];
currentKnowledgeInputsReadingMission = [];
currentDiffInputsReadingMission = [];
currentQuestionInputsReadingMission = [];
currentAnswerInputsReadingMission = [];
$('.yearInputReadingMission').each(function ( ) {
currentYearInputsReadingMission.push($(this).val());
});

$('.gradeInputReadingMission').each(function ( ) {
currentGradeInputsReadingMission.push($(this).val());
});

$('.testtypeInputReadingMission').each(function ( ) {
currentTestTypeInputsReadingMission.push($(this).val());
});
$('.referenceInputReadingMission').each(function ( ) {
currentReferenceInputsReadingMission.push($(this).val());
});
$('.textbookInputReadingMission').each(function ( ) {
currentTextBookInputsReadingMission.push($(this).val());
});
$('.lessonInputReadingMission').each(function ( ) {
currentLessonInputsReadingMission.push($(this).val());
});
$('.knowledgeInputReadingMission').each(function ( ) {
currentKnowledgeInputsReadingMission.push($(this).val());
});
$('.difficultyInputReadingMission').each(function ( ) {
currentDiffInputsReadingMission.push($(this).val());
});

$('.questionInputReadingMission').each(function ( ) {
currentQuestionInputsReadingMission.push($(this).val());
});
$('.answerInputReadingMission').each(function ( ) {
currentAnswerInputsReadingMission.push($(this).val());
});


//store translation
currentYearInputsTranslation= [];
currentGradeInputsTranslation  = [];
currentTestTypeInputsTranslation= [];
currentReferenceInputsTranslation = [];
currentTextBookInputsTranslation = [];
currentLessonInputsTranslation =[];
currentKnowledgeInputsTranslation= [];
currentDiffInputsTranslation = [];
currentQuestionInputsTranslation = [];
currentAnswerInputsTranslation = [];
$('.yearInputTranslation').each(function ( ) {
currentYearInputsTranslation.push($(this).val());
});

$('.gradeInputTranslation').each(function ( ) {
currentGradeInputsTranslation.push($(this).val());
});

$('.testtypeInputTranslation').each(function ( ) {
currentTestTypeInputsTranslation.push($(this).val());
});
$('.referenceInputTranslation').each(function ( ) {
currentReferenceInputsTranslation.push($(this).val());
});
$('.textbookInputTranslation').each(function ( ) {
currentTextBookInputsTranslation.push($(this).val());
});
$('.lessonInputTranslation').each(function ( ) {
currentLessonInputsTranslation.push($(this).val());
});
$('.knowledgeInputTranslation').each(function ( ) {
currentKnowledgeInputsTranslation.push($(this).val());
});
$('.difficultyInputTranslation').each(function ( ) {
currentDiffInputsTranslation.push($(this).val());
});

$('.questionInputTranslation').each(function ( ) {
currentQuestionInputsTranslation.push($(this).val());
});
$('.answerInputTranslation').each(function ( ) {
currentAnswerInputsTranslation.push($(this).val());
});

//store listening
currentYearInputsListening= [];
currentGradeInputsListening  = [];
currentTestTypeInputsListening= [];
currentReferenceInputsListening = [];
currentTextBookInputsListening = [];
currentLessonInputsListening =[];
currentKnowledgeInputsListening= [];
currentDiffInputsListening = [];
currentQuestionInputsListening = [];
currentAnswerInputsListening = [];
$('.yearInputListening').each(function ( ) {
currentYearInputsListening.push($(this).val());
});

$('.gradeInputListening').each(function ( ) {
currentGradeInputsListening.push($(this).val());
});

$('.testtypeInputListening').each(function ( ) {
currentTestTypeInputsListening.push($(this).val());
});
$('.referenceInputListening').each(function ( ) {
currentReferenceInputsListening.push($(this).val());
});
$('.textbookInputListening').each(function ( ) {
currentTextBookInputsListening.push($(this).val());
});
$('.lessonInputListening').each(function ( ) {
currentLessonInputsListening.push($(this).val());
});
$('.knowledgeInputListening').each(function ( ) {
currentKnowledgeInputsListening.push($(this).val());
});
$('.difficultyInputListening').each(function ( ) {
currentDiffInputsListening.push($(this).val());
});

$('.questionInputListening').each(function ( ) {
currentQuestionInputsListening.push($(this).val());
});
$('.answerInputListening').each(function ( ) {
currentAnswerInputsListening.push($(this).val());
});


}








//add input for different tags
function addInputs(tagSelect){
  setDefaultInputHtml(tagSelect);
  TotalInput[tagSelect] += 1;
console.log("totalinput [tagselect] is");
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
//restore reading
for (var i = 0; i < currentYearInputsReading.length; i++) {
  document.getElementsByClassName("yearInputReading")[i].value = currentYearInputsReading[i];
  document.getElementsByClassName("gradeInputReading")[i].value = currentGradeInputsReading[i];
  document.getElementsByClassName("testtypeInputReading")[i].value = currentTestTypeInputsReading[i];
  document.getElementsByClassName("referenceInputReading")[i].value = currentReferenceInputsReading[i];
  document.getElementsByClassName("textbookInputReading")[i].value = currentTextBookInputsReading[i];
  document.getElementsByClassName("lessonInputReading")[i].value = currentLessonInputsReading[i];
    document.getElementsByClassName("knowledgeInputReading")[i].value = currentKnowledgeInputsReading[i];
    document.getElementsByClassName("difficultyInputReading")[i].value = currentDiffInputsReading[i];
  document.getElementsByClassName("questionInputReading")[i].value = currentQuestionInputsReading[i];
  document.getElementsByClassName("answerInputReading")[i].value = currentAnswerInputsReading[i];
}

//restore reading mission
for (var i = 0; i < currentYearInputsReadingMission.length; i++) {
  document.getElementsByClassName("yearInputReadingMission")[i].value = currentYearInputsReadingMission[i];
  document.getElementsByClassName("gradeInputReadingMission")[i].value = currentGradeInputsReadingMission[i];
  document.getElementsByClassName("testtypeInputReadingMission")[i].value = currentTestTypeInputsReadingMission[i];
  document.getElementsByClassName("referenceInputReadingMission")[i].value = currentReferenceInputsReadingMission[i];
  document.getElementsByClassName("textbookInputReadingMission")[i].value = currentTextBookInputsReadingMission[i];
  document.getElementsByClassName("lessonInputReadingMission")[i].value = currentLessonInputsReadingMission[i];
    document.getElementsByClassName("knowledgeInputReadingMission")[i].value = currentKnowledgeInputsReadingMission[i];
    document.getElementsByClassName("difficultyInputReadingMission")[i].value = currentDiffInputsReadingMission[i];
  document.getElementsByClassName("questionInputReadingMission")[i].value = currentQuestionInputsReadingMission[i];
  document.getElementsByClassName("answerInputReadingMission")[i].value = currentAnswerInputsReadingMission[i];
}

//restore translation
for (var i = 0; i < currentYearInputsTranslation.length; i++) {
  document.getElementsByClassName("yearInputTranslation")[i].value = currentYearInputsTranslation[i];
  document.getElementsByClassName("gradeInputTranslation")[i].value = currentGradeInputsTranslation[i];
  document.getElementsByClassName("testtypeInputTranslation")[i].value = currentTestTypeInputsTranslation[i];
  document.getElementsByClassName("referenceInputTranslation")[i].value = currentReferenceInputsTranslation[i];
  document.getElementsByClassName("textbookInputTranslation")[i].value = currentTextBookInputsTranslation[i];
  document.getElementsByClassName("lessonInputTranslation")[i].value = currentLessonInputsTranslation[i];
    document.getElementsByClassName("knowledgeInputTranslation")[i].value = currentKnowledgeInputsTranslation[i];
    document.getElementsByClassName("difficultyInputTranslation")[i].value = currentDiffInputsTranslation[i];
  document.getElementsByClassName("questionInputTranslation")[i].value = currentQuestionInputsTranslation[i];
  document.getElementsByClassName("answerInputTranslation")[i].value = currentAnswerInputsTranslation[i];
}

//restore listening
for (var i = 0; i < currentYearInputsListening.length; i++) {
  document.getElementsByClassName("yearInputListening")[i].value = currentYearInputsListening[i];
  document.getElementsByClassName("gradeInputListening")[i].value = currentGradeInputsListening[i];
  document.getElementsByClassName("testtypeInputListening")[i].value = currentTestTypeInputsListening[i];
  document.getElementsByClassName("referenceInputListening")[i].value = currentReferenceInputsListening[i];
  document.getElementsByClassName("textbookInputListening")[i].value = currentTextBookInputsListening[i];
  document.getElementsByClassName("lessonInputListening")[i].value = currentLessonInputsListening[i];
    document.getElementsByClassName("knowledgeInputListening")[i].value = currentKnowledgeInputsListening[i];
    document.getElementsByClassName("difficultyInputListening")[i].value = currentDiffInputsListening[i];
  document.getElementsByClassName("questionInputListening")[i].value = currentQuestionInputsListening[i];
  document.getElementsByClassName("answerInputListening")[i].value = currentAnswerInputsListening[i];
}

}


 function deleteInputs(deleteIndex, tagSelect){
   storeCurrentInput();

 if (TotalInput[tagSelect] > 0) {
   TotalInput[tagSelect] -= 1;
 }else{
   console.log("no delete");
   //no delete exit
 return;
 }
console.log("delete index is ");
console.log(deleteIndex);

 finalInputNumber = TotalInput[tagSelect];
 //reset total input;
 TotalInput[tagSelect] = 0;

  document.getElementsByName("inputs")[tagSelect].innerHTML = "<span name='firstInput'>" + document.getElementsByName("firstInput")[tagSelect].innerHTML + "<\span>";
 if (tagSelect == 0) {
   document.getElementsByName("deleteInputFillBlank")[0].value = 0;
 }else if (tagSelect == 1) {
   document.getElementsByName("deleteInputMultiChoice")[0].value = 0;
 }

for (var i = 0; i < finalInputNumber; i++) {
var tempHTML = document.getElementsByName("inputs")[tagSelect].innerHTML;
setDefaultInputHtml(tagSelect);
TotalInput[tagSelect] += 1;
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


}else if (tagSelect == 5) {
  for (var i = 0; i <= finalInputNumber; i++) {
  if(i < deleteIndex){
    document.getElementsByClassName("yearInputReading")[i].value = currentYearInputsReading[i];
    document.getElementsByClassName("gradeInputReading")[i].value = currentGradeInputsReading[i];
    document.getElementsByClassName("testtypeInputReading")[i].value = currentTestTypeInputsReading[i];
    document.getElementsByClassName("referenceInputReading")[i].value = currentReferenceInputsReading[i];
    document.getElementsByClassName("textbookInputReading")[i].value = currentTextBookInputsReading[i];
    document.getElementsByClassName("lessonInputReading")[i].value = currentLessonInputsReading[i];
      document.getElementsByClassName("knowledgeInputReading")[i].value = currentKnowledgeInputsReading[i];
      document.getElementsByClassName("difficultyInputReading")[i].value = currentDiffInputsReading[i];
    document.getElementsByClassName("questionInputReading")[i].value = currentQuestionInputsReading[i];
    document.getElementsByClassName("answerInputReading")[i].value = currentAnswerInputsReading[i];
  }else if(i >= deleteIndex){
    document.getElementsByClassName("yearInputReading")[i].value = currentYearInputsReading[i+1];
    document.getElementsByClassName("gradeInputReading")[i].value = currentGradeInputsReading[i+1];
    document.getElementsByClassName("testtypeInputReading")[i].value = currentTestTypeInputsReading[i+1];
    document.getElementsByClassName("referenceInputReading")[i].value = currentReferenceInputsReading[i+1];
    document.getElementsByClassName("textbookInputReading")[i].value = currentTextBookInputsReading[i+1];
    document.getElementsByClassName("lessonInputReading")[i].value = currentLessonInputsReading[i+1];
      document.getElementsByClassName("knowledgeInputReading")[i].value = currentKnowledgeInputsReading[i+1];
      document.getElementsByClassName("difficultyInputReading")[i].value = currentDiffInputsReading[i+1];
    document.getElementsByClassName("questionInputReading")[i].value = currentQuestionInputsReading[i+1];
    document.getElementsByClassName("answerInputReading")[i].value = currentAnswerInputsReading[i+1];
  }
  }
}else if (tagSelect == 6) {
  for (var i = 0; i <= finalInputNumber; i++) {
  if(i < deleteIndex){
      document.getElementsByClassName("yearInputReadingMission")[i].value = currentYearInputsReadingMission[i];
      document.getElementsByClassName("gradeInputReadingMission")[i].value = currentGradeInputsReadingMission[i];
      document.getElementsByClassName("testtypeInputReadingMission")[i].value = currentTestTypeInputsReadingMission[i];
      document.getElementsByClassName("referenceInputReadingMission")[i].value = currentReferenceInputsReadingMission[i];
      document.getElementsByClassName("textbookInputReadingMission")[i].value = currentTextBookInputsReadingMission[i];
      document.getElementsByClassName("lessonInputReadingMission")[i].value = currentLessonInputsReadingMission[i];
        document.getElementsByClassName("knowledgeInputReadingMission")[i].value = currentKnowledgeInputsReadingMission[i];
        document.getElementsByClassName("difficultyInputReadingMission")[i].value = currentDiffInputsReadingMission[i];
      document.getElementsByClassName("questionInputReadingMission")[i].value = currentQuestionInputsReadingMission[i];
      document.getElementsByClassName("answerInputReadingMission")[i].value = currentAnswerInputsReadingMission[i];
  }else if(i >= deleteIndex){
    document.getElementsByClassName("yearInputReadingMission")[i].value = currentYearInputsReadingMission[i+1];
    document.getElementsByClassName("gradeInputReadingMission")[i].value = currentGradeInputsReadingMission[i+1];
    document.getElementsByClassName("testtypeInputReadingMission")[i].value = currentTestTypeInputsReadingMission[i+1];
    document.getElementsByClassName("referenceInputReadingMission")[i].value = currentReferenceInputsReadingMission[i+1];
    document.getElementsByClassName("textbookInputReadingMission")[i].value = currentTextBookInputsReadingMission[i+1];
    document.getElementsByClassName("lessonInputReadingMission")[i].value = currentLessonInputsReadingMission[i+1];
      document.getElementsByClassName("knowledgeInputReadingMission")[i].value = currentKnowledgeInputsReadingMission[i+1];
      document.getElementsByClassName("difficultyInputReadingMission")[i].value = currentDiffInputsReadingMission[i+1];
    document.getElementsByClassName("questionInputReadingMission")[i].value = currentQuestionInputsReadingMission[i+1];
    document.getElementsByClassName("answerInputReadingMission")[i].value = currentAnswerInputsReadingMission[i+1];
  }
  }

}else if (tagSelect == 7) {
  for (var i = 0; i <= finalInputNumber; i++) {
  if(i < deleteIndex){
    document.getElementsByClassName("yearInputTranslation")[i].value = currentYearInputsTranslation[i];
    document.getElementsByClassName("gradeInputTranslation")[i].value = currentGradeInputsTranslation[i];
    document.getElementsByClassName("testtypeInputTranslation")[i].value = currentTestTypeInputsTranslation[i];
    document.getElementsByClassName("referenceInputTranslation")[i].value = currentReferenceInputsTranslation[i];
    document.getElementsByClassName("textbookInputTranslation")[i].value = currentTextBookInputsTranslation[i];
    document.getElementsByClassName("lessonInputTranslation")[i].value = currentLessonInputsTranslation[i];
      document.getElementsByClassName("knowledgeInputTranslation")[i].value = currentKnowledgeInputsTranslation[i];
      document.getElementsByClassName("difficultyInputTranslation")[i].value = currentDiffInputsTranslation[i];
    document.getElementsByClassName("questionInputTranslation")[i].value = currentQuestionInputsTranslation[i];
    document.getElementsByClassName("answerInputTranslation")[i].value = currentAnswerInputsTranslation[i];
  }else if(i >= deleteIndex){
    document.getElementsByClassName("yearInputTranslation")[i].value = currentYearInputsTranslation[i+1];
    document.getElementsByClassName("gradeInputTranslation")[i].value = currentGradeInputsTranslation[i+1];
    document.getElementsByClassName("testtypeInputTranslation")[i].value = currentTestTypeInputsTranslation[i+1];
    document.getElementsByClassName("referenceInputTranslation")[i].value = currentReferenceInputsTranslation[i+1];
    document.getElementsByClassName("textbookInputTranslation")[i].value = currentTextBookInputsTranslation[i+1];
    document.getElementsByClassName("lessonInputTranslation")[i].value = currentLessonInputsTranslation[i+1];
      document.getElementsByClassName("knowledgeInputTranslation")[i].value = currentKnowledgeInputsTranslation[i+1];
      document.getElementsByClassName("difficultyInputTranslation")[i].value = currentDiffInputsTranslation[i+1];
    document.getElementsByClassName("questionInputTranslation")[i].value = currentQuestionInputsTranslation[i+1];
    document.getElementsByClassName("answerInputTranslation")[i].value = currentAnswerInputsTranslation[i+1];
  }
  }
}else if (tagSelect == 8) {
  for (var i = 0; i <= finalInputNumber; i++) {
  if(i < deleteIndex){
    document.getElementsByClassName("yearInputListening")[i].value = currentYearInputsListening[i];
    document.getElementsByClassName("gradeInputListening")[i].value = currentGradeInputsListening[i];
    document.getElementsByClassName("testtypeInputListening")[i].value = currentTestTypeInputsListening[i];
    document.getElementsByClassName("referenceInputListening")[i].value = currentReferenceInputsListening[i];
    document.getElementsByClassName("textbookInputListening")[i].value = currentTextBookInputsListening[i];
    document.getElementsByClassName("lessonInputListening")[i].value = currentLessonInputsListening[i];
      document.getElementsByClassName("knowledgeInputListening")[i].value = currentKnowledgeInputsListening[i];
      document.getElementsByClassName("difficultyInputListening")[i].value = currentDiffInputsListening[i];
    document.getElementsByClassName("questionInputListening")[i].value = currentQuestionInputsListening[i];
    document.getElementsByClassName("answerInputListening")[i].value = currentAnswerInputsListening[i];
  }else if(i >= deleteIndex){
    document.getElementsByClassName("yearInputListening")[i].value = currentYearInputsListening[i+1];
    document.getElementsByClassName("gradeInputListening")[i].value = currentGradeInputsListening[i+1];
    document.getElementsByClassName("testtypeInputListening")[i].value = currentTestTypeInputsListening[i+1];
    document.getElementsByClassName("referenceInputListening")[i].value = currentReferenceInputsListening[i+1];
    document.getElementsByClassName("textbookInputListening")[i].value = currentTextBookInputsListening[i+1];
    document.getElementsByClassName("lessonInputListening")[i].value = currentLessonInputsListening[i+1];
      document.getElementsByClassName("knowledgeInputListening")[i].value = currentKnowledgeInputsListening[i+1];
      document.getElementsByClassName("difficultyInputListening")[i].value = currentDiffInputsListening[i+1];
    document.getElementsByClassName("questionInputListening")[i].value = currentQuestionInputsListening[i+1];
    document.getElementsByClassName("answerInputListening")[i].value = currentAnswerInputsListening[i+1];
  }
  }

}

console.log("tagselected input number is");
console.log(TotalInput[tagSelect]);


 }
