
function onclick_Randomiser() {
    //Picks time
    var number = parseInt(Math.floor(Math.random() * 180) + 30);
    //Picks random Subject
    Array = Math.floor(Math.random() * Work.length);
    //Displays random time & subject
    document.getElementById("RSubject").innerHTML = "Random Subject: " + Work[Array].Subject;
    document.getElementById("RTime").innerHTML = number;
}
function onclick_Countdown() {
    //Gets random time
    Countdown = document.getElementById("RTime").innerHTML;
    //Times it by 60 to get seconds
    var Timeleft = Countdown * 60;
    //Displays finnished or counts down more
    var Timer = setInterval(
        function () {
        if (Timeleft <= 0) {
            clearInterval(Timer);
            alert("Finished");
            document.getElementById("countdown").innerHTML = "Finished";
        } else {
            document.getElementById("countdown").innerHTML = Timeleft + " seconds remaining";
        }
        Timeleft -= 1;
    }, 1000);
}
