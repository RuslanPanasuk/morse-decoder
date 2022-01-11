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
    let arr = [];

    for (i=0; i < expr.length; ) {
        arr.push(expr.substring([i], [i + 10]));
        i = i + 10;
    }
    
    arr = arr.map(item => {
        item = item.replace(/\*+/ig, ' ');
        item = item.replace(/11/g, '-');
        item = item.replace(/10/g, '.');
        item = item.replace(/0+/g, ' ').trim();
        return item ? MORSE_TABLE[item] : ' ';    	
    });
    return arr.join('');
}

module.exports = {
    decode
}