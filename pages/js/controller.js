function translate(text) {
    let tilbakeStuff = morseCodeJSON[text];
    return tilbakeStuff.value;
}

function makeText(tekst) {
    console.log('I funksjon: ', inputText, inputText.length);
    for (let i = 0; i < tekst.length; i++) {
    inputText = tekst[i];
    translate(inputText);
 }
}
/*
//console.log('Sjekker funksjonen translate= ',translate('b'),translate(' '),translate('a'));
//if(JSON.stringify(morseCodeJSON)==JSON.stringify(annenArray)) */
