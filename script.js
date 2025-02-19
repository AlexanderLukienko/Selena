function startCountdown(duration) {
    let timer = duration;

    function updateCountdown() {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        // Проверяем, есть ли элементы на странице
        let hoursElement = document.getElementById('hours');
        let minutesElement = document.getElementById('minutes');
        let secondsElement = document.getElementById('seconds');

        if (hoursElement && minutesElement && secondsElement) {
            hoursElement.textContent = (hours < 10 ? "0" : "") + hours;
            minutesElement.textContent = (minutes < 10 ? "0" : "") + minutes;
            secondsElement.textContent = (seconds < 10 ? "0" : "") + seconds;
        }

        if (--timer < 0) {
            timer = duration; // Можно остановить таймер, если нужен однократный отсчёт
        }
    }

    updateCountdown(); // Запускаем сразу, чтобы не ждать 1 секунду
    setInterval(updateCountdown, 1000); // Обновляем каждую секунду
}

// Запускаем таймер на 9 часов 33 минуты 32 секунды
document.addEventListener("DOMContentLoaded", function () {
    startCountdown(9 * 3600 + 33 * 60 + 32);
});

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