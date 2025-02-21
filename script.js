function startCountdown(duration) {
    let timer = duration;

    function updateCountdown() {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        let hoursElement = document.getElementById('hours');
        let minutesElement = document.getElementById('minutes');
        let secondsElement = document.getElementById('seconds');

        if (hoursElement && minutesElement && secondsElement) {
            hoursElement.textContent = (hours < 10 ? "0" : "") + hours;
            minutesElement.textContent = (minutes < 10 ? "0" : "") + minutes;
            secondsElement.textContent = (seconds < 10 ? "0" : "") + seconds;
        }

        if (--timer < 0) {
            timer = duration;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Запускаем таймер
document.addEventListener("DOMContentLoaded", function () {
    startCountdown(9 * 3600 + 33 * 60 + 32);
});

// Делаем карточки товаров кликабельными
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.package-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.package-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            const input = card.querySelector('input');
            if (input) {
                input.checked = true;
            }
        });
    });

    document.querySelectorAll('.package-card input').forEach(input => {
        input.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
});

// Список изображений отзывов
const reviews = [
    "images/review1.png",
    "images/review2.png",
    "images/review3.png",
    "images/review4.png",
    "images/review5.png",
    "images/review6.png",
];

let currentReview = 0;

// Функция для показа следующего отзыва
function nextReview() {
    let reviewImage = document.getElementById("review-image");
    reviewImage.style.opacity = "0";

    setTimeout(() => {
        currentReview = (currentReview + 1) % reviews.length;
        reviewImage.src = reviews[currentReview];
        reviewImage.style.opacity = "1";
    }, 300);
}

// Функция для показа предыдущего отзыва
function prevReview() {
    let reviewImage = document.getElementById("review-image");
    reviewImage.style.opacity = "0";

    setTimeout(() => {
        currentReview = (currentReview - 1 + reviews.length) % reviews.length;
        reviewImage.src = reviews[currentReview];
        reviewImage.style.opacity = "1";
    }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
    const orderButton = document.getElementById("order-button");

    if (orderButton) {
        orderButton.addEventListener("click", function () {
            // 📌 Telegram username (убираем @)
            const telegramUsername = "Selena_Astrology";

            // 📌 Ссылка на чат в Telegram без сообщения
            const telegramURL = `https://t.me/${telegramUsername}`;

            // 📌 Открываем Telegram
            window.open(telegramURL, "_blank");
        });
    } else {
        console.warn("Кнопка 'Заказать' не найдена!");
    }
});