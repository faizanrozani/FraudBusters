var confirmButton = document.getElementById("loginbutton");
var check = false;

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    confirmButton.addEventListener("click", async () => {

        var obj1 = document.getElementsByName("email")[0].value;
        var obj2 = document.getElementsByName("password")[0].value;

        console.log(obj1);
        console.log(obj2);
        const getReport = document.getElementById('confirmReport');
        const url = 'http://127.0.0.1:8000/getUser/';

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                if (data[i].email == obj1 && data[i].password == obj2) {
                    const goodmsg = "Logged In";
                    const goodmsg2 = document.getElementById('loggedIn');
                    goodmsg2.innerHTML = goodmsg;
                    check = true;
                    myFunction(obj1);
                }
            }
            if (check == false) {
                const goodmsg = "Wrong Email or Password";
                const goodmsg2 = document.getElementById('loggedIn');
                goodmsg2.innerHTML = goodmsg;
            }
        }
        catch (err) {
            console.error(err);
        }
    });
});

function myFunction(obj1) {
    if (check == true) {
        localStorage.setItem("email", obj1);
    }
}
