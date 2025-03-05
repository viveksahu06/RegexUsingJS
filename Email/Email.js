function isValidEmail(email) {
    const emailRegex = /^abc([a-zA-Z0-9._%+-]*)@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return emailRegex.test(email);
}

console.log(isValidEmail("abc@bridgelabz.co")); // true
console.log(isValidEmail("abc.xyz@bridgelabz.co.in")); // true
console.log(isValidEmail("abc123@bridgelabz.co")); // true
console.log(isValidEmail("abc-xyz@bridgelabz.co.us")); // true
console.log(isValidEmail("xyz@bridgelabz.co.in")); // false
console.log(isValidEmail("abc@xyz.co.in")); // false
console.log(isValidEmail("abc@bridgelabzcom")); // false
console.log(isValidEmail("abc@bridgelabz.")); // false
console.log(isValidEmail("abc@bridgelabz.co.a")); // false