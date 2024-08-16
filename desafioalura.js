
let textInput = document.querySelector('#texto');
let outInput = document.querySelector('#output');

function criptografar() {
    let texto = textInput.value;
    let resultCripto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    outInput.innerHTML = 
        '<textarea readonly id="result-text">' + resultCripto + '</textarea>' +
        '<button class="bt3" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    let texto = textInput.value;
    let resultDescripto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    outInput.innerHTML = 
        '<textarea readonly id="result-text">' + resultDescripto + '</textarea>' +
        '<button class="bt3" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    let textoCop = document.querySelector('#result-text');
    textoCop.select();
    navigator.clipboard.writeText(textoCop.value)
        .then(() => {
            alert("Texto copiado");
        })
        .catch(err => {
            console.error("Falha ao copiar o texto: ", err);
        });
}