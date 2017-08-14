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
       <link href="../assets/css/bootstrap-responsive.css" rel="stylesheet">
      <link href="../assets/css/quesbankstyle.css" rel="stylesheet">
      <style type="text/css">
         body {
         padding-top: 20px;
         padding-bottom: 40px;
         }
         /* Custom container */
         .container-narrow {
         margin: 0 auto;
         max-width: 100%;
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
         .masthead {
    padding-bottom: 15px;
    border-bottom: 1px solid #eeeeee ;
    display:block;
    position:fixed;
    background:#fff;
    width:100%;
    top:0;
}

.muted{
    color: #999999;
    margin-left: 10%;
    margin-top: 23px;
}
ul.nav.nav-pills.pull-right {
    margin-right: 10%;
    margin-top: 29px;
    margin-bottom: 0;
}
.jumbotron img.hat {
    margin-top: 80px;
    margin-bottom: 30px;
    width: 20%;
}
div.arrowlink{
width:100%;
text-align:center;
margin-top:80px;
}
div.arrowlink.uparrow{
margin-top:0;
}
.marketing {
    margin: 60px 0;
    width: 80%;
    text-align: center;
    margin: 0 auto;
}
.lead {
    margin-bottom: 30px;
}
.footer {
    padding-left: 10%;
    padding-right: 10%;
}
span.langsetting {
    float: right;
}
      </style>
     
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
   <body onload="loadLanguage()" id="top">
      <div class="container-narrow">
         <div class="masthead">
            <ul class="nav nav-pills pull-right">
               <li class="active"><a href="index.php" class="lang" key="home">Home</a></li>
               <li><a href="manage.php" class="lang" key="manage">Manage</a></li>
               <li><a href="contact.html" class="lang" key="contact">Contact</a></li>
            </ul>
            <h3 class="muted">QuesBank</h3>
         </div>
         <div class="jumbotron">
         <img class="hat" src="../assets/pics/drhat.png" alt="drhat" />
            <h1>Question Bank</h1>
            <p class="lead lang"  key="productDescription">You can put new questions to the bank, or generate test paper through the website.</p>
            <a class="btn btn-large btn-success lang" href="addques.php" key="addNewQuestion">Add New Questions</a>
            <a class="btn btn-large btn-success lang" href="generate.php"  key="generateTestPaper">Generate Test Paper</a>
            <div class="arrowlink">
            <a href="#intro" class="arrowlink"><img class="arrow"  src="../assets/pics/downArrow.png" alt="arrow" /></a>
            </div>
            </div>
          
          <br>
          <br>
        <br>
        <br id="intro">
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
                        </td>
                        <td >  <?php
                           $result = mysql_query("SELECT * FROM test.fill_blank");
                           $todayAddedCountFillBlank = 0;
                                $todayDate = date('Y-m-d');
                            while( $row = mysql_fetch_array($result))
                            {
                            $date = $row['date'];
                            if($todayDate == $date){
                             $todayAddedCountFillBlank += 1;
                            }
                           }
                           echo $todayAddedCountFillBlank;
                                ?> </td>
                     </tr>
                     <tr>
                        <td>Multichoice</td>
                        <td> <?php
                           $count2 = "SELECT COUNT(idmulti_choice) FROM test.multi_choice";
                                      $all2 = mysql_fetch_array( mysql_query($count2) );
                                      echo "$all2[0]"; ?>
                        <td>
                           <?php
                              $result = mysql_query("SELECT * FROM test.multi_choice");
                              $todayAddedCountMultiChoice = 0;
                               $todayDate = date('Y-m-d');
                              while( $row = mysql_fetch_array($result))
                              {
                              $date = $row['date'];
                              if($todayDate == $date){
                              $todayAddedCountMultiChoice += 1;
                              }
                              }
                              echo $todayAddedCountMultiChoice;
                               ?>
                        </td>
                     </tr>
                     <tr>
                        <td>Sentence Trans</td>
                        <td> <?php
                           $count3 = "SELECT COUNT(idsentence_trans) FROM test.sentence_trans";
                                      $all3 = mysql_fetch_array( mysql_query($count3) );
                                      echo "$all3[0]"; ?>
                        <td>
                           <?php
                              $result = mysql_query("SELECT * FROM test.sentence_trans");
                              $todayAddedCountSentenceTrans = 0;
                               $todayDate = date('Y-m-d');
                              while( $row = mysql_fetch_array($result))
                              {
                              $date = $row['date'];
                              if($todayDate == $date){
                              $todayAddedCountSentenceTrans += 1;
                              }
                              }
                              echo $todayAddedCountSentenceTrans;
                               ?>
                        </td>
                     </tr>
                     <tr>
                        <td>Interaction</td>
                        <td> <?php
                           $count4 = "SELECT COUNT(idinteraction) FROM test.interaction";
                                      $all4 = mysql_fetch_array( mysql_query($count4) );
                                      echo "$all4[0]"; ?>
                        <td>
                           <?php
                              $result = mysql_query("SELECT * FROM test.interaction");
                              $todayAddedCountInteraction = 0;
                               $todayDate = date('Y-m-d');
                              while( $row = mysql_fetch_array($result))
                              {
                              $date = $row['date'];
                              if($todayDate == $date){
                              $todayAddedCountInteraction += 1;
                              }
                              }
                              echo $todayAddedCountInteraction;
                               ?>
                        </td>
                     </tr>
                     <tr>
                        <td>Wanxing</td>
                        <td> <?php
                           $count5 = "SELECT COUNT(idread_multi) FROM test.read_multi";
                                      $all5 = mysql_fetch_array( mysql_query($count5) );
                                      echo "$all5[0]"; ?>
                        <td>
                           <?php
                              $result = mysql_query("SELECT * FROM test.read_multi");
                              $todayAddedCountReadmu = 0;
                               $todayDate = date('Y-m-d');
                              while( $row = mysql_fetch_array($result))
                              {
                              $date = $row['date'];
                              if($todayDate == $date){
                              $todayAddedCountReadmu += 1;
                              }
                              }
                              echo $todayAddedCountReadmu;
                               ?>
                        </td>
                     </tr>
                     <tr>
                        <td>Reading</td>
                        <td> <?php
                           $count6 = "SELECT COUNT(idreading) FROM test.reading";
                                      $all6 = mysql_fetch_array( mysql_query($count6) );
                                      echo "$all6[0]"; ?>
                        <td>
                           <?php
                              $result = mysql_query("SELECT * FROM test.reading");
                              $todayAddedCountReading = 0;
                               $todayDate = date('Y-m-d');
                              while( $row = mysql_fetch_array($result))
                              {
                              $date = $row['date'];
                              if($todayDate == $date){
                              $todayAddedCountReading += 1;
                              }
                              }
                              echo $todayAddedCountReading;
                               ?>
                        </td>
                     </tr>
                     <tr>
                        <td>Reading Mission</td>
                        <td> <?php
                           $count7 = "SELECT COUNT(idreading_mission) FROM test.reading_mission";
                                      $all7 = mysql_fetch_array( mysql_query($count7) );
                                      echo "$all7[0]"; ?>
                        <td>
                           <?php
                              $result = mysql_query("SELECT * FROM test.reading_mission");
                              $todayAddedCountReadingmi = 0;
                               $todayDate = date('Y-m-d');
                              while( $row = mysql_fetch_array($result))
                              {
                              $date = $row['date'];
                              if($todayDate == $date){
                              $todayAddedCountReadingmi += 1;
                              }
                              }
                              echo $todayAddedCountReadingmi;
                               ?>
                        </td>
                     </tr>
                     <tr>
                        <td>Translation</td>
                        <td> <?php
                           $count8 = "SELECT COUNT(idtranslation) FROM test.translation";
                                      $all8 = mysql_fetch_array( mysql_query($count8) );
                                      echo "$all8[0]"; ?>
                        <td>
                           <?php
                              $result = mysql_query("SELECT * FROM test.translation");
                              $todayAddedCountTranslation = 0;
                               $todayDate = date('Y-m-d');
                              while( $row = mysql_fetch_array($result))
                              {
                              $date = $row['date'];
                              if($todayDate == $date){
                              $todayAddedCountTranslation += 1;
                              }
                              }
                              echo $todayAddedCountTranslation;
                               ?>
                        </td>
                     </tr>
                     <tr>
                        <td>Listening</td>
                        <td> <?php
                           $count9 = "SELECT COUNT(idlistening) FROM test.listening";
                                      $all9 = mysql_fetch_array( mysql_query($count9) );
                                      echo "$all9[0]"; ?>
                        <td>
                           <?php
                              $result = mysql_query("SELECT * FROM test.listening");
                              $todayAddedCountListening = 0;
                               $todayDate = date('Y-m-d');
                              while( $row = mysql_fetch_array($result))
                              {
                              $date = $row['date'];
                              if($todayDate == $date){
                              $todayAddedCountListening += 1;
                              }
                              }
                              echo $todayAddedCountListening;
                               ?>
                        </td>
                     </tr>
                      <tr>
                        <td>Writing</td>
                        <td> <?php
                           $count10 = "SELECT COUNT(idwriting) FROM test.writing";
                                      $all10 = mysql_fetch_array( mysql_query($count10) );
                                      echo "$all10[0]"; ?>
                        <td>
                           <?php
                              $result = mysql_query("SELECT * FROM test.writing");
                              $todayAddedCountWriting = 0;
                               $todayDate = date('Y-m-d');
                              while( $row = mysql_fetch_array($result))
                              {
                              $date = $row['date'];
                              if($todayDate == $date){
                              $todayAddedCountWriting += 1;
                              }
                              }
                              echo $todayAddedCountWriting;
                               ?>
                        </td>
                     </tr>
                     <tr>
                        <td>Others</td>
                        <td> <?php
                           $count11 = "SELECT COUNT(idothers) FROM test.others";
                                      $all11 = mysql_fetch_array( mysql_query($count11) );
                                      echo "$all11[0]"; ?>
                        <td>
                           <?php
                              $result = mysql_query("SELECT * FROM test.others");
                              $todayAddedCountOthers = 0;
                               $todayDate = date('Y-m-d');
                              while( $row = mysql_fetch_array($result))
                              {
                              $date = $row['date'];
                              if($todayDate == $date){
                              $todayAddedCountOthers += 1;
                              }
                              }
                              echo $todayAddedCountOthers;
                               ?>
                        </td>
                     </tr>
                     <tr>
                        <td>Alltypes</td>
                        <td> <?php
                           $alltype = $all[0] + $all2[0] + $all3[0] + $all4[0]+$all5[0]+$all6[0];
                                      echo "$alltype"; ?>
                        <td>
                           <?php
                              $todayAddedCountAll = $todayAddedCountMultiChoice +  $todayAddedCountFillBlank+ $todayAddedCountSentenceTrans +$todayAddedCountInteraction +$todayAddedCountReadmu+$todayAddedCountReading+$todayAddedCountReadingmi +$todayAddedCountTranslation +$todayAddedCountListening+$todayAddedCountWriting+$todayAddedCountOthers;
                              echo $todayAddedCountAll;
                                ?>
                        </td>
                     </tr>
                     
                  </tbody>
               </table>
            </div>
            <div class="span6">
               <h4>Guide</h4>
               <p>Please go to manage page to see all type questions.<br><br>Please contact us if you have any questions.Thanks</p>
            </div>
            
         </div>
         <div class="arrowlink uparrow">
            <a href="#top" class="arrowlink"><img class="arrow"  src="../assets/pics/upArrow.png" alt="arrow" /></a>
            </div>
         <hr>
         <div class="footer">
            <p>
               &copy;
               <span class="lang" key="airEnglish">Air English 2015</span>
               <span class="langsetting">
               <span class="lang" key="languageText"> Language:</span>
               <select id="changeLang" onchange="languageChange();">
                  <option  class="lang" value="en" key="langEnglish" >English</option>
                  <option class="lang" value="zh" key="langChinese">中文</option>
               </select>
               </div>
            </p>
         </div>
      </div>
      <!-- /container -->
      <!-- Le javascript
         ================================================== -->
      <!-- Placed at the end of the document so the pages load faster -->
     <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js" type="text/JavaScript"></script>
<script type="text/javascript">
$(".arrowlink").click(function(){
var href = $(this).attr("href");
var pos = $(href).offset().top;
$("html,body").animate({scrollTop: pos}, 1000);
return false;
});
</script>
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