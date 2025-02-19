function greetUser(name) {
    console.log(`Привіт, ${name}!`);
}

function checkAge() {
    let age;
    do {
        age = prompt("Введіть ваш вік:");
        if (isNaN(age) || age.trim() === "") {
            alert("Будь ласка, введіть число!");
        } else {
            age = Number(age);
            if (age < 18) {
                alert("Доступ заборонено");
            } else {
                alert("Доступ дозволено");
            }
        }
    } while (isNaN(age) || age.trim() === "");
}

function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.body.addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomRGB();
});


checkAge();
