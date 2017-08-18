
//last $id click before modified
var lastID;
var id;
function memorizeID (id){
lastID = id;
console.log(lastID);
}

function setRecentUpdateText(){
  eraseCookie("recentUpdateID");
  createCookie("recentUpdateID",lastID,180);
  console.log("update text!");
}

function loadRecentUpdateText(){
lastID = readCookie("recentUpdateID");
console.log(lastID);
if(lastID != null){
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
}


}
