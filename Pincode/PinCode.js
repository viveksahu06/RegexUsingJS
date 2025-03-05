function isValidPinCode(pin) {
    const pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pin);
}

console.log(isValidPinCode("A400088")); // false
console.log(isValidPinCode("110001")); // true
console.log(isValidPinCode("000123")); // false
console.log(isValidPinCode("1234")); // false
console.log(isValidPinCode("98765a")); // false
console.log(isValidPinCode("560078")); // true