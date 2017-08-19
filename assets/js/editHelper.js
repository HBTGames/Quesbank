
//last $id click before modified
var lastID;
var id;
//fillblank: 0  interaction:1 listening:2 multichoice:3  others:4 reading:5 readingmi:6 readingmu:7 sentence:8 translation:9 writing:10
var previousTagID = -1;
var currentTagID;

function memorizeID (id){
  previousTagID = currentTagID;
  console.log("id memorized is ");
lastID = id;
console.log(lastID);
}

function setRecentUpdateText(){
  eraseCookie("recentUpdateID");
  createCookie("recentUpdateID",lastID,180);
  console.log("update text!");
}

function loadRecentUpdateText(currentTagID){
  previousTagID =   readCookie("previousTagID");
  console.log("currentTagID is");
  console.log(currentTagID);
  console.log("previousTagID is");
  console.log(previousTagID);
lastID = readCookie("recentUpdateID");
console.log(lastID);
if(lastID != null && currentTagID == previousTagID){
  var tempString;
  var language = getLanguage();
  if (language == 'en') {
  tempString = '<span class="lang" key="questionNumb">Question #</span>' + lastID + '<span class="lang" key="hasBeenModified"> has been modified</span>';
}else {
  tempString =  '<span class="lang" key="questionNumb">第</span>' + lastID + '<span class="lang" key="hasBeenModified">号问题最近被编辑过</span>';
}

  if(document.getElementsByName("recentUpdateText")[0] != undefined){
    document.getElementsByName("recentUpdateText")[0].innerHTML = tempString;
  }
}else{
  previousTagID = currentTagID;
  eraseCookie("previousTagID");
  createCookie("previousTagID",previousTagID,180);
}


}
