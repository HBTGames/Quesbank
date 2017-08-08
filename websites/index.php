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

      <div class="jumbotron">
        <h1>Question Bank</h1>
        <p class="lead lang"  key="productDescription">You can put new questions to the bank, or generate test paper through the website.</p>
        <a class="btn btn-large btn-success lang" href="addques.php" key="addNewQuestion">Add New Questions</a>
        <a class="btn btn-large btn-success lang" href="generate.php"  key="generateTestPaper">Generate Test Paper</a>
      </div>

      <hr>

      <div class="row-fluid marketing">
        <div class="span6">
          <h4>Qestions Stat</h4>
          <?php
          $conn = mysql_connect('localhost','root','password');
          mysql_select_db('test');
          ?>
<table class="table table-striped">
  <thead>
    <tr>
    <th> Questype</th>
    <th> Total </th>
    <th> Added Today </th>
    </thead>
    <tbody>
    <tr>
    <td>Fill blank</td>
    <td> <?php
    $count = "SELECT COUNT(idfill_blank) FROM test.fill_blank";
               $all = mysql_fetch_array( mysql_query($count) );
               echo "$all[0]";
               ?>
               <td> </td>
    </tr>
    <tr>
    <td>Multichoice</td>
    <td> <?php
    $count2 = "SELECT COUNT(idmulti_choice) FROM test.multi_choice";
               $all2 = mysql_fetch_array( mysql_query($count2) );
               echo "$all2[0]"; ?>
               <td> </td>
    </tr>
    <tr>
    <td>Alltypes</td>
    <td> <?php
    $alltype = $all[0] + $all2[0];
               echo "$alltype"; ?>
               <td> </td>
    </tr>

    </tbody>
</table>
        </div>

        <div class="span6">
          <h4>Guide</h4>
          <p>Please go to manage page to see all type questions.<br><br>Please contact us if you have any questions.Thanks</p>


        </div>
      </div>

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
          <select id="changeLang" onchange="languageChange();">
             <option  class="lang" value="en" key="langEnglish" >English</option>
             <option class="lang" value="zh" key="langChinese">中文</option>
          </select>
        </p>
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
    <script type="text/javascript" src="../assets/js/languageHandler.js"?v=1></script>
    <script type="text/javascript" src="../assets/js/cookieHandler.js"></script>

  </body>
</html>
