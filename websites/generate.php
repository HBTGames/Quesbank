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

      <hr>

<div id="distill">
<div id="year-filter">
  <a>Year</a>
    <input type="checkbox" id="inlineCheckbox1" value="option1"> 2000-2005
    <input type="checkbox" id="inlineCheckbox2" value="option2"> 2006-2010
    <input type="checkbox" id="inlineCheckbox3" value="option3"> 2010-2015
    <input type="checkbox" id="inlineCheckbox3" value="option3"> 2016-2017
</div>
<div id="grade-filter">
  <a>Grade</a>
    <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
    <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
    <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
    <input type="checkbox" id="inlineCheckbox3" value="option3"> 4
    <input type="checkbox" id="inlineCheckbox3" value="option3"> 5
</div>
<div id="testtype-filter">
  <a>Testtype</a>
    <input type="checkbox" id="inlineCheckbox1" value="option1"> Midterm
    <input type="checkbox" id="inlineCheckbox2" value="option2"> Final
    <input type="checkbox" id="inlineCheckbox3" value="option3"> Monthly
    <input type="checkbox" id="inlineCheckbox3" value="option3"> Zhongkao
</div>
<div id="reference-filter">
  <a>Reference</a>
    <input type="checkbox" id="inlineCheckbox1" value="option1"> School1
    <input type="checkbox" id="inlineCheckbox2" value="option2"> School2
    <input type="checkbox" id="inlineCheckbox3" value="option3"> School3
    <input type="checkbox" id="inlineCheckbox3" value="option3"> School4
</div>
<div id="textbook-filter">
  <a>Textbook</a>
    <input type="checkbox" id="inlineCheckbox1" value="option1"> N1
    <input type="checkbox" id="inlineCheckbox2" value="option2"> N2
    <input type="checkbox" id="inlineCheckbox3" value="option3"> N3
    <input type="checkbox" id="inlineCheckbox3" value="option3"> N4
</div>
<div id="lesson-filter">
  <a>Lesson</a>
    <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
    <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
    <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
    <input type="checkbox" id="inlineCheckbox3" value="option3"> 4
</div>
<div id="knowledge-filter">
  <a>Knowledge</a>
    <input type="checkbox" id="inlineCheckbox1" value="option1"> key1
    <input type="checkbox" id="inlineCheckbox2" value="option2"> key2
    <input type="checkbox" id="inlineCheckbox3" value="option3"> key3
    <input type="checkbox" id="inlineCheckbox3" value="option3"> key3
</div>
<div id="difficulty-filter">
  <a>Difficulty</a>
    <input type="checkbox" id="inlineCheckbox1" value="option1"> Easy
    <input type="checkbox" id="inlineCheckbox2" value="option2"> Medium
    <input type="checkbox" id="inlineCheckbox3" value="option3"> Hard
</div>




</div>


<hr>
      <!-- Standard button -->
<button type="button" class="btn btn-default" onclick="demoTwoPageDocument()">Test Type 1</button>
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
