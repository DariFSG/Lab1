// Через атрибут
// Функція для обробки відправки форми через кнопку
function handleFormSubmit(event) {
    // Запобігаємо стандартній дії відправки форми
    event.preventDefault(); 

    console.log("Obrobnik podii Atrybut:");
    console.log("Current Target:", event.currentTarget);

    // Отримання значень полів форми
    var initials = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var order = document.getElementById('comment').value;

    // Приклад виводу в консоль
    console.log("Initials:", initials);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Order:", order);
}

// Через властивість
document.addEventListener('DOMContentLoaded', function() {
    // Отримання кнопки по ідентифікатору
    var submitButton = document.getElementById('submitButton');

    // Обробник події через addEventListener
    submitButton.addEventListener('click', function(event) {
        // Запобігаємо стандартній дії відправки форми
        event.preventDefault();
        // Консоль
        console.log("Obrobnik podii Vlastyvist:");
        console.log("Current Target:", event.currentTarget);

        // Отримання значень полів форми
        var initials = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var order = document.getElementById('comment').value;

        // Приклад виводу в консоль
        console.log("Initials:", initials);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Order:", order);
    });
});
//Виконання функції після завантаження сторінки
document.addEventListener('DOMContentLoaded', function() {
    // Отримання кнопки по ідентифікатору
    var submitButton = document.getElementById('submitButton');

    // Оголошення об'єкта, який буде обробляти події
    var eventHandler = {
        handleEvent: function(event) {
            // Запобігаємо стандартній дії відправки форми
            event.preventDefault();

            console.log("Obrobnik podii handleEvent:");
            console.log("Current Target:", event.currentTarget);

            // Отримання значень полів форми
            var initials = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var order = document.getElementById('comment').value;

            // Приклад виводу в консоль
            console.log("Initials:", initials);
            console.log("Email:", email);
            console.log("Phone:", phone);
            console.log("Order:", order);
        }
    };
    // Обробник події через метод handleEvent
    submitButton.addEventListener('click', eventHandler);
});