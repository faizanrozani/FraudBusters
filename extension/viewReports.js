chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    url = tabs[0].url;
    page = url.split("?");
    report = page[0].split("/");
    window.onload = async() => {

        const url = 'http://3.141.35.128/';

        try {
            const res = await fetch(url);
            const data = await res.json();
            var mainContainer = document.getElementById("container");
            console.log("got here");
            for (let i = 0; i < data.length; i++) {
                if (data[i].url == page[0]) {
                    console.log("got here 2");
                    var div = document.createElement("div");
                    div.innerHTML = 'Name: ' + data[i].name.split(",")[0] + "<br>" + ' Created: ' + data[i].created_at.split("T")[0] + "<br>" + ' Details: ' + data[i].reportText + "<br><br>";
                    console.log(div.innerHTML);
                    mainContainer.appendChild(div);
                }
            }

        }
        catch (err) {
            console.error(err);
        }
    }
});