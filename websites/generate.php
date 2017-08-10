<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Template &middot; Bootstrap</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <script type="text/javascript" src="../assets/js/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="../assets/js/jquery-ui-1.8.17.custom.min.js"></script>
    <script type="text/javascript" src="../assets/js/jspdf.debug.js"></script>
    <script type="text/javascript" src="../assets/js/test-generation-helper.js"></script>
    
    <link href='https://fonts.googleapis.com/css?family=Ubuntu:300,400,700italic' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

  <link rel='stylesheet prefetch' href='http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css'>
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
        max-width: 70%;
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
 @timing:         0.08s;
      
.tag{
  display: inline-block;
  position: relative;
  margin: 5px 10px 5px 0px;
}

.tag input[type=checkbox]{
  opacity: 0;
  position: absolute;
  z-index: 300;
  cursor: pointer;
  left: 0;
  width: 100%;
  height: 100%;
  
  &:hover + label{
    background: lighten(#ccc, 7%);
  }
}

.tag label{
  padding: 7px 34px 6px 18px;
  position: relative;
  z-index: 200;
  color: white;
  display: block;
  border-radius: 16px;
  background: #ccc;
  transition: all @timing ease-in;
}

.tag .fa{
  position: absolute;
  z-index: 250;
  right: 11px;
  top: 9px;
  color: white;
  line-height: 0.95;
}

.tag .fa-check{
  display: none;
  top: 8px;
  right: 10px;
  transition: all @timing ease-in;
}


.tag input[type=checkbox]:checked + label{
  background: black;
  animation: flick @timing;
}
.tag input[type=checkbox]:checked ~ .fa-plus{
  display: none;
}
.tag input[type=checkbox]:checked ~ .fa-check{
  animation: flick @timing;
  display: block;
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

  <body>

    <div class="container-narrow">


      <div class="masthead">
        <ul class="nav nav-pills pull-right">
          <li class="active"><a href="index.php">Home</a></li>
          <li><a href="manage.php">Manage</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <h3 class="muted">QuesBank</h3>
      </div>
<?php
                        $db = mysql_connect('localhost','root','password')
                         or die('Error connecting to MySQL server.');
                         
                        ?>
      <hr>

<div id="distill">
<div id="year-filter">
  <label>Year</label>
  <div class="tag">
    <input type="checkbox" />
    <label for="">2000-2005</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">2006-2010</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">2011-2015</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">2016-2017</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
</div>
<div id="grade-filter">
  <label>Grade</label>
    <div class="tag">
    <input type="checkbox" />
    <label for="">1</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">2</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">3</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">4</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">5</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">6</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">7</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">8</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">9</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">10</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">11</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">12</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
</div>
<div id="testtype-filter">
  <label>Testtype</label>
  <?php
                           @mysql_select_db("tags", $db);
                         $sql = "SELECT * FROM tags.testtypetags";
                         $result = mysql_query($sql);
                              while( $row = mysql_fetch_array($result))
                              {
                              $testtype = $row['testtype'];
                              ?>
   <div class="tag">
    <input type="checkbox" />
    <label for=""><?php echo "$testtype" ?></label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
    <?php } ?>
</div>
<div id="testtype-filter">
  <label>Textbook</label>
  <?php
                           @mysql_select_db("tags", $db);
                         $sql = "SELECT * FROM tags.textbooktags";
                         $result = mysql_query($sql);
                              while( $row = mysql_fetch_array($result))
                              {
                              $textbook = $row['textbook'];
                              ?>
    <div class="tag">
    <input type="checkbox" />
    <label for=""><?php echo "$textbook" ?></label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
    <?php } ?>
</div>
<div id="lesson-filter">
  <label>Lesson</label>
    <div class="tag">
    <input type="checkbox" />
    <label for="">1</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">2</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">3</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">4</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
</div>
<div id="testtype-filter">
  <label>Knowledge</label>
  <?php
                           @mysql_select_db("tags", $db);
                         $sql = "SELECT * FROM tags.knowledgetags";
                         $result = mysql_query($sql);
                              while( $row = mysql_fetch_array($result))
                              {
                              $knowledge = $row['knowledge'];
                              ?>
   <div class="tag">
    <input type="checkbox" />
    <label for=""><?php echo "$knowledge" ?></label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
    <?php } ?>
</div>
<div id="difficulty-filter">
  <label>Difficulty</label>
  <div class="tag">
    <input type="checkbox" />
    <label for="">Easy</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">Medium</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
  <div class="tag">
    <input type="checkbox" />
    <label for="">Hard</label>
    <i class="fa fa-plus"></i>
    <i class="fa fa-check"></i> 
  </div>
</div>




</div>


<hr>
<?php
$db = mysql_connect('localhost','root','password')
 or die('Error connecting to MySQL server.');
 @mysql_select_db("test", $db);
 $fill_blank_sql = "SELECT * FROM test.fill_blank";
 $fill_blank_result = mysql_query($fill_blank_sql);

 $count = "SELECT COUNT(idfill_blank) FROM test.fill_blank";
 $all = mysql_fetch_array(mysql_query($count) );
 $total_num = $all[0];

 $question_1_index = rand(1, $total_num);
 echo "$question_1_index";
 $questions_for_samples_query = mysql_fetch_row(mysql_query("SELECT question FROM test.fill_blank WHERE idfill_blank = $question_1_index"));
 $questions_for_samples_1 = $questions_for_samples_query[0];
 $answers_for_samples_query = mysql_fetch_row(mysql_query("SELECT answer FROM test.fill_blank WHERE idfill_blank = $question_1_index"));
 $answers_for_samples_1 = $answers_for_samples_query[0];

 $question_2_index = rand(1, $total_num);
 while ($question_1_index == $question_2_index){
   $question_2_index = rand(1, $total_num);
 }
 echo "$question_2_index";
 $questions_for_samples_query = mysql_fetch_row(mysql_query("SELECT question FROM test.fill_blank WHERE idfill_blank = $question_2_index"));
 $questions_for_samples_2 = $questions_for_samples_query[0];
 $answers_for_samples_query = mysql_fetch_row(mysql_query("SELECT answer FROM test.fill_blank WHERE idfill_blank = $question_2_index"));
 $answers_for_samples_2 = $answers_for_samples_query[0];

 $question_3_index = rand(1, $total_num);
 while ($question_1_index == $question_3_index || $question_2_index == $question_3_index){
   $question_3_index = rand(1, $total_num);
 }
 echo "$question_3_index";
 $questions_for_samples_query = mysql_fetch_row(mysql_query("SELECT question FROM test.fill_blank WHERE idfill_blank = $question_3_index"));
 $questions_for_samples_3 = $questions_for_samples_query[0];
 $answers_for_samples_query = mysql_fetch_row(mysql_query("SELECT answer FROM test.fill_blank WHERE idfill_blank = $question_3_index"));
 $answers_for_samples_3 = $answers_for_samples_query[0];


$questions_for_samples = array ($questions_for_samples_1, $questions_for_samples_2, $questions_for_samples_3);
$answers_for_samples = array ($answers_for_samples_1, $answers_for_samples_2, $answers_for_samples_3);
 echo "$questions_for_samples[0]";
  echo "$questions_for_samples[1]";
   echo "$questions_for_samples[2]";
   echo "$answers_for_samples[0]";
    echo "$answers_for_samples[1]";
     echo "$answers_for_samples[2]";
?>

<hr>
      <!-- Standard button -->
<button type="button" class="btn btn-default" onclick="question_sample()">Test Type 1</button>
Pudding: 5 multiple-choice, 5 fill-blank/sentences, 2 translation, 1 reading
<hr>
<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Test Type 2</button>
Learning and Practicing: 10 multiple-choice, 5 fill-blank, 2 sentences, 2 translation
<hr>
<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Test Type 3</button>
Focus on Grammar: 25 multiple-choice, 25 fill-blank, 5 translation, 5 sentences
<hr>
<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Test Type 4</button>
Test: 10 multiple-choice, 1 reading, 10 fill-blank, 2 translation, 5 sentences
<hr>
<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Test Type 5</button>
Homework: 10 multiple-choice, 2 reading, 2 translation, 5 sentences
<hr>
<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Test Type 6</button>
Phase Quiz: 20 multiple-choice, 1 wanxing, 4 reading, 1 interaction, 1 mission reading
<hr>
<button type="button" class="btn btn-primary">Test Type 7</button>
Tutorial Practicing: 25 multiple-choice, 30 fill-blank, 10 sentences trans, 5 translation
<hr>

      <hr>
      <div class="footer">
           <p>
                  <a href="javascript:demoTwoPageDocument()" class="button">get sample pdf</a>
               </p>
            </div>
      <div class="footer">
        <p>&copy; Air English 2015</p>
      </div>

    </div> <!-- /container -->

<script>
function question_sample(){
  var doc_1 = new jsPDF();
  var doc_2 = new jsPDF();
  var question_sample_val_0 = "<?php echo $questions_for_samples[0] ?>";
  var question_sample_val_1 = "<?php echo $questions_for_samples[1] ?>";
  var question_sample_val_2 = "<?php echo $questions_for_samples[2] ?>";
  var answer_sample_val_0 = "<?php echo $answers_for_samples[0] ?>";
  var answer_sample_val_1 = "<?php echo $answers_for_samples[1] ?>";
  var answer_sample_val_2 = "<?php echo $answers_for_samples[2] ?>";
  doc_1.text(20, 20, '1. ' + question_sample_val_0);
  doc_1.text(20, 30, '2. ' + question_sample_val_1);
  doc_1.text(20, 40, '3. ' + question_sample_val_2);


  doc_2.text(20, 20, '1. ' + answer_sample_val_0);
  doc_2.text(20, 30, '2. ' + answer_sample_val_1);
  doc_2.text(20, 40, '3. ' + answer_sample_val_2);

  // Save the PDF
  doc_1.save('Sample Questions.pdf');
  doc_2.save('Sample Answers.pdf');
}
</script>



    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
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

  </body>
</html>
