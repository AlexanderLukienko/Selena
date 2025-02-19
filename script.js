// Таймер обратного отсчёта
function startCountdown(duration) {
    let timer = duration;
    setInterval(function () {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        // ✅ Исправляем ID, чтобы таймер работал
        document.getElementById('hours').textContent = (hours < 10 ? "0" : "") + hours;
        document.getElementById('minutes').textContent = (minutes < 10 ? "0" : "") + minutes;
        document.getElementById('seconds').textContent = (seconds < 10 ? "0" : "") + seconds;

        if (--timer < 0) { timer = duration; }
    }, 1000);
}
startCountdown(9 * 3600 + 33 * 60 + 32);

document.addEventListener("DOMContentLoaded", function () {
    // Делаем карточки товаров кликабельными
    document.querySelectorAll('.package-card').forEach(card => {
        card.addEventListener('click', () => {
            // ✅ Удаляем выделение у всех карточек перед установкой нового
            document.querySelectorAll('.package-card').forEach(c => c.classList.remove('selected'));

            // ✅ Добавляем выделение к выбранной карточке
            card.classList.add('selected');

            // ✅ Отмечаем radio-кнопку внутри карточки
            const input = card.querySelector('input');
            if (input) {
                input.checked = true;
            }
        });
    });

    // ✅ Останавливаем всплытие события клика на input, чтобы не мешал карточке
    document.querySelectorAll('.package-card input').forEach(input => {
        input.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
});