function isDateValid(dato) {
    const year = dato.substr(6);
    return checkLength(dato)
        && checkPunctuation(dato)
        && checkYear(dato)

    
}

function checkLength(fullDato) {
    return fullDato.length >= 10 
}

function checkPunctuation(fullDato) {
    return fullDato.charAt(2) == '.' && fullDato.charAt(5) == '.' 
}

function checkYear(year) {
    return year.length === 4 && year >= '0000' && year <= '9999'
} 













// var isValid = false;

// function isThisAValidDate(riktigDato) {
//     var dot1Position = riktigDato.indexOf(".");
//     var dot2Posistion = riktigDato.substring(dot1Position + 1).indexOf(".");
//     var checkIsOnlyNumbersAndDots = riktigDato.replace(/\./g, '');
//     var checkLengthYearIsFour = riktigDato.substring(dot2Posistion + 4);
//     var checkDayDateIsValid = parseInt(riktigDato.substring(0, 2));
//     var checkMonthDateIsValid = parseInt(riktigDato.substring(dot2Posistion + 1, dot2Posistion + 3));

//     isValid = dateLength(riktigDato);

//     isValid = checkdot(dot1Position, dot2Posistion);

//     isValid = onlyDigitsValid(checkIsOnlyNumbersAndDots);

//     isValid = fourCharOnly(checkLengthYearIsFour);

//     isValid = dateValid(checkDayDateIsValid, checkMonthDateIsValid, checkLengthYearIsFour);

//     isValid = monthIsValid(checkMonthDateIsValid);

//     return isValid;
// }

// function dateLength(riktigDato) {
//     return riktigDato.length == 10 ? true : false;
// }

// function checkdot(dot1Position, dot2Posistion) {
//     return isValid == true && dot1Position == 2 && dot2Posistion == 2 ? true : false;
// }

// function onlyDigitsValid(checkIsOnlyNumbersAndDots) {
//     return isValid == true && checkIsOnlyNumbersAndDots.match(/^[0-9]+$/) ? true : false;
// }

// function fourCharOnly(checkLengthYearIsFour) {
//     return isValid == true && checkLengthYearIsFour.length == 4 && checkLengthYearIsFour >= 0000 ? true : false;
// }

// function monthIsValid(checkMonthDateIsValid) {
//     return isValid == true && checkMonthDateIsValid >= 0 && checkMonthDateIsValid <= 12 ? true : false;
// }

// function max31DaysInMonth(monthValid) {
//     if (monthValid == 1 || monthValid == 3 || monthValid == 5 || monthValid == 7 || monthValid == 8 || monthValid == 10 || monthValid == 12) {
//         return true;
//     } else return false;
// }

// function max30DaysInMonth(monthValid) {
//     if (monthValid == 4 || monthValid == 6 || monthValid == 9 || monthValid == 11) {
//         return true;
//     } else return false;
// }

// function isItMonth2(checkDayDateIsValid, checkMonthDateIsValid) {
//     if (checkDayDateIsValid >= 1 && checkDayDateIsValid <= 28 && checkMonthDateIsValid == 2) return true;
// }

// function isItLeapYear(checkDayDateIsValid, checkMonthDateIsValid, checkLengthYearIsFour) {
//     var isItLeapYear = ((checkLengthYearIsFour % 4 == 0) && (checkLengthYearIsFour % 100 != 0)) || (checkLengthYearIsFour % 400 == 0);
//     if (checkDayDateIsValid == 29 && checkMonthDateIsValid == 2 && isItLeapYear == true) {
//         return true;
//     } else return false;
// }

// function dateValid(checkDayDateIsValid, checkMonthDateIsValid, checkLengthYearIsFour) {
//     if (isValid == true && checkDayDateIsValid >= 1 && checkDayDateIsValid <= 31 && max31DaysInMonth(checkMonthDateIsValid) ||
//         isValid == true && checkDayDateIsValid >= 1 && checkDayDateIsValid <= 30 && max30DaysInMonth(checkMonthDateIsValid) ||
//         isValid == true && isItMonth2(checkDayDateIsValid, checkMonthDateIsValid) ||
//         isValid == true && isItLeapYear(checkDayDateIsValid, checkMonthDateIsValid, checkLengthYearIsFour)) {
//         return true;
//     } else return false;
// }