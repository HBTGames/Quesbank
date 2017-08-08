var language;
function loadLanguage(){
  language = getLanguage();
  console.log(language);
  if(language != 'en' && language != "zh"){
    language = 'en';
  }
  console.log(language);
  applyLanguage();
}


function saveLanguage(language) {
eraseCookie("language");
createCookie("language",language,180);
}

function getLanguage() {
return   readCookie("language");
}

var arrLang = {
  'en' : {
    'home' :  'Home',
    'manage' : 'Manage',
    'contact' : 'Contact',
    'langEnglish' : 'English',
    'langChinese' : '中文',
    'questionHeader' : 'Question',
    'answerHeader' : 'Answer',
    'dateHeader' : 'Date',
    'difficultyHeader' : 'Difficulty',
    'textbookHeader'  : 'Textbook',
    'manipulationHeader' : 'Manipulation',
    'editQuestionLabel' : 'Edit Question',
    'hard' : 'Hard',
    'medium' : 'Medium',
    'easy' : 'Easy',
    'languageText' : 'Language',
    'deleteQuestion' : 'Delete Question',
    'deleteRemindMessage' : 'Are you sure to delete?',
    'closeButton' : 'Close',
    'deleteButton' : 'Delete',
    'saveButton' : 'Save Changes',
    'airEnglish' : 'Air English 2015',
    'editButton' : 'Edit',
    'email' : 'Email Us',
     'productDescription' : 'You can put new questions to the bank, or generate test paper through the website.',
     'addNewQuestion' :  'Add New Questions',
    'generateTestPaper' : 'Generate Test Paper',
    'yearHeader' : 'Year',
    'gradeHeader' : 'Grade',
    'testtypeHeader' : 'Testtype',
    'referenceHeader' : 'Reference',
    'lessonHeader' : 'Lesson',
    'knowledgeHeader' : 'Knowledge'
  },
  'zh' : {
    'home' : '主页',
   'manage': '管理',
   'contact': '联系我们',
   'langEnglish' : 'English',
   'langChinese' : '中文',
   'questionHeader' : ' 问题',
   'answerHeader' : '答案',
   'dateHeader' : '日期',
   'difficultyHeader' : '难度',
   'textbookHeader'  : '教材',
   'manipulationHeader' : '操作',
   'editQuestionLabel' : '编辑问题',
   'hard' : '困难',
   'medium' : '适中',
   'easy' : '简单',
       'languageText' : '语言',
       'deleteQuestion' : '删除问题',
      'deleteRemindMessage' : '确定删除吗?',
      'closeButton' : '取消',
      'deleteButton' : '删除',
      'saveButton' : '保存',
      'airEnglish' : '爱尔教育机构 2015',
      'editButton' : '编辑',
      'email' : '通过电子邮箱联系我们',
       'productDescription' : '您可以添加新题进入题库或者生成一套试题。',
       'addNewQuestion' :  '添加新问题',
      'generateTestPaper' : '生成试题',
      'yearHeader' : '年份',
      'gradeHeader' : '年级',
      'testtypeHeader' : '考试类型',
      'referenceHeader' : '出处',
      'lessonHeader' : '课数',
      'knowledgeHeader' : '知识点'
  }
};

function  applyLanguage(){
//change select box
if(language == "en"){
document.getElementById("changeLang").selectedIndex = 0 ;
}else{
document.getElementById("changeLang").selectedIndex = 1;
}
$('.lang').each(function ( ) {
$(this).text(arrLang[language][$(this).attr('key')]);
});
//change search by question & search by text placeholder in manage.php
if(document.getElementsByName('searchByQuestion')[0] != undefined &&   document.getElementsByName('searchByTextbook')[0]!=undefined){
  if(language == 'en'){
    document.getElementsByName('searchByQuestion')[0].placeholder = 'Search by Question';
    document.getElementsByName('searchByTextbook')[0].placeholder = 'Search by Textbook';
  }else{
    document.getElementsByName('searchByQuestion')[0].placeholder = '根据问题搜索';
    document.getElementsByName('searchByTextbook')[0].placeholder = '根据教材搜索';
  }
}
//change question answer and textbook placeholder in manage.php and addques.php
if( document.getElementsByName('year')[0]!=undefined ){
  if(language == 'en'){
    document.getElementsByName('year')[0].placeholder = 'Year';
    document.getElementsByName('question')[0].placeholder = 'Question';
    document.getElementsByName('answer')[0].placeholder = 'Answer';
      document.getElementsByName('textbook')[0].placeholder = 'Textbook';
  }else{
    document.getElementsByName('year')[0].placeholder = '年份';
    document.getElementsByName('question')[0].placeholder = '问题';
   document.getElementsByName('answer')[0].placeholder = '答案';
      document.getElementsByName('textbook')[0].placeholder = '教材';
  }
}
//change placeholders in addques.php


if( document.getElementsByName('question[]')[0]!=undefined  ){
  $('.yearInput').each(function ( ) {
    if(language == 'en'){
    $(this).attr('placeholder', 'Year');
    }else{
        $(this).attr('placeholder', '年份');
    }
  });
  $('.gradeInput').each(function ( ) {
    if(language == 'en'){
    $(this).attr('placeholder', 'Grade');
    }else{
        $(this).attr('placeholder', '年级');
    }
  });
  $('.testtypeInput').each(function ( ) {
    if(language == 'en'){
    $(this).attr('placeholder', 'Test Type');
    }else{
        $(this).attr('placeholder', '考试类型');
    }
  });
  $('.referenceInput').each(function ( ) {
    if(language == 'en'){
    $(this).attr('placeholder', 'Reference');
    }else{
        $(this).attr('placeholder', '出处');
    }
  });

    $('.textbookInput').each(function ( ) {
      if(language == 'en'){
      $(this).attr('placeholder', 'Textbook');
      }else{
          $(this).attr('placeholder', '教材');
      }
    });

  $('.lessonInput').each(function ( ) {
    if(language == 'en'){
    $(this).attr('placeholder', 'Lesson');
    }else{
        $(this).attr('placeholder', '课数');
    }
  });

  $('.knowledgeInput').each(function ( ) {
    if(language == 'en'){
    $(this).attr('placeholder', 'Knowledge');
    }else{
        $(this).attr('placeholder', '知识点');
    }
  });





  $('.questionInput').each(function ( ) {
    if(language == 'en'){
    $(this).attr('placeholder', 'Question');
    }else{
        $(this).attr('placeholder', '问题');
    }
  });

  $('.answerInput').each(function ( ) {
    if(language == 'en'){
    $(this).attr('placeholder', 'Answer');
    }else{
        $(this).attr('placeholder', '答案');
    }
  });


}
//add question button in addques.php
if(document.getElementsByName('add')[0]!=undefined){
  if(language == 'en'){
    document.getElementsByName('add')[0].value = "Submit Question"
  }else{
  document.getElementsByName('add')[0].value = "提交问题"
  }

}
//multiple choice submit
if(document.getElementsByName('submitMultiChoice')[0]!=undefined){
  if(language == 'en'){
    document.getElementsByName('submitMultiChoice')[0].value = "Submit Question"
  }else{
  document.getElementsByName('submitMultiChoice')[0].value = "提交问题"
  }

}

//change demonstration in contact.html
if(document.getElementsByName("demonstration")[0]!=undefined){
  if(language == 'en'){
    document.getElementsByName("demonstration")[0].innerHTML = "Constantly strive for perfection. <br>  --Producer: HBT TEAM";
  }else{
      document.getElementsByName("demonstration")[0].innerHTML = "不断追求完美。 <br>  --制作团队: HBT TEAM";
  }
}
//difficulty td
//var difficulty_array = document.getElementsByName('difficultyTd');
$('.difficultyTd').each(function ( ) {
  var current_text = $(this).text();
  if(language == 'zh'){
    if(current_text == "Easy"){
     $(this).text("简单");
  }else if(current_text == "Medium"){
     $(this).text("适中");
  }else if(current_text == "Hard"){
    $(this).text("困难");
  }
}else if(language == 'en'){
  if(current_text == "简单"){
        $(this).text("Easy");
}else if(current_text == "适中"){
    $(this).text("Medium");
}else if(current_text == "困难"){
  $(this).text("Hard");
}
}
  console.log($(this).text());
});
}

function languageChange(){
  var selected_value = document.getElementById('changeLang').value;
  language = selected_value;
  saveLanguage(language);
  console.log(language);
  applyLanguage();
}

function getUpdateText(){
  if(language == 'en'){
    return 'Updated data successfully!'
  }else {
   return '问题已成功上传!'
  }
}
