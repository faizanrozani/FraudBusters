document.getElementById("LogoutButton").addEventListener("click", myFunction);

function myFunction(){
  if(localStorage.getItem("email") != " "){
    var x = localStorage.setItem("email", "");
    var x2 = localStorage.setItem("username", "");
    var p = document.getElementById("displayName");
    var y = "Logged Out";
    p.innerHTML = y;
    var logoutDisplay = document.getElementById("hidelogout");
    logoutDisplay.style.display="none";
    var loginDisply = document.getElementById("hide");
    loginDisply.style.display="";

  }
}