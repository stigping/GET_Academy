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