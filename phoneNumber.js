let phoneNumber = '662-234-5751';

let areaCode = phoneNumber.slice(0, 3);
let centralOffice = phoneNumber.slice(4, 7);
let lineNumber = phoneNumber.slice(8, 12);
let number = areaCode.concat(centralOffice, lineNumber);

console.log(phoneNumber);
console.log(areaCode);
console.log(centralOffice);
console.log(lineNumber);
console.log(number);
