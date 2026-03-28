const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("length");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    const length = parseInt(lengthInput.value);
    
    // Parol kamida har biridan bittadan iboratligiga ishonch qilish
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Parol belgilarini aralashtirish
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    
    // Alert or modern Toast notification can be added here
    // alert("Parol nusxalandi olingan!");
    
    const icon = document.querySelector(".display img");
    const originalSrc = icon.src;
    icon.src = "https://cdn-icons-png.flaticon.com/512/190/190411.png"; // checkmark icon
    
    setTimeout(() => {
        icon.src = originalSrc;
    }, 1500);
}
