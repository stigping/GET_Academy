//M
let valid = null;
let dotValid = null;
let yearValid = null;
let fullDate = null;
let lengthValid = null;
let dotIndex1 = null;
let dotIndex2 =null;
let year = null;
//V



//C
function isDateValid(date) {
    fullDate = date;
    dotIndex1 = date.indexOf('.');
    dotIndex2 =
    year = date.substr(6);

    checkLength()
    checkPunctuation()

    if (lengthValid == 'true' && dotValid == 'true') valid = 'true';
    else valid = 'false';
    return valid;
}

function checkLength() {
    if (fullDate.length == 10) return lengthValid = 'true';
    else lengthValid = 'false';
}

function checkPunctuation() {
    if (fullDate.charAt(2) == '.' && fullDate.charAt(5) == '.') return dotValid = 'true';
    else dotValid = 'false';
}

function checkYear() {
    if (year.length === 4 && year >= '0000' && year <= '9999') return yearValid = 'true';
    else yearValid = 'false';
} 

// function dateLength(riktigDato) {
//     return riktigDato.length == 10 ? true : false;
// }



//var isValid = false;

//function isThisAValidDate(riktigDato) {
//var dot1Position = riktigDato.indexOf(".");
//var dot2Posistion = riktigDato.substring(dot1Position + 1).indexOf(".");
//var checkIsOnlyNumbersAndDots = riktigDato.replace(/\./g, '');
//var checkLengthYearIsFour = riktigDato.substring(dot2Posistion + 4);
//var checkDayDateIsValid = parseInt(riktigDato.substring(0, 2));
//var checkMonthDateIsValid = parseInt(riktigDato.substring(dot2Posistion + 1, dot2Posistion + 3));
// isValid = dateLength(riktigDato);

//     isValid = checkdot(dot1Position, dot2Posistion);

//     isValid = onlyDigitsValid(checkIsOnlyNumbersAndDots);

//     isValid = fourCharOnly(checkLengthYearIsFour);

//     isValid = dateValid(checkDayDateIsValid, checkMonthDateIsValid, checkLengthYearIsFour);

//     isValid = monthIsValid(checkMonthDateIsValid);

//     return isValid;
// }