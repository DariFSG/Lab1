//функція діалогу
function Dialog() {
    //спливаючі вікна
    alert("Welcome to the Handmade Products!");
    alert("Before we start, we want to ask something about you)");
    //повертає введений текст
    let username = prompt("What is your name?");
    if (username) {
        let age = prompt("How old are you?");
        if (age) {
            let interests = prompt("What do you want to find here?");
            if (interests) {
                let message = `Hello, ${username}! You are ${age} years old and you want to find ${interests} here. Is that correct?`;
                //вивід спливаючого вікна з підтвердженням
                let correct = confirm(message);
                if (correct) {
                    alert("Thank you for the confirmation! We hope you will enjoy your time here and find what you are looking for!");
                } else {
                    alert("Please reload the page and try again. Thank you!");
                }
            }
            else {
                alert("Interests are not provided.");
            }
        } else {
            alert("Age is not provided.");
        }
    } else {
        alert("Name is not provided.");
    }
}
Dialog();
//функція виведення інформації про мене
function info(firstName, lastName, position) {
    let info = `Developer Info:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nPosition: ${position}`;
    alert(info);
}
info("Daria", "Semena", "Student Developer");
//функція порівняння двох строк
function compare() {
    str1 = prompt("First:");
    str2 = prompt("Second:");
    if (str1.length > str2.length) {
        alert(`The larger string is: ${str1}`);
    } else if (str1.length < str2.length) {
        alert(`The larger string is: ${str2}`);
    } else {
        alert("Strings are equal.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    //пошук елементів за класом
    const containers = document.querySelectorAll('.container');
    for (const container of containers) {
        //виведення вміста контейнера
        alert('innerHTML: ' + container.innerHTML);
        //виведення елемента та вміста контейнера
        alert('outerHTML: ' + container.outerHTML);
        //виведення тільки текстового вмісту контейнера
        alert('textContent: ' + container.textContent);
        //отримує перший дочірній елемент контейнера
        const textNode = container.firstChild;
        //перевірка чи це текстовий вузол
        if (textNode.nodeType === Node.TEXT_NODE) {
            alert('nodeValue: ' + textNode.nodeValue);
        }
        else {
            alert('The first child is not a text node!');
        }
        container.remove();
    }   
});