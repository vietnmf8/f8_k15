var sec = 12;
function startTimer() {
    sec -= 1;
    setVar("countDown", sec);
    if (sec < 0) {
        clearInterval(timerId);
        setVar("countDown", "Times Up");
    }
}
timerId = setInterval(startTimer, 1000);
