function update() {
    const from = document.getElementById('typeFrom').value;
    const to = document.getElementById('typeTo').value;
    const input = document.getElementById('input').value;
    const inputType = document.getElementById('inputType');
    const resultType = document.getElementById('resultType');

    // Validation
    if (!isValidInput(input, from)) {
        document.getElementById('res').value = "Invalid Input";
        return;
    }

    inputType.textContent = `Enter {${getTypeName(from)}}:`;
    resultType.textContent = `Result {${getTypeName(to)}}:`;

    const result = convert(input, from, to);
    document.getElementById('res').value = result;
}

function reverse() {
    const from = document.getElementById('typeTo').value;
    const to = document.getElementById('typeFrom').value;
    const input = document.getElementById('res').value;

    if (!isValidInput(input, from)) {
        document.getElementById('input').value = "Invalid Input";
        return;
    }

    const result = convert(input, from, to);
    document.getElementById('input').value = result;
    update();
}

function isValidInput(input, base) {
    const regex = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9A-Fa-f]+$/
    };
    return regex[base].test(input);
}

function getTypeName(value) {
    switch (value) {
        case '2': return 'Binary';
        case '8': return 'Octal';
        case '10': return 'Decimal';
        case '16': return 'HexaDecimal';
        default: return '';
    }
}

function convert(input, from, to) {
    const decimal = parseInt(input, from);
    return decimal.toString(to).toUpperCase();
}

function clearFields() {
    document.getElementById('input').value = '';
    document.getElementById('res').value = '';
}

function swapValues() {
    const from = document.getElementById('typeFrom').value;
    const to = document.getElementById('typeTo').value;
    document.getElementById('typeFrom').value = to;
    document.getElementById('typeTo').value = from;
    update();
}
