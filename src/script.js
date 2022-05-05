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
        "up": '\t&#9650;',
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


function build_keyboard() {
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
            key.innerHTML = Array.isArray(symbols[row][s]) ? symbols[row][s][0] : symbols[row][s];
            keyboard_row.append(key);
        }
    }
}

build_keyboard();

