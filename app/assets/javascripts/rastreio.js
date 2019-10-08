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

  return window.location.href.toString();


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

    return data = d+'-'+m+'-'+a+' '+h+':'+min+':'+sec+':'+mil;


}
 

function getJson(){

  var contato = {"rastreio":{"guid": getGUID(),"url":getURL(),"data":getFullDate() }}
  return contato;

}


function setPost(url, json) {
 fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    });
}


 

     

window.document.onload =  document.addEventListener("turbolinks:load", function() {

  console.log(getJson());
    var host = window.location.hostname.toString();
  if(host == 'localhost'){
    setPost('http://localhost:3000/rastreios',getJson());
  }else{
  setPost('http://rastreios.herokuapp.com/rastreios',getJson());
  }

});