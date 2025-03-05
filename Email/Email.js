function isValidEmail(email) {
    const emailRegex = /^abc([a-zA-Z0-9._%+-]*)@bridgelabz\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

console.log(isValidEmail("abc@bridgelabz.co")); // true
console.log(isValidEmail("abc.xyz@bridgelabz.co.in")); // true
console.log(isValidEmail("abc-123@bridgelabz.com")); // true
console.log(isValidEmail("xyz@bridgelabz.co.in")); // false
console.log(isValidEmail("abc@xyz.co.in")); // false
console.log(isValidEmail("abc@bridgelabzcom")); // false
console.log(isValidEmail("abc@bridgelabz.")); // false
console.log(isValidEmail("abc@bridgelabz.co.a")); // false
console.log(isValidEmail("abc@randomlabz.co")); // false