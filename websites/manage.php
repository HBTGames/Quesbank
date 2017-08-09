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
         max-width: 60%;
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
      <div class="container-narrow">
         <div class="masthead">
            <ul class="nav nav-pills pull-right">
               <li ><a href="index.php" class="lang" key="home">Home</a></li>
               <li class="active" ><a href="manage.php" class="lang" key="manage" >Manage</a></li>
               <li ><a href="contact.html?language=42"  class="lang" key="contact">Contact</a></li>
            </ul>
            <h3 class="muted">QuesBank</h3>
         </div>
         <hr>
         <div id="manageall">
       <a class="btn btn-default" style="margin:10px;" href="managefillblank.php" role="button">Manage Fill Blank</a>
       <a class="btn btn-default" style="margin:10px;" href="managemultichoice.php" role="button">Manage Multi Choice</a>
       <a class="btn btn-default" style="margin:10px;" href="manageinteraction.php" role="button">Manage Interaction</a>
       <a class="btn btn-default" style="margin:10px;" href="managesentence.php" role="button">Manage Sentence</a>
       <a class="btn btn-default" style="margin:10px;" href="managereadingmu.php" role="button">Manage Reading Multi (wanxing)</a>
       <a class="btn btn-default" style="margin:10px;" href="managereading.php" role="button">Manage Reading</a>
       <a class="btn btn-default" style="margin:10px;" href="managereadingmi.php" role="button">Manage Reading Mission</a>
       <a class="btn btn-default" style="margin:10px;" href="managetranslation.php" role="button">Manage Translation</a>
       <a class="btn btn-default" style="margin:10px;" href="managelistening.php" role="button">Manage Listening</a>
       <a class="btn btn-default" style="margin:10px;" href="managewriting.php" role="button">Manage Writing</a>
       <a class="btn btn-default" style="margin:10px;" href="manageothers.php" role="button">Manage Others</a>
       </div>
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
  
      <hr>
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
         td = tr[i].getElementsByTagName("td")[9];
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
         var knowledge = $('#knowledge-'+str).val();
         var difficulty = $('#difficulty-'+str).val();
         var question = $('#question-'+str).val();
         var answer = $('#answer-'+str).val();
         
         $.ajax({
         type:"POST",
         url:"manage.php?p=edit",
         data:"year=" + year+ "&grade=" + grade + "&testtype=" + testtype+"&reference="+reference+"&textbook="+textbook+"&lesson" + lesson + "&knowledge=" +knowledge+"&difficulty="+difficulty+"&question="+question+"&answer="+answer+"&id" +id,
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
      <script type="text/javascript" src="../assets/js/jquery-1.7.1.min.js"></script>
      <script type="text/javascript" src="../assets/js/jquery-ui-1.8.17.custom.min.js"></script>
      <script type="text/javascript" src="../assets/js/jspdf.debug.js"></script>
   </body>
</html>