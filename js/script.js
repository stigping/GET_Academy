function isDateValid(dato) {
    const year = dato.substring(6);
    const month = dato.substring(3, 5);
    const day = dato.substring(0, 2);

    return checkLength(dato)
        && checkPunctuation(dato)
        && checkYear(year)
        && checkMonth(month)
        && isLeapYear(year)
        && checkDay(day)
    
}

function checkLength(fullDato) {
    return fullDato.length >= 10;
}

function checkPunctuation(fullDato) {
    return fullDato.charAt(2) == '.' && fullDato.charAt(5) == '.';
}

function checkYear(year) {
    return year.length === 4 && year >= '0000' && year <= '9999';
} 

function checkMonth(month) {
    return month.length === 2 && month >= '01' && month <= '12';
} 

function isLeapYear(year){
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

function checkDay(day) {
    day.length === 2 && day >= '01' && day <= '28';
    if (day == '29' && isLeapYear() == true) return
}