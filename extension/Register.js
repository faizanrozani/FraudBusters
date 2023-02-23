/* This function below is for confirm password */

var confirmButton = document.getElementById("cButton");

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {


	confirmButton.addEventListener("click", async () => {

		var password = document.getElementById("RegisterPassword")
			, confirm_password = document.getElementById("confirm_password");

		console.log(password.value)
		console.log(confirm_password.value)
		if (password.value != confirm_password.value) {
			/*confirm_password.setCustomValidity("Passwords Don't Match");*/
			const errmsg = "Passwords Don't Match";
			const errmsg2 = document.getElementById('comfirmButton');
			errmsg2.innerHTML = errmsg;
		}
		else {
			if (password.value.length < 8) {
				const errmsg = "Passwords is not of appropriate length";
				const errmsg2 = document.getElementById('comfirmButton');
				errmsg2.innerHTML = errmsg;
			}
			else {

				var obj1 = document.getElementsByName("email")[0].value;
				var obj2 = document.getElementsByName("password")[0].value;

				console.log(obj1);
				console.log(obj2);

				const req = new XMLHttpRequest();
				const baseUrl = "http://3.141.35.128/addUser/";
				const urlParams = `email=${obj1}&password=${obj2}`;
				req.open("POST", baseUrl, true);
				req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				req.send(urlParams);
				req.onreadystatechange = function () { // Call a function when the state changes.
					if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
						console.log("Got response 200!");
					}
				}
				const errmsg = "Account created";
				const errmsg2 = document.getElementById('comfirmButton');
				errmsg2.innerHTML = errmsg;
			}



		}


	});

});