function isValidPinCode(pin) {
    const pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pin);
}

console.log(isValidPinCode("400088")); // true
console.log(isValidPinCode("000123")); // false
console.log(isValidPinCode("1234")); // false
console.log(isValidPinCode("98765a")); // false
console.log(isValidPinCode("560078")); // true