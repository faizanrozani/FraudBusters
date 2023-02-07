var button = document.getElementById("submitButton");

button.addEventListener("click", async() =>{
	var obj1 = document.getElementsByName("fname")[0].value;

    const req = new XMLHttpRequest();
	const baseUrl = "http://3.141.35.128/add/";
    const urlParams = `name=${obj1}`;
    req.open("POST", baseUrl, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(urlParams);
    req.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Got response 200!");
        }
    }
});


let btn = document.getElementById("makeReport");
btn.addEventListener("click", async () =>{
	const getReport = document.getElementById('confirmReport');
	const url = 'http://3.141.35.128/';

	try {
		const res = await fetch(url);
		const data = await res.json();
		const dataHTML = data.map(data => {
			return "<pre>" + `${data.name}` +"</pre>";
		}).join('');
		getReport.innerHTML = dataHTML;
		console.log(data[1]);
	}
	catch(err){
		console.error(err);
	}
});

