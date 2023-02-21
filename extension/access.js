var x = localStorage.getItem("email").split('@');
var p = document.getElementById("displayName");
var y = "Welcome,";
p.innerHTML = y + "<br>" + x[0];