// Скрипт для обновления времени на часах
setInterval(() => {
    d = new Date(); // object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; // converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

// JavaScript код вашего сайта

// Получаем ссылки на кнопку корзины и контейнер с товарами в корзине
const cartButton = document.getElementById('cartButton');
const cartItems = document.getElementById('cartItems');

// Обработчик события для открытия и закрытия списка товаров в корзине
cartButton.addEventListener('click', function() {
    cartItems.classList.toggle('hidden');
});

// Новый JavaScript код для изменения текста при наведении на картинку
document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector('.image-container');
    const contactText = document.getElementById('contact-text');
    const originalText = 'Все вопросы к этому молодому (сомнительно) человеку (не менее сомнительно)';
    const newText = 'Он никогда не спит. Он говорит, что никогда не умрет. Он танцует и на свету, и в тени, и все его любят. Он никогда не спит, этот Судья. Он танцует и танцует. И говорит, что никогда не умрет';
    
    let typingTimer;
    let lineIndex = 0;
    let charIndex = 0;

    function clearText() {
        clearTimeout(typingTimer);
        contactText.innerHTML = '';
        lineIndex = 0;
        charIndex = 0;
    }

    function typeWriter(text, element) {
        const lines = text.split('. '); // Разбиваем текст на предложения
        function typing() {
            if (lineIndex < lines.length) {
                let line = lines[lineIndex] + (lineIndex < lines.length - 1 ? '. ' : '.'); // Добавляем точку, если это не последняя строка
                if (charIndex < line.length) {
                    element.innerHTML += line.charAt(charIndex);
                    charIndex++;
                    typingTimer = setTimeout(typing, 50); // скорость печатания символов
                } else {
                    element.innerHTML += '<br>'; // добавляем перенос строки после полной строки
                    charIndex = 0; // сбрасываем индекс символа
                    lineIndex++;
                    typingTimer = setTimeout(typing, 500); // задержка перед печатанием следующей строки
                }
            }
        }
        typing();
    }

    imageContainer.addEventListener('mouseover', function() {
        clearText();
        typeWriter(newText, contactText);
    });

    imageContainer.addEventListener('mouseout', function() {
        clearText();
        typeWriter(originalText, contactText);
    });
});
