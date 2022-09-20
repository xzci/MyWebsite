var a = new String("abcd")
var b = new String("abcd")
// var test = a === b;
document.write(`var a = new String("abcd")<br>`)
document.write(`var b = new String("abcd")<br>`)
document.write(`a === b ${a === b}<br>`)
document.write(`a == b ${a == b}<br>`)

document.write(`<br>`)

var a = "1"
var b = "1"
document.write(`var a = "1"<br>`)
document.write(`var b = "1"<br>`)
document.write(`a === b ${a === b}<br>`)
document.write(`a == b ${a == b}<br>`)

document.write(`<br>`)

document.write(`var a = new String("abcd")<br>`)
document.write(`var b = new String("abcd")<br>`)
document.write(`a.localeCompare(b) ${a.localeCompare(b) === 0?"True" : "False"}<br>`)