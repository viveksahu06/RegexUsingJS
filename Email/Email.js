function isValidEmail(email) {
    const emailRegex = /^abc([._,+-][a-zA-Z0-9]+)?@bridgelabz\.[a-zA-Z]{2,}(\.[a-zA-Z]{2})?$/;
    return emailRegex.test(email);
}

console.log(isValidEmail("abc@bridgelabz.co")); // true
console.log(isValidEmail("abc.xyz@bridgelabz.com")); // true
console.log(isValidEmail("user@bridgelabz.in")); // true
console.log(isValidEmail("xyz@bridgelabz.co.in")); // true
console.log(isValidEmail("abc@xyz.co.in")); // false
console.log(isValidEmail("user@randomlabz.com")); // false
console.log(isValidEmail("abc-xyz@bridgelabz.com")); // true
console.log(isValidEmail("abc_xyz@bridgelabz.in")); // true
console.log(isValidEmail("abc+xyz@bridgelabz.com.au")); // true
console.log(isValidEmail("abc,xyz@bridgelabz.co.uk")); // true
console.log(isValidEmail("abc@bridgelabz.com")); // true
console.log(isValidEmail("abc@bridgelabz.co.a")); // false
console.log(isValidEmail("abc@bridgelabz.")); // false