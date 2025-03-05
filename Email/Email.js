function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@bridgelabz\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

console.log(isValidEmail("abc@bridgelabz.co")); // true
console.log(isValidEmail("abc.xyz@bridgelabz.com")); // true
console.log(isValidEmail("user@bridgelabz.in")); // true
console.log(isValidEmail("xyz@bridgelabz.co.in")); // true
console.log(isValidEmail("abc@xyz.co.in")); // false
console.log(isValidEmail("user@randomlabz.com")); // false