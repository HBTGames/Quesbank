<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Quesbank</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- Le styles -->
      <link href="../assets/css/bootstrap.css" rel="stylesheet">
      <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
      <style type="text/css">
         body {
         padding-top: 20px;
         padding-bottom: 40px;
         }
         /* Custom container */
         .container-narrow {
         margin: 0 auto;
         max-width: 80%;
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
         .modal.fade {
         top: -100%;
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
          @mysql_select_db("test", $db);
          $sql = "SELECT * FROM test.fill_blank";
          $result = mysql_query($sql);
         
         ?>
      <div class="container-narrow">
         <div class="masthead">
            <ul class="nav nav-pills pull-right">
               <li ><a href="index.html" class="lang" key="home">Home</a></li>
               <li class="active" ><a href="manage.php" class="lang" key="manage" >Manage</a></li>
               <li ><a href="contact.html?language=42"  class="lang" key="contact">Contact</a></li>
            </ul>
            <h3 class="muted">QuesBank</h3>
         </div>
         <hr>
         <input class="form-control" type="text" placeholder="Search by Question" id="myInput" onkeyup="searchfilter()" name="searchByQuestion">
         <input class="form-control" type="text" placeholder="Search by Textbook" id="myInputtwo" onkeyup="searchfiltertwo()" name="searchByTextbook">
         <hr>
         <table class="table table-hover" id="myTable">
            <thead>
               <tr>
                  <th style="cursor:pointer;" onclick="sortTable(0)">#</th>
                  <th style="cursor:pointer;" onclick="sortTable(1)">Year</th>
                  <th style="cursor:pointer;" onclick="sortTable(2)">Grade</th>
                  <th style="cursor:pointer;" onclick="sortTable(3)">Testtype</th>
                  <th style="cursor:pointer;" onclick="sortTable(4)">Reference</th>
                  <th style="cursor:pointer;" onclick="sortTable(5)">Textbook</th>
                  <th style="cursor:pointer;" onclick="sortTable(6)">Lesson</th>
                  <th style="cursor:pointer;" onclick="sortTable(7)">Knowledge</th>
                  <th style="cursor:pointer;" onclick="sortTable(8)">Difficulty</th>
                  <th style="cursor:pointer;" onclick="sortTable(9)">Question</th>
                  <th style="cursor:pointer;" onclick="sortTable(10)">Answer</th>
                  <th style="cursor:pointer;" onclick="sortTable(11)">Date</th>
                  <th class="lang" key="manipulationHeader">Manipulation</th>
               </tr>
            </thead>
            <tbody>
               <?php
                  while( $row = mysql_fetch_array($result))
                  {
                  $id = $row['idfill_blank'];
                  $year = $row['year'];
                  $grade = $row['grade'];
                  $testtype = $row['testtype'];
                  $reference = $row['reference'];
                  $textbook = $row['textbook'];
                  $lesson = $row['lesson'];
                  $knowledge = $row['knowledge'];
                  $difficulty = $row['difficulty'];
                  $question = $row['question'];
                  $answer = $row['answer'];
                  $date = $row['date'];
                  ?>
               <tr>
                  <td><?php echo "$id" ?></td>
                  <td><?php echo "$year" ?></td>
                  <td><?php echo "$grade" ?></td>
                  <td><?php echo "$testtype" ?></td>
                  <td><?php echo "$reference" ?></td>
                  <td><?php echo "$textbook" ?></td>
                  <td><?php echo "$lesson" ?></td>
                  <td><?php echo "$knowledge" ?></td>
                  <td><?php echo "$difficulty" ?></td>
                  <td><?php echo "$question" ?></td>
                  <td><?php echo "$answer" ?></td>
                  <td><?php echo "$date" ?></td>
                  <td>
                     <button type="button" class="btn btn-primary btn-lg edit-b lang" data-toggle="modal" data-target="#myModal-<?php echo "$id"?>" key="editButton" id="<?php echo "$id"?>" >Edit </button>
                     <button type="button"  data-toggle="modal" data-target=".bs-example-modal-sm"
                        class="btn btn-danger delete-b lang" key="deleteButton"  id="<?php echo "$id" ?>">Delete</button>
                     <!-- Modal -->
                     <div class="modal fade" id="myModal-<?php echo "$id"?>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel-<?php echo "$id"?>">
                        <div class="modal-dialog" role="document">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                 <h4 class="modal-title lang" id="myModalLabel-<?php echo "$id"?>" key="editQuestionLabel">Edit Question</h4>
                              </div>
                              <form method="post">
                                 <div class="modal-body">
                                    <input type="hidden" id="<?php echo "$id"?>" value="<?php echo "$id"?>">
                                    <span class="lang">Year</span>
                                    <input type="text" name="year" placeholder="Year" id="year-<?php echo "$year"?>" value="<?php echo "$year"?>">
                                    <br>
                                    <span class="lang">Grade</span>
                                    <input type="text" name="grade" placeholder="Grade" id="grade-<?php echo "$grade"?>" value="<?php echo "$grade"?>">
                                    <br>
                                    <span class="lang">Testtype</span>
                                    <input type="text" name="testtype" placeholder="Testtype" id="testtype-<?php echo "$testtype"?>" value="<?php echo "$testtype"?>">
                                    <br>
                                    <span class="lang">Reference</span>
                                    <input type="text" name="reference" placeholder="Reference" id="reference-<?php echo "$reference"?>" value="<?php echo "$reference"?>">
                                    <br>
                                    <span class="lang">Textbook</span>
                                    <input type="text" name="textbook" placeholder="Textbook" id="textbook-<?php echo "$textbook"?>" value="<?php echo "$textbook"?>">
                                    <br>
                                    <span class="lang" >Lesson</span>
                                    <input type="text" name="lesson" placeholder="Lesson" id="lesson-<?php echo "$lesson"?>" value="<?php echo "$lesson"?>">
                                    <br>
                                    <span class="lang">Knowledge</span>
                                    <input type="text" name="knowledge" placeholder="Knowledge" id="knowledge-<?php echo "$knowledge"?>" value="<?php echo "$knowledge"?>">
                                    <br>
                                    <span class="lang" key="difficultyHeader">Difficulty</span>
                                    <select id="difficulty-<?php echo "$difficulty"?>" name="diff" type="text" placeholder="difficulty" value="<?php echo "$difficulty"?>">
                                       <option class="lang" key="hard">Hard</option>
                                       <option class="lang" key="medium">Medium</option>
                                       <option class="lang" key="easy">Easy</option>
                                    </select>
                                    <br>
                                    <span class="lang" key = "questionHeader">Question</span>
                                    <input type="text" name="question" placeholder="Question" id="question-<?php echo "$question"?>" value="<?php echo "$question"?>">
                                    <br>
                                    <span class="lang" key = "answerHeader">Answer</span>
                                    <input type="text" name="answer" placeholder="Answer" id="answer-<?php echo "$answer"?>" value="<?php echo "$answer"?>">
                                    <br>
                                 </div>
                                 <div class="modal-footer">
                                    <button type="button" class="btn btn-default lang" data-dismiss="modal" key='closeButton'>Close</button>
                                    <input type="submit" onclick="updatedata(<?php echo "$id"?>)"id="update" name="update" value="update" class="btn btn-primary lang"  key="saveButton">
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                     <!--
                        echo "<tr>";
                        echo "<td>$id</td>";
                        echo "<td>$year</td>";
                        echo "<td>$grade</td>";
                        echo "<td>$testtype</td>";
                        echo "<td>$reference</td>";
                        echo "<td>$textbook</td>";
                        echo "<td>$lesson</td>";
                        echo "<td>$knowledge</td>";
                        echo "<td>$difficulty</td>";
                        echo "<td>$question</td>";
                        echo "<td>$answer</td>";
                        echo "<td>$date</td>";  
                        echo ' <td><button type="button" class="btn btn-primary btn-lg edit-b lang" data-toggle="modal" data-target="#myModal" key="editButton" ';
                        echo 'id="';
                        echo "$id";
                        echo '">Edit</button>';
                        echo '<button type="button"  data-toggle="modal" data-target=".bs-example-modal-sm"
                        class="btn btn-danger delete-b lang" key="deleteButton"  id="';
                        echo "$id";
                        echo '">Delete</button></td></tr>';-->
                     <?php
                        }
                        ?>
                     <!-- <?php
                        if (isset($_GET['idd'])){
                        $idd = $_GET['idd'];
                        $res = mysql_query("DELETE FROM test.fill_blank WHERE idnew_table='$idd'");
                        echo '<script> window.location.href="manage.php"; </script>';
                        }
                        ?> -->
            </tbody>
         </table>
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
               <select id="changeLang" onchange="languageChange();">
                  <option  class="lang" value="en" key="langEnglish" >English</option>
                  <option class="lang" value="zh" key="langChinese">中文</option>
               </select>
            </p>
         </div>
      </div>
      <!-- /container -->
      <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title lang" id="myModalLabel" key="deleteQuestion">Delete Question</h4>
               </div>
               <div class="modal-body lang" key="deleteRemindMessage">
                  Are you sure to delete?
               </div>
               <div class="modal-footer">
                  <form>
                     <button type="button" class="btn btn-default lang" data-dismiss="modal" key="closeButton">Close</button>
                     <a type="submit"  id="delete-btn" name="delete" class="btn btn-danger delete-btn lang" key="deleteButton" >Delete</a>
                  </form>
                  <script language="javascript" type="text/javascript">
                     //$(document).ready(function(){
                     		$('.delete-b').click(function(){
                     		var var_id =$(this).attr('id');
                     		// alert(a);
                     var strLink = "manage.php?idd=" + var_id;
                     document.getElementById("delete-btn").setAttribute("href",strLink);
                     		});
                     //});
                     //var var_id = 101;
                     
                     
                  </script> 
                  <?php
                     if (isset($_GET['idd'])){
                     $idd = $_GET['idd'];
                     $res = mysql_query("DELETE FROM test.fill_blank WHERE idfill_blank='$idd'");
                     echo '<script> window.location.href="manage.php"; </script>';
                     }
                     ?>
               </div>
            </div>
         </div>
      </div>
      <?php
         if (isset($_POST['update'])){
          $db = mysql_connect('localhost','root','password');
         //    $key = $_GET['key'];
          mysql_select_db('test');
          $year = $_POST['year'];
          $grade = $_POST['grade'];
          $testtype = $_POST['testtype'];
         $reference = $_POST['reference'];
         $textbook = $_POST['textbook'];
          $lesson = $_POST['lesson'];
          $knowledge = $_POST['knowledge'];
         $difficulty = $_POST['difficulty'];
           $question = $_POST['question'];
          $answer = $_POST['answer'];
         
         $sqll = "UPDATE test.fill_blank ".
               "SET 
               year = '$year',
               grade = '$grade',
               testtype = '$testtype',
               reference = '$reference',
               textbook = '$textbook',
               lesson = '$lesson',
               knowledge = '$knowledge',
               difficulty = '$difficulty',
               question = '$question',
               answer = '$answer',
               date = NOW()".
               "WHERE idfill_blank='$id'";
         
               $retval = mysql_query( $sqll, $db);
                if(! $retval )
         {
          die('Could not update data: ' . mysql_error());
         }
         echo "Updated data successfully\n";
         echo '<script> window.location.href="manage.php"; </script>';
             }
          ?>
      <!-- <script language="javascript" type="text/javascript">
         $('.edit-b').click(function(){
         var edit_id =$(this).attr('id');
         // alert(a);
         var strLink = "manage.php?key=" + edit_id;
         document.getElementById("update").setAttribute("href",strLink);
         });
         
         
         </script> -->
      <!--	
         <script>
         $(document).on('click', '.edit-b',function(){
         var idfill_blank = $(this).attr("id");
         $.ajax({
         url:"fetch.php",
         method: "POST",
         data:{idfill_blank:idfill_blank},
         dataType:"json",
         success:function(data){
         $('#year').val(data.year);
         $('#grade').val(data.grade);
         $('#testtype').val(data.testtype);
         $('#reference').val(data.reference);
         $('#textbook').val(data.textbook);
         $('#lesson').val(data.lesson);
         $('#knowledge').val(data.knowledge);
         $('#difficulty').val(data.difficulty);
         $('#question').val(data.question);
         $('#answer').val(data.answer);
         $('#date').val(data.date);
         $('#idfill_blank').val(data.idfill_blank);
         $('#insert').val("Update");
         $('#myModal').modal('show');
         }
         
         });
         
         });
         
         
         </script> -->
      <script>
         function searchfilter() {
         // Declare variables
         var input, filter, table, tr, td, i;
         input = document.getElementById("myInput");
         filter = input.value;
         table = document.getElementById("myTable");
         tr = table.getElementsByTagName("tr");
         
         // Loop through all table rows, and hide those who don't match the search query
         for (i = 0; i < tr.length; i++) {
         td = tr[i].getElementsByTagName("td")[1];
         if (td) {
         if (td.innerHTML.indexOf(filter) > -1) {
         tr[i].style.display = "";
         } else {
         tr[i].style.display = "none";
         }
         }
         }
         }
         function searchfiltertwo() {
         // Declare variables
         var input, filter, table, tr, td, i;
         input = document.getElementById("myInputtwo");
         filter = input.value;
         table = document.getElementById("myTable");
         tr = table.getElementsByTagName("tr");
         // Loop through all table rows, and hide those who don't match the search query
         for (i = 0; i < tr.length; i++) {
         td = tr[i].getElementsByTagName("td")[5];
         if (td) {
         if (td.innerHTML.indexOf(filter) > -1) {
         tr[i].style.display = "";
         } else {
         tr[i].style.display = "none";
         }
         }
         }
         }
         
         function sortTable(k) {
           if (k == 0){
             var table, rows, switching, i, x, y, shouldSwitch;
             table = document.getElementById("myTable");
             switching = true;
             while (switching) {
             switching = false;
             rows = table.getElementsByTagName("tr");
             for (i = 1; i < (rows.length - 1); i++) {
             shouldSwitch = false;
             x = rows[i].getElementsByTagName("td")[k];
             y = rows[i + 1].getElementsByTagName("td")[k];
             if (parseInt(x.innerHTML, 10) > parseInt(y.innerHTML, 10)) {
             shouldSwitch= true;
             break;
             }
             }
             if (shouldSwitch) {
             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
             switching = true;
             }
             }
           }
         else {
           var table, rows, switching, i, x, y, shouldSwitch;
           table = document.getElementById("myTable");
           switching = true;
           while (switching) {
           switching = false;
           rows = table.getElementsByTagName("tr");
           for (i = 1; i < (rows.length - 1); i++) {
           shouldSwitch = false;
           x = rows[i].getElementsByTagName("td")[k];
           y = rows[i + 1].getElementsByTagName("td")[k];
           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
           shouldSwitch= true;
           break;
           }
           }
           if (shouldSwitch) {
           rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
           switching = true;
           }
           }
         }
         }
         /**
         $('#changeLang').change(function( ) {
         var $this = $(this);
         var lang = $this.val( );
         $('.i18n').each(function( ){
         $(this).text($(this).data(lang));
         });
         });
         **/
         
         /*$('.edit-b').on('click', function(){
         // Get all TD from the cliked Button
         var td = $(this).parents('tr').find('td:lt(12)');
         $('#year').val($(td[1]).text());
         $('#grade').val($(td[2]).text());
         $('#testtype').val($(td[3]).text());
         $('#reference').val($(td[4]).text());
         $('#textbook').val($(td[5]).text());
         $('#lesson').val($(td[6]).text());
         $('#knowledge').val($(td[7]).text());
         $('#difficulty').val($(td[8]).text());
         $('#question').val($(td[9]).text());
         $('#answer').val($(td[10]).text());
         });*/
         
         function updatedata(str){
         var id = str;
         var year = $('#year-'+str).val();
         var grade = $('#grade-'+str).val();
         var testtype = $('#testtype-'+str).val();
         var reference = $('#reference-'+str).val();
         var textbook = $('#textbook-'+str).val();
         var lesson = $('#lesson-'+str).val();
         var knowledge = $('#knoledge-'+str).val();
         var difficulty = $('#difficulty-'+str).val();
         var question = $('#question-'+str).val();
         var answer = $('#answer-'+str).val();
         
         $.ajax({
         type:"POST",
         url:"manage.php?p=edit",
         data:"year=" + year+ "&grade=" + grade + "&testtype=" + testtype+"&reference="+reference+"&textbook="+textbook+"&lesson" + lesson + "&knowledge=" +knowledge+"&difficulty="+difficulty+"&question="+question+"&answer="+answer+"$id" +id,
         success:function(data){
         viewData();
         }
         
         });
         }
         
         /*$('.btn-danger').on('click', function(){
         $(this).parents('tr').remove();
         })*/
      </script>
      <!-- Le javascript
         ================================================== -->
      <!-- Placed at the end of the document so the pages load faster -->
      <script type="text/javascript" src="../assets/js/languageHandler.js"?v=1></script>
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
   </body>
</html>