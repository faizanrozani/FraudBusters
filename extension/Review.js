var reviewButton = document.getElementById("reviewSubmit");

reviewButton.addEventListener("click", async () => {
    var userRating = document.getElementById("reviewBox").value;
    var ratingReason = document.getElementById("detailedReview").value;


    
    const url = "http://127.0.0.1:8000/getReview/";
    
    const res = await fetch(url);
    const data = await res.json();

    
    const req = new XMLHttpRequest();
    const baseUrl = "http://127.0.0.1:8000/addReview/";
    const urlParams = `rating=${userRating}&reason=${ratingReason}`;
    req.open("POST", baseUrl, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(urlParams);
    req.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Got response 200!");
        }
	}

});