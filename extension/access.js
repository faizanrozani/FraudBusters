var x = localStorage.getItem("email").split('@');
var p = document.getElementById("displayName");
p.innerHTML = x[0];