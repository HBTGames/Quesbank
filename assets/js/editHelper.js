
//last $id click before modified
var lastID;
var id;
//fillblank: 0  interaction:1 listening:2 multichoice:3  others:4 reading:5 readingmi:6 readingmu:7 sentence:8 translation:9 writing:10
var previousTagID = -1;
var currentTagID;
var editedSinceTagChange = false;

function memorizeID (id){
  previousTagID = currentTagID;
lastID = id;
}

function setRecentUpdateText(){
  editedSinceTagChange = true;
  eraseCookie("editedSinceTagChange");
  createCookie("editedSinceTagChange",editedSinceTagChange,180);
  eraseCookie("recentUpdateID");
  createCookie("recentUpdateID",lastID,180);
}

function loadRecentUpdateText(currentTagID){
  editedSinceTagChange = readCookie("editedSinceTagChange");
  editedSinceTagChange = parseBool(editedSinceTagChange);
  if(editedSinceTagChange == null){
    editedSinceTagChange = false;
  }
  previousTagID =   readCookie("previousTagID");
  previousTagID = parseInt(previousTagID);
lastID = readCookie("recentUpdateID");
console.log(lastID);
if(currentTagID != previousTagID){
  editedSinceTagChange = false;
  eraseCookie("editedSinceTagChange");
  createCookie("editedSinceTagChange",editedSinceTagChange,180);
}

if(lastID !== null && currentTagID == previousTagID && editedSinceTagChange == true ){
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

function parseBool(val) {
if(val != null){
 return val === true || val === "true"
}
   }
