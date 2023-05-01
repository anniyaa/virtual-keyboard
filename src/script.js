const symbols = {
   'first_row': {
        '`': ['`', 'ё'],
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
        'zero': '0',
        '-': '-',
        '=': '=',
        'backspace': 'BACKSPACE'
   },
    'second_row': {
        'tab': 'TAB',
        'q': ['q', 'й'],
        'w': ['w', 'ц'],
        'e': ['e', 'у'],
        'r': ['r', 'к'],
        't': ['t', 'е'],
        'y': ['y', 'н'],
        'u': ['u', 'г'],
        'i': ['i', 'ш'],
        'o': ['o', 'щ'],
        'p': ['p', 'з'],
        '[': ['[', 'х'],
        ']': [']', 'ъ'],
        '\\': '\\',
        'del': 'DEL'
    },
    'third_row': {
        'capslock': 'CAPSLOCK',
        'a': ['a', 'ф'],
        's': ['s', 'ы'],
        'd': ['d', 'в'],
        'f': ['f', 'а'],
        'g': ['g', 'п'],
        'h': ['h', 'р'],
        'j': ['j', 'о'],
        'k': ['k', 'л'],
        'l': ['l', 'д'],
        ';': [';', 'ж'],
        "'": ["'", 'э'],
        'enter': 'ENTER'
    },
    'fourth_row': {
        'shift': 'SHIFT',
        'z': ['z', 'я'],
        'x': ['x', 'ч'],
        'c': ['c', 'с'],
        'v': ['v', 'м'],
        'b': ['b', 'и'],
        'n': ['n', 'т'],
        'm': ['m', 'ь'],
        ',': [',', 'б'],
        '.': ['.', 'ю'],
        '/': ['/', '.'],
        "up": '&#9650;',
        'shift2': 'SHIFT'
    },
    'fifth_row': {
        'ctrl': 'CTRL',
        'win': 'WIN',
        'alt': 'ALT',
        'space': 'SPACE',
        'alt2': 'ALT',
        'left': '&#9668;',
        'down': '&#9660;',
        'right': '&#9658;',
        'ctrl2': 'CTRL'
    }
};

let lang = localStorage.getItem("lang") || 'en';

let build_keyboard = () => {
    let current_lang = lang === 'en' ? 0 : 1;

    const textarea_div = document.createElement('div');
    textarea_div.classList.add('textarea-div');
    document.querySelector('body').append(textarea_div);
    const textarea_field = document.createElement('textarea');
    textarea_field.type = 'text';
    textarea_div.append(textarea_field);

    const keyboard_div = document.createElement('div');
    document.querySelector('body').append(keyboard_div);
    keyboard_div.classList.add('keyboard-field');
    for (let row in symbols) {
        const keyboard_row = document.createElement('div');
        document.querySelector('.keyboard-field').append(keyboard_row);
        keyboard_row.classList.add('keyboard-row');
        for (let s in symbols[row]) {
            const key = document.createElement('div');
            key.classList.add('key');
            key.classList.add(`${s}`);
            key.innerHTML = Array.isArray(symbols[row][s]) ? symbols[row][s][current_lang] : symbols[row][s];
            keyboard_row.append(key);
        }
    }
    const lang_info = document.createElement('p');
    lang_info.innerHTML = 'The keyboard shortcut for changing language: ctrl + shift';
    lang_info.style.color = 'black';
    document.querySelector('body').append(lang_info);


    document.querySelector('textarea').focus();

    document.querySelectorAll('.key').forEach(k=>{
        k.addEventListener('click', function (event){
            printSomething(k.innerHTML);
        });
    })

    document.addEventListener('keydown', function (event){
        if (event.key.length>1 && (event.key !== 'Backspace')) {
            printSomething(event.key);
        }
    })
}

build_keyboard();

let shift_key = false;
let ctrl_key = false;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function printSomething (key) {
    document.querySelector('textarea').focus();
    let textarea = document.querySelector('textarea');
    if (key.length === 1) {
        textarea.value += key;
    } else if (key.toLowerCase()==='backspace') {
        textarea.value = textarea.value.slice(0, -1);
    } else if (key.toLowerCase()==='capslock') {
        document.querySelectorAll('.key').forEach(k=>{
            if (k.innerHTML !== k.innerHTML.toUpperCase()) {
                if (k.innerHTML.length === 1) {
                    k.innerHTML = k.innerHTML.toUpperCase();
                }
                
            } else {
                if (k.innerHTML.length === 1) {
                    k.innerHTML = k.innerHTML.toLowerCase();
                }
            }
        })
    } else if (key.toLowerCase()==='space') {
        textarea.value += ' ';
    } else if (key.toLowerCase()==='shift') {
        shift_key = true;
        sleep(1000).then(() => {
            shift_key = false;
        });
    } else if (key.toLowerCase()==='control') {
        ctrl_key = true;
        sleep(1000).then(() => {
            ctrl_key = false;
        });
    }

    if (shift_key && ctrl_key) {
        if (lang === 'en') {
            lang = 'ru';
            localStorage.setItem('lang', lang);
            location.reload();
        } else {
            lang = 'en';
            localStorage.setItem('lang', lang);
            location.reload();
        }
    }




}





