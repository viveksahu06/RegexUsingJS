function isValidPinCode(pin) {
    const pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
    return pinRegex.test(pin);
}

console.log(isValidPinCode("400088")); // true
console.log(isValidPinCode("400 088")); // true
console.log(isValidPinCode("400088B")); // false
console.log(isValidPinCode("A400088")); // false
console.log(isValidPinCode("110001")); // true
console.log(isValidPinCode("000123")); // false
console.log(isValidPinCode("1234")); // false
console.log(isValidPinCode("98765a")); // false
console.log(isValidPinCode("560078")); // true