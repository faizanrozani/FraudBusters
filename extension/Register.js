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
			const errmsg2 = document.getElementById('confirmButton');
			errmsg2.innerHTML = errmsg;
		}
		else {
			if (password.value.length < 8) {
				const errmsg = "Passwords is not of appropriate length";
				const errmsg2 = document.getElementById('confirmButton');
				errmsg2.innerHTML = errmsg;
			}
			else {
				var obj1 = document.getElementsByName("email")[0].value;
				var obj2 = document.getElementsByName("password")[0].value;
				const url = 'http://3.141.35.128/getUser/';

				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
				var check = false;
				for (let i = 0; i < data.length; i++) {
					if (data[i].email == obj1) {
						const errmsg = "Account already exists";
						const errmsg2 = document.getElementById('confirmButton');
						errmsg2.innerHTML = errmsg;
						check = true;
						console.log(check);
					}
				}
				if (check == false) {
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
					const errmsg2 = document.getElementById('confirmButton');
					errmsg2.innerHTML = errmsg;
					window.location.href = "Login.html";
				}
			}


		}


	});

});