<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Template &middot; Bootstrap</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- Le styles -->
      <link href="../assets/css/bootstrap.css" rel="stylesheet">
      <link href="../assets/css/quesbankstyle.css" rel="stylesheet">
      <style type="text/css">
         body {
         padding-top: 20px;
         padding-bottom: 40px;
         }
         /* Custom container */
         .container-narrow {
         margin: 0 auto;
         max-width: 90%;
         }
         .container-narrow > hr {
         margin: 30px 0;
         }
         /* Main marketing message and sign up button */
         .jumbotron {
         margin: 60px 0;
         text-align: center;
         }
         .jumbotron h1 {
         font-size: 72px;
         line-height: 1;
         }
         .jumbotron .btn {
         font-size: 21px;
         padding: 14px 24px;
         }
         /* Supporting marketing content */
         .marketing {
         margin: 60px 0;
         }
         .marketing p + h4 {
         margin-top: 28px;
         }
      </style>
      <link href="../assets/css/bootstrap-responsive.css" rel="stylesheet">
      <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
      <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
      <![endif]-->
      <!-- Fav and touch icons -->
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
      <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
      <link rel="shortcut icon" href="../assets/ico/favicon.png">
   </head>
   <body onload="loadLanguage() , setDefaultInputHtml()">
      <div class="container-narrow">
         <div class="masthead">
            <ul class="nav nav-pills pull-right">
               <li class="active"><a href="index.php" class="lang" key="home">Home</a></li>
               <li><a href="manage.php" class="lang" key="manage">Manage</a></li>
               <li><a href="contact.html" class="lang" key="contact">Contact</a></li>
            </ul>
            <h3 class="muted">QuesBank</h3>
         </div>
         <hr>
         <div>
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
               <li role="presentation" class="active"><a href="#fill_blank" aria-controls="fillblank" role="tab" data-toggle="tab">Fillblank</a></li>
               <li role="presentation"><a href="#multichoice" aria-controls="multichoice" role="tab" data-toggle="tab">Multichoice</a></li>
               <li role="presentation"><a href="#sentence" aria-controls="sentence" role="tab" data-toggle="tab">Sentencetrans</a></li>
               <li role="presentation"><a href="#interaction" aria-controls="interaction" role="tab" data-toggle="tab">Interaction</a></li>
               <li role="presentation"><a href="#readingmu" aria-controls="readingmu" role="tab" data-toggle="tab">Readingmulti</a></li>
               <li role="presentation"><a href="#reading" aria-controls="reading" role="tab" data-toggle="tab">Reading</a></li>
               <li role="presentation"><a href="#readingmi" aria-controls="readingmi" role="tab" data-toggle="tab">Readingmission</a></li>
               <li role="presentation"><a href="#translation" aria-controls="translation" role="tab" data-toggle="tab">Translation</a></li>
               <li role="presentation"><a href="#listening" aria-controls="listening" role="tab" data-toggle="tab">Listening</a></li>
               <li role="presentation"><a href="#writing" aria-controls="writing" role="tab" data-toggle="tab">Writing</a></li>
               <li role="presentation"><a href="#others" aria-controls="others" role="tab" data-toggle="tab">Others</a></li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
               <div role="tabpanel" class="tab-pane fade in active" id="fill_blank">
                  <div id="addfillblank">
                     <div  class="addAquestion">
                        <?php
                           $db = mysql_connect('localhost','root','password')
                            or die('Error connecting to MySQL server.');
                            //$pStatement = $db->getConnection()->query("SET CHARACTER SET utf8");
                           
                           ?>
                        <form method="post">
                           <span name="inputs" id="inputs">
                              <h3>References</h3>
                              <hr>
                              <span>Year</span>
                              <input id="year" class="yearInput" name="year[]" type="text" placeholder="Year" >
                              <span>Grade</span>
                              <input id="grade" class="gradeInput" name="grade[]" type="text" placeholder="Grade" >
                              <span>Testtype</span>
                              <!-- <input id="testtype" class="testtypeInput" name="testtype[]" type="text" placeholder="Testtype" > -->
                              <select id="testtype" class="testtypeInput" name="testtype[]" type="text" placeholder="Testtype">
                                 <?php
                                    $db = mysql_connect('localhost','root','password')
                                                      or die('Error connecting to MySQL server.');
                                                        @mysql_select_db("tags", $db);
                                                      $sql = "SELECT * FROM tags.testtypetags";
                                                      $result = mysql_query($sql);
                                                           while( $row = mysql_fetch_array($result))
                                                           {
                                                           $testtype = $row['testtype'];
                                                           ?>
                                 <option class="lang" key="<?php echo "$testtype" ?>"><?php echo "$testtype" ?></option>
                                 <?php 
                                    }
                                     ?>
                              </select>
                              <span>Reference</span>
                              <input id="reference" class="referenceInput" name="reference[]" type="text" placeholder="Reference" ><br>
                              <!--  <input id="textbook" class="textbookInput" name="textbook[]" type="text" placeholder="Textbook" > -->
                              <span>Textbook</span>
                              <select id="textbook" class="textbookInput" name="textbook[]" type="text" placeholder="Textbook">
                                 <?php
                                    $db = mysql_connect('localhost','root','password')
                                                      or die('Error connecting to MySQL server.');
                                                        @mysql_select_db("tags", $db);
                                                      $sql = "SELECT * FROM tags.textbooktags";
                                                      $result = mysql_query($sql);
                                                           while( $row = mysql_fetch_array($result))
                                                           {
                                                           $textbook = $row['textbook'];
                                                           ?>
                                 <option class="lang" key="<?php echo "$textbook" ?>"><?php echo "$textbook" ?></option>
                                 <?php 
                                    }
                                     ?>
                              </select>
                              <span>Lesson</span>
                              <input id="lesson" class="lessonInput" name="lesson[]" type="text" placeholder="Lesson" >
                              <!-- <input id="knowledge" class="knowledgeInput" name="knowledge[]" type="text" placeholder="Knowledge" > -->
                              <span>Knowledge</span>
                              <select id="knowledge" class="knowledgeInput" name="knowledge[]" type="text" placeholder="Knowledge" >
                                 <?php
                                    $db = mysql_connect('localhost','root','password')
                                                      or die('Error connecting to MySQL server.');
                                                        @mysql_select_db("tags", $db);
                                                      $sql = "SELECT * FROM tags.knowledgetags";
                                                      $result = mysql_query($sql);
                                                           while( $row = mysql_fetch_array($result))
                                                           {
                                                           $knowledge = $row['knowledge'];
                                                           ?>
                                 <option class="lang" key="<?php echo "$knowledge" ?>"><?php echo "$knowledge" ?></option>
                                 <?php 
                                    }
                                     ?>
                              </select>
                              <span>Difficulty</span>
                              <select id="difficulty" class="difficultyInput" name="difficulty[]" type="text" placeholder="difficulty">
                                 <option class="lang" key="hard">Hard</option>
                                 <option class="lang" key="medium">Medium</option>
                                 <option class="lang" key="easy">Easy</option>
                              </select>
                              <h3>Q & A </h3>
                              <hr>
                              <textarea rows="4" id="question" class="questionInput" name="question[]" type="text" placeholder="Question" ></textarea>
                              <textarea rows="4" id="answer" class="answerInput" name="answer[]" type="text" placeholder="Answer" ></textarea>
                              <br>
                              <hr>
                           </span>
                     </div>
                     <input name="add" type="submit" id="add" value="Submit Question" >
                     <br>
                     </form>
                     <button type="button" name="addInput" onclick="addInputs(0)">Add Input</button>
                     <?php if ( $_REQUEST['add'] ){
                        mysql_select_db("test", $db);
                        $years = $_POST['year'];
                        $grades = $_POST['grade'];
                        $testtypes = $_POST['testtype'];
                        $references = $_POST['reference'];
                        $textbooks = $_POST['textbook'];
                        $lessons = $_POST['lesson'];
                        $knowledges = $_POST['knowledge'];
                        $difficulties = $_POST['difficulty'];
                        $questions = $_POST['question'];
                        $answers = $_POST['answer'];
                        $dates = $_POST['date'];
                           $dom = new DOMDocument();
                        
                           for ($i=0, $count = count($questions); $i <$count ; $i++) {
                             # code...
                             $year = $years[$i];
                             $grade = $grades[$i];
                             $testtype = $testtypes[$i];
                             $reference = $references[$i];
                             $textbook = $textbooks[$i];
                             $lesson = $lessons[$i];
                             $knowledge = $knowledges[$i];
                             $difficulty = $difficulties[$i];
                             $question = $questions[$i];
                             $answer =  $answers[$i];
                              //echo $question;
                            //     echo $answer;
                            //     echo  $book;
                            //     echo $diff;
                        if ($difficulty == '困难') {
                        $difficulty = 'Hard';
                        }else if($difficulty == '简单'){
                        $difficulty = 'Easy';
                        }else if($difficulty == '适中'){
                        $difficulty = 'Medium';
                        }
                        $date = date('Y-m-d');
                        $yearString =  mysql_real_escape_string($year);
                        $gradeString = mysql_real_escape_string($grade);
                        $testtypeString = mysql_real_escape_string($testtype);
                        $referenceString = mysql_real_escape_string($reference);
                        $textbookString =  mysql_real_escape_string($textbook);
                        $lessonString =  mysql_real_escape_string($lesson);
                        $knowledgeString = mysql_real_escape_string($knowledge);
                        $diffcultyString = mysql_real_escape_string($difficulty);
                        $questionString = mysql_real_escape_string($question);
                        $answerString = mysql_real_escape_string($answer);
                        
                        
                        
                             $sql = "INSERT INTO test.fill_blank
                                    (year, grade, testtype, reference, textbook, lesson, knowledge, difficulty, question, answer, date)
                                    VALUES('$yearString','$gradeString','$testtypeString','$referenceString','$textbookString','$lessonString','$knowledgeString','$diffcultyString','$questionString','$answerString', '$date')";
                                       $retval = mysql_query( $sql, $db);
                           }
                        
                        if(! $retval)
                        {
                          die('Could not update data: ' . mysql_error());
                        }
                        echo '<script type="text/javascript">';
                        echo  'var update_text= "Data updated successfully!" ;   ';
                        echo 'alert(update_text)  ;' ;
                        echo ' </script> ';
                        
                        mysql_close($db);
                        }
                        ?>
                  </div>
               </div>
               <div role="tabpanel" class="tab-pane fade in" id="multichoice">
                  <div id="addfillblank">
                     <?php
                        $db = mysql_connect('localhost','root','password')
                         or die('Error connecting to MySQL server.');
                         //$pStatement = $db->getConnection()->query("SET CHARACTER SET utf8");
                        
                        ?>
                     <form method="post">
                        <span name="inputs">
                           <input id="year" class="yearInput" name="year[]" type="text" placeholder="Year" >
                           <input id="grade" class="gradeInput" name="grade[]" type="text" placeholder="Grade" >
                           <!-- <input id="testtype" class="testtypeInput" name="testtype[]" type="text" placeholder="Testtype" > -->
                           <select id="testtype" class="testtypeInput" name="testtype[]" type="text" placeholder="Testtype">
                              <?php
                                 $db = mysql_connect('localhost','root','password')
                                                   or die('Error connecting to MySQL server.');
                                                     @mysql_select_db("tags", $db);
                                                   $sql = "SELECT * FROM tags.testtypetags";
                                                   $result = mysql_query($sql);
                                                        while( $row = mysql_fetch_array($result))
                                                        {
                                                        $testtype = $row['testtype'];
                                                        ?>
                              <option class="lang" key="<?php echo "$testtype" ?>"><?php echo "$testtype" ?></option>
                              <?php 
                                 }
                                  ?>
                           </select>
                           <input id="reference" class="referenceInput" name="reference[]" type="text" placeholder="Reference" >
                           <!-- <input id="textbook" class="textbookInput" name="textbook[]" type="text" placeholder="Textbook" > -->
                           <select id="textbook" class="textbookInput" name="textbook[]" type="text" placeholder="Textbook">
                              <?php
                                 $db = mysql_connect('localhost','root','password')
                                                   or die('Error connecting to MySQL server.');
                                                     @mysql_select_db("tags", $db);
                                                   $sql = "SELECT * FROM tags.textbooktags";
                                                   $result = mysql_query($sql);
                                                        while( $row = mysql_fetch_array($result))
                                                        {
                                                        $textbook = $row['textbook'];
                                                        ?>
                              <option class="lang" key="<?php echo "$textbook" ?>"><?php echo "$textbook" ?></option>
                              <?php 
                                 }
                                  ?>
                           </select>
                           <input id="lesson" class="lessonInput" name="lesson[]" type="text" placeholder="Lesson" >
                           <!-- <input id="knowledge" class="knowledgeInput" name="knowledge[]" type="text" placeholder="Knowledge" > -->
                           <select id="knowledge" class="knowledgeInput" name="knowledge[]" type="text" placeholder="Knowledge" >
                              <?php
                                 $db = mysql_connect('localhost','root','password')
                                                   or die('Error connecting to MySQL server.');
                                                     @mysql_select_db("tags", $db);
                                                   $sql = "SELECT * FROM tags.knowledgetags";
                                                   $result = mysql_query($sql);
                                                        while( $row = mysql_fetch_array($result))
                                                        {
                                                        $textbook = $row['knowledge'];
                                                        ?>
                              <option class="lang" key="<?php echo "$knowledge" ?>"><?php echo "$knowledge" ?></option>
                              <?php 
                                 }
                                  ?>
                           </select>
                           <select id="difficulty" class="difficultyInput" name="difficulty[]" type="text" placeholder="difficulty">
                              <option class="lang" key="hard">Hard</option>
                              <option class="lang" key="medium">Medium</option>
                              <option class="lang" key="easy">Easy</option>
                           </select>
                           <input id="question" class="questionInput" name="question[]" type="text" placeholder="Question" >
                           <input id="answer" class="answerInput" name="answer[]" type="text" placeholder="Answer" >
                           <br>
                        </span>
                        <input name="submitMultiChoice" type="submit" id="submitMultiChoice" value="Submit Question" >
                        <br>
                     </form>
                     <button type="button" name="addInput" onclick="addInputs(1)">Add Input</button>
                     <?php if ( $_REQUEST['submitMultiChoice'] ){
                        mysql_select_db("test", $db);
                        $years = $_POST['year'];
                        $grades = $_POST['grade'];
                        $testtypes = $_POST['testtype'];
                        $references = $_POST['reference'];
                        $textbooks = $_POST['textbook'];
                        $lessons = $_POST['lesson'];
                        $knowledges = $_POST['knowledge'];
                        $difficulties = $_POST['difficulty'];
                        $questions = $_POST['question'];
                        $answers = $_POST['answer'];
                        $dates = $_POST['date'];
                           $dom = new DOMDocument();
                        
                           for ($i=0, $count = count($questions); $i <$count ; $i++) {
                             # code...
                             $year = $years[$i];
                             $grade = $grades[$i];
                             $testtype = $testtypes[$i];
                             $reference = $references[$i];
                             $textbook = $textbooks[$i];
                             $lesson = $lessons[$i];
                             $knowledge = $knowledges[$i];
                             $difficulty = $difficulties[$i];
                             $question = $questions[$i];
                             $answer =  $answers[$i];
                              //echo $question;
                            //     echo $answer;
                            //     echo  $book;
                            //     echo $diff;
                        if ($difficulty == '困难') {
                        $difficulty = 'Hard';
                        }else if($difficulty == '简单'){
                        $difficulty = 'Easy';
                        }else if($difficulty == '适中'){
                        $difficulty = 'Medium';
                        }
                        $date = date('Y-m-d');
                        $yearString =  mysql_real_escape_string($year);
                        $gradeString = mysql_real_escape_string($grade);
                        $testtypeString = mysql_real_escape_string($testtype);
                        $referenceString = mysql_real_escape_string($reference);
                        $textbookString =  mysql_real_escape_string($textbook);
                        $lessonString =  mysql_real_escape_string($lesson);
                        $knowledgeString = mysql_real_escape_string($knowledge);
                        $diffcultyString = mysql_real_escape_string($difficulty);
                        $questionString = mysql_real_escape_string($question);
                        $answerString = mysql_real_escape_string($answer);
                        
                        
                        
                             $sql = "INSERT INTO test.multi_choice
                                    (year, grade, testtype, reference, textbook, lesson, knowledge, difficulty, question, answer, date)
                                    VALUES('$yearString','$gradeString','$testtypeString','$referenceString','$textbookString','$lessonString','$knowledgeString','$diffcultyString','$questionString','$answerString', '$date')";
                                       $retval = mysql_query( $sql, $db);
                           }
                        
                        if(! $retval)
                        {
                          die('Could not update data: ' . mysql_error());
                        }
                        echo '<script type="text/javascript">';
                        echo  'var update_text= "Data updated successfully!" ;   ';
                        echo 'alert(update_text)  ;' ;
                        echo ' </script> ';
                        
                        mysql_close($db);
                        }
                        ?>
                  </div>
               </div>
               <div role="tabpanel" class="tab-pane fade in" id="sentence">...</div>
               <div role="tabpanel" class="tab-pane fade in" id="interaction">...</div>
               <div role="tabpanel" class="tab-pane fade in active" id="readingmu">...</div>
               <div role="tabpanel" class="tab-pane fade in" id="reading">...</div>
               <div role="tabpanel" class="tab-pane fade in" id="readingmi">...</div>
               <div role="tabpanel" class="tab-pane fade in" id="translation">...</div>
               <div role="tabpanel" class="tab-pane fade in active" id="listening">...</div>
               <div role="tabpanel" class="tab-pane fade in" id="writing">...</div>
               <div role="tabpanel" class="tab-pane fade in" id="others">...</div>
            </div>
         </div>
         <hr>
         <hr>
         <div class="footer">
            <p>
               &copy;
               <span class="lang" key="airEnglish">Air English 2015</span>
               &ensp;
               &ensp;
               &ensp;
               &ensp;
               &ensp;
               &ensp;
               <span class="lang" key="languageText"> Language:</span>
               <select id="changeLang" name="changeLang" onchange="languageChange();">
                  <option  class="lang" value="en" key="langEnglish" >English</option>
                  <option class="lang" value="zh" key="langChinese">中文</option>
               </select>
            </p>
         </div>
      </div>
      <!-- Le javascript
         ================================================== -->
      <!-- Placed at the end of the document so the pages load faster -->
      <script type="text/javascript" src="../assets/js/languageHandler.js">  </script>
      <script type="text/javascript" src="../assets/js/cookieHandler.js"></script>
      <script src="../assets/js/jquery.js"></script>
      <script src="../assets/js/bootstrap-transition.js"></script>
      <script src="../assets/js/bootstrap-alert.js"></script>
      <script src="../assets/js/bootstrap-modal.js"></script>
      <script src="../assets/js/bootstrap-dropdown.js"></script>
      <script src="../assets/js/bootstrap-scrollspy.js"></script>
      <script src="../assets/js/bootstrap-tab.js"></script>
      <script src="../assets/js/bootstrap-tooltip.js"></script>
      <script src="../assets/js/bootstrap-popover.js"></script>
      <script src="../assets/js/bootstrap-button.js"></script>
      <script src="../assets/js/bootstrap-collapse.js"></script>
      <script src="../assets/js/bootstrap-carousel.js"></script>
      <script src="../assets/js/bootstrap-typeahead.js"></script>
      <script type="text/javascript">
         //script for adding inputs
         var defaultInputNumber = 1;
         var defaultInputHtml;
         var tagSelect;
         
         function setDefaultInputHtml(){
             defaultInputHtml   =  document.getElementsByName("inputs")[0].innerHTML;
         }
         
         function addInputs(tagSelect){
           var currentYearInputs = [];
           var currentGradeInputs  = [];
           var currentTestTypeInputs = [];
           var currentReferenceInputs = [];
           var currentTextBookInputs = [];
           var currentLessonInputs =[];
           var currentKnowledgeInputs = [];
           var currentDiffInputs = [];
           var currentQuestionInputs = [];
           var currentAnswerInputs = [];
         
             var currentFormContent =  document.getElementsByName("inputs")[tagSelect].innerHTML;
         
             $('.yearInput').each(function ( ) {
           currentYearInputs.push($(this).val());
             });
         
             $('.gradeInput').each(function ( ) {
         currentGradeInputs.push($(this).val());
             });
         
             $('.testtypeInput').each(function ( ) {
         currentTestTypeInputs.push($(this).val());
             });
             $('.referenceInput').each(function ( ) {
         currentReferenceInputs.push($(this).val());
             });
             $('.textbookInput').each(function ( ) {
         currentTextBookInputs.push($(this).val());
             });
             $('.lessonInput').each(function ( ) {
         currentLessonInputs.push($(this).val());
             });
             $('.knowledgeInput').each(function ( ) {
         currentKnowledgeInputs.push($(this).val());
             });
             $('.difficultyInput').each(function ( ) {
         currentDiffInputs.push($(this).val());
             });
         
             $('.questionInput').each(function ( ) {
         currentQuestionInputs.push($(this).val());
             });
             $('.answerInput').each(function ( ) {
         currentAnswerInputs.push($(this).val());
             });
         
         document.getElementsByName("inputs")[tagSelect].innerHTML = currentFormContent + defaultInputHtml;
         for (var i = 0; i < currentQuestionInputs.length; i++) {
           document.getElementsByClassName("yearInput")[i].value = currentYearInputs[i];
           document.getElementsByClassName("gradeInput")[i].value = currentGradeInputs[i];
           document.getElementsByClassName("testtypeInput")[i].value = currentTestTypeInputs[i];
           document.getElementsByClassName("referenceInput")[i].value = currentReferenceInputs[i];
           document.getElementsByClassName("textbookInput")[i].value = currentTextBookInputs[i];
           document.getElementsByClassName("lessonInput")[i].value = currentLessonInputs[i];
             document.getElementsByClassName("knowledgeInput")[i].value = currentKnowledgeInputs[i];
             document.getElementsByClassName("difficultyInput")[i].value = currentDiffInputs[i];
           document.getElementsByClassName("questionInput")[i].value = currentQuestionInputs[i];
           document.getElementsByClassName("answerInput")[i].value = currentAnswerInputs[i];
         
         }
         
           //currentFormContent  = currentFormContent -  document.getElementsByName("add").innerHTML;
         
         defaultInputNumber += 1;
         }
         
      </script>
   </body>
</html>