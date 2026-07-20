document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Коментар:', document.getElementById('user-text').value);
    alert('Повідомлення успішно відправлено.');
});

// 1. e.preventDefault() — запобігає перезавантаженню сторінки при надсиланні форми (стандартна поведінка браузера).
// 2. Зчитує значення з трьох полів форми:
//    • user-text — текст коментаря
// 3. Виводить у консоль ці значення.
// 4. Показує alert з повідомленням: "Повідомлення успішно відправлено для Софії та Ноель!"