

var x = localStorage.getItem("email").split(" ");
var p = document.getElementById("displayName");
p.innerHTML = x[0] + "<br>" + x[1];

if(localStorage.getItem("email") == ""){
  var p = document.getElementById("displayName");
  p.innerHTML = "Not Signed In";
}

if(localStorage.getItem("email") != ""){
  var logoutDisplay = document.getElementById("hidelogout");
  logoutDisplay.style.display="";
  var loginDisply = document.getElementById("hide");
    loginDisply.style.display="none";
}
