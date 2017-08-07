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
    <style type="text/css">
      body {
        padding-top: 20px;
        padding-bottom: 40px;
      }

      /* Custom container */
      .container-narrow {
        margin: 0 auto;
        max-width: 700px;
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

  <body onload="loadLanguage()">
  <?php
         $db = mysql_connect('localhost','root','password')
          or die('Error connecting to MySQL server.');
          //$pStatement = $db->getConnection()->query("SET CHARACTER SET utf8");

         ?>
    <div class="container-narrow">

      <div class="masthead">
        <ul class="nav nav-pills pull-right">
          <li class="active"><a href="index.html" class="lang" key="home">Home</a></li>
          <li><a href="manage.php" class="lang" key="manage">Manage</a></li>
          <li><a href="contact.html" class="lang" key="contact">Contact</a></li>
        </ul>
        <h3 class="muted">QuesBank</h3>
      </div>

      <hr>
      <div>
      <form method="post">
        <span name="inputs">
      <input id="questions" class="questionInput" name="questions[]" type="text" placeholder="Question" >
      <input id="answers" class="answerInput" name="answers[]" type="text" placeholder="Answer" >
      <input id="book" class="bookInput" name="book[]" type="text" placeholder="book" >

        <select id="diff" class="diffInput" name="diff[]" type="text" placeholder="difficulty">
      <option class="lang" key="hard">Hard</option>
      <option class="lang" key="medium">Medium</option>
      <option class="lang" key="easy">Easy</option>
      </select>
      <br>
      </span>
<input name="add" type="submit" id="add" value="Submit Question" >
        <br>
        </form>
       <button type="button" name="addInput" onclick="addInputs()">Add Input</button>
<?php if ( $_REQUEST['add'] ){
    mysql_select_db("test", $db);
       $questions = $_POST['questions'];
       $answers = $_POST['answers'];
       $date = $_POST['date'];
       $books = $_POST['book'];
       $diffs= $_POST['diff'];
       $dom = new DOMDocument();

       for ($i=0, $count = count($questions); $i <$count ; $i++) {
         # code...
         $question = $questions[$i];
         $answer = $answers[$i];
         $book = $books[$i];
         $diff =  $diffs[$i];
          //echo $question;
        //     echo $answer;
        //     echo  $book;
        //     echo $diff;
if ($diff == '困难') {
  $diff = 'Hard';
}else if($diff == '简单'){
  $diff = 'Easy';
}else if($diff == '适中'){
  $diff = 'Medium';
}
printf($diff);
      $questionString = mysql_real_escape_string($question);
      $answerString = mysql_real_escape_string($answer);
      $diffString = mysql_real_escape_string($diff);
      $bookString =  mysql_real_escape_string($book);


         $sql = "INSERT INTO test.fill_blank
                (Questions, Answers,Date,Difficulty, Textbook)
                VALUES('$questionString','$answerString', NOW(),'$diffString','$bookString')";
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
      <hr>


      <hr>

      <div class="footer">
        <p>&copy;
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

function addInputs(){
  //first have to memorize
  if(defaultInputNumber == 1){
  defaultInputHtml   =  document.getElementsByName("inputs")[0].innerHTML;
}
    var currentFormContent =  document.getElementsByName("inputs")[0].innerHTML;
  //currentFormContent  = currentFormContent -  document.getElementsByName("add").innerHTML;
console.log(currentFormContent);
document.getElementsByName("inputs")[0].innerHTML = currentFormContent + defaultInputHtml;
defaultInputNumber += 1;
}

</script>

  </body>
</html>
