/* This function below is for confirm password */

var confirmButton = document.getElementById("cbutton");

confirmButton.addEventListener("click", async() =>{
	var password = document.getElementById("RegisterPassword")
	, confirm_password = document.getElementById("confirm_password");

	console.log(password.value)
	console.log(confirm_password.value)
	if(password.value != confirm_password.value) {
		confirm_password.setCustomValidity("Passwords Don't Match");
	} else {
		confirm_password.setCustomValidity('');
	}

	password.onchange = validatePassword;
	confirm_password.onkeyup = validatePassword;
});