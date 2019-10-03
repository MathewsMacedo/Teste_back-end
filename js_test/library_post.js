function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

function getGUID(){
var guid = window.localStorage.getItem('guid');
if (guid!=null){

}else{
    window.localStorage.setItem('guid', uuidv4());
    guid = window.localStorage.getItem('guid');
}
 return guid;
}

function getURL(){

  return window.location.pathname.toString();


}


function getFullDate(){

    var data = new Date();
    var d = String(data.getDate()).padStart(2, '0');
    var m = String(data.getMonth() + 1).padStart(2, '0'); //January is 0!
    var a = data.getFullYear();
    var h = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();
    var mil = data.getMilliseconds();

    return data = a+'-'+m+'-'+d+' '+h+':'+min+':'+sec+':'+mil;


}
 
  console.log(getGUID());
  console.log(getURL());
  console.log(getFullDate());