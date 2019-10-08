const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    function returnCharMorse(charBinary){
        let charMorseFun = "";
        for (let i=0; i<charBinary.length; i=i+2) {               
            let twoLetters = charBinary[i]+charBinary[i+1];
            if (twoLetters == "00") {
                charMorseFun = charMorseFun + "";
            } else if (twoLetters == "10") {
                charMorseFun = charMorseFun + ".";
            } else if (twoLetters == "11") {
                charMorseFun = charMorseFun + "-";
            } else {
                charMorseFun = charMorseFun + "*";
             }
        }
        return charMorseFun;       
    }

    let arrayCharBinary = [];
    let charMorse="";
    let sentence = "";
    let key;

    for (let i=0; i<expr.length; i=i+10) {
        let char = expr.slice(i, i+10);
        arrayCharBinary.push(char);
    }  

    for (let i=0; i<arrayCharBinary.length; i++) {
        key = returnCharMorse(arrayCharBinary[i]); 
        if (key == '*****') {
            sentence = sentence + ' ';
        } else {
            sentence = sentence+MORSE_TABLE[key];        
            charMorse = "";
        }
    }
    return sentence;
}

module.exports = {
    decode
}