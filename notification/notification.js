if("Notification" in window) {
    if(Notification.permission !== "default") {
        const title = "First Notification";
        const options = {
            body: "Hello vishwas it's your first notification"
        };
        var n = new Notification(title, options);
    } else {
        Notification.requestPermission()
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);

            })
    }
}
var call = () => {
    var timeNotify = document.querySelector('#timeNotify');
    time = new Date(timeNotify.value);
    var loop = setInterval(() => {
        console.log(Date.now() + " and " + time.getTime())
        if(Date.now() >= time.getTime()) {
            const title = "Time Notification";
            const options = {
                body: "Time is" + time.toString()
            };
            var n = new Notification(title, options);
            clearInterval(loop);
        }
    }, 1000);    
}
