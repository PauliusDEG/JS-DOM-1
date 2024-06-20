console.log(document.getElementById('pirmas'))

let pirmoPirmas = document.getElementById('pirmo-pirmas')
console.log(pirmoPirmas)

console.log(document.querySelector('#antras article'))
console.log(document.querySelectorall('#antras article'))

console.log(document.querySelector('.straipsnio-paragrafas'))
console.log(document.querySelectorall('.straipsnio-paragrafas'))

let antro_pirmas_str = document.querySelector('#antras article')
console(antro_pirmas_str.querySelector('p'))

let medis = document.getElementById('pirmo-antras')
console.log('medis:', medis)
console.log('sekantis:', medis.nextElementSibling)
console.log('pries:', medis.previousElementSibling)
console.log('tevinis:', medis.parentElement)