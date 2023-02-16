var button = document.getElementById("submitButton");

let page = ["hello"];
let report = ["hello"];


chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
	url = tabs[0].url;
	page = url.split("?");
	report = page[0].split("/");

	const websites = ["www.amazon.com", "www.ebay.com", "www.walmart.com", "www.target.com", "www.aliexpress.us"];

	for (let i = 0; i < websites.length; i++) {
		if (websites[i] == report[2] & page.length >= 2) {

			button.addEventListener("click", async () => {
				var obj1 = document.getElementsByName("fname")[0].value;

				const req = new XMLHttpRequest();
				const baseUrl = "http://127.0.0.1:8000/add/";
				const urlParams = `name=${obj1}&url=${page[0]}`;
				req.open("POST", baseUrl, true);
				req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				req.send(urlParams);
				req.onreadystatechange = function () { // Call a function when the state changes.
					if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
						console.log("Got response 200!");
					}
				}
			});

			addEventListener('DOMContentLoaded', async () => {
				const getReport = document.getElementById('confirmReport');
				const url = 'http://127.0.0.1:8000/';

				try {
					const res = await fetch(url);
					const data = await res.json();
					console.log(data);
					/*
					const dataHTML = data.map(data => {
						return "<pre>" + `${data.url}` +"</pre>";
					}).join('');
					*/

					var counter = 0;
					for (let i = 0; i < data.length; i++) {
						if (data[i].url == page[0]) {
							counter++;
						}
					}
					const dataHTML = counter;
					getReport.innerHTML = dataHTML;
				}
				catch (err) {
					console.error(err);
				}
			});

			addEventListener('DOMContentLoaded', async () => {
				const getReport = document.getElementById('confirmReport2');
				const url = 'http://127.0.0.1:8000/';

				try {
					const res = await fetch(url);
					const data = await res.json();
					console.log(data);
					/*
					const dataHTML = data.map(data => {
						return "<pre>" + `${data.url}` +"</pre>";
					}).join('');
					*/

					var counter = 0;
					for (let i = 0; i < data.length; i++) {
						counter++;
					}
					const dataHTML = counter;
					getReport.innerHTML = dataHTML;
				}
				catch (err) {
					console.error(err);
				}
			});
		}
	}
});