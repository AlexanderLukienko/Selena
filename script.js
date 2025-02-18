function startCountdown(duration) {
    let timer = duration;
    setInterval(function () {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        document.getElementById('hours').textContent = (hours < 10 ? "0" : "") + hours;
        document.getElementById('minutes').textContent = (minutes < 10 ? "0" : "") + minutes;
        document.getElementById('seconds').textContent = (seconds < 10 ? "0" : "") + seconds;

        if (--timer < 0) { timer = duration; }
    }, 1000);
}
startCountdown(9 * 3600 + 33 * 60 + 32);

// Делаем карточки выбора продукта полностью кликабельными
document.querySelectorAll('.package-options .card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.package-options .card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        card.querySelector('input').checked = true; // Выбираем радио-кнопку
    });
});