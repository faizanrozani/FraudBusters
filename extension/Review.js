var reviewButton = document.getElementById("reviewSubmit");

reviewButton.addEventListener("click", async () => {
    var obj1 = document.getElementsByName("textReview")[0].value;
    var obj2 = document.getElementsByName("reviewDetails")[0].value;

    console.log(obj1);
    console.log(obj2);

    const req = new XMLHttpRequest();
    const baseUrl = "http://3.141.35.128/addReview/";
    const urlParams = `rating=${obj1}&rating_reason=${obj2}`;
    req.open("POST", baseUrl, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(urlParams);
    req.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Got response 200!");
        }
	}
});