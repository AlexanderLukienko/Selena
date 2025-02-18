function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        document.getElementById('countdown').textContent =
            (hours < 10 ? "0" : "") + hours + ":" +
            (minutes < 10 ? "0" : "") + minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds;

        if (--timer < 0) { timer = duration; }
    }, 1000);
}
startCountdown(9 * 3600 + 33 * 60 + 32);

