let answer;

inputText = '';
const morseCodeJSON = {'a':'.-', 'b':'-...', 'c':'-.-.', 'd':'-..', 'e':'.', 'f':'..-.', 'g':'--.', 'h':'....',
'i':'..', 'j':'.---', 'k':'-.-', 'l':'.-..', 'm':'--', 'n':'-.', 'o':'---', 'p':'.--.',
'q':'--.-', 'r':'.-.', 's':'...', 't':'-', 'u':'..-', 'v':'...-', 'w':'.--', 'x':'-..-',
'y':'-.--', 'z':'--..', ' ':' ', 'æ':'·−·−', 'ø':'−−−·', 'å':'·−−·−'};

let count = Object.keys(morseCodeJSON).length;

// https://www.w3schools.com/js/tryit.asp?filename=tryjson_array_nested