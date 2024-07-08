function criptografar() {
    let texto = document.getElementById('main__esquerdo__texto').value;
    let textoUm;
    let textoDois;
    let textoTres;
    let textoQuatro;
    let textoCinco;
    if (texto.includes("e")) {
        textoUm = texto.replace(/e/g, "enter");
    } else {
        textoUm = texto;
    }
    if (textoUm.includes("i")) {
        textoDois = textoUm.replace(/i/g, "imes");
    } else {
        textoDois = textoUm;
    }
    if (textoDois.includes("a")) {
        textoTres = textoDois.replace(/a/g, "ai");
    } else {
        textoTres = textoDois;
    }
    if (textoTres.includes("o")) {
        textoQuatro = textoTres.replace(/o/g, "ober");
    } else {
        textoQuatro = textoTres;
    }
    if (textoQuatro.includes("u")) {
        textoCinco = textoQuatro.replace(/u/g, "ufat");
    } else {
        textoCinco = textoQuatro;
    }
    let campo = document.getElementById('p');
    campo.innerHTML = `<label class="main__direito__paragrafo">${textoCinco}</label>`;
    limparTexto();
    troca();
    return (textoCinco);
}

function descriptografar() {
    let texto = document.getElementById('main__esquerdo__texto').value;
    let textoUm;
    let textoDois;
    let textoTres;
    let textoQuatro;
    let textoCinco;
    if (texto.includes("enter")) {
        textoUm = texto.replace(/enter/g, "e");
    } else {
        textoUm = texto;
    }
    if (textoUm.includes("imes")) {
        textoDois = textoUm.replace(/imes/g, "i");
    } else {
        textoDois = textoUm;
    }
    if (textoDois.includes("ai")) {
        textoTres = textoDois.replace(/ai/g, "a");
    } else {
        textoTres = textoDois;
    }
    if (textoTres.includes("ober")) {
        textoQuatro = textoTres.replace(/ober/g, "o");
    } else {
        textoQuatro = textoTres;
    }
    if (textoQuatro.includes("ufat")) {
        textoCinco = textoQuatro.replace(/ufat/g, "u");
    } else {
        textoCinco = textoQuatro;
    }
    let campo = document.getElementById('p');
    campo.innerHTML = `<label class="main__direito__paragrafo">${textoCinco}</label>`;
    limparTexto();
    troca();
    return textoCinco;
}

function limparTexto() {
    let campo = document.getElementById('main__esquerdo__texto');
    campo.value = "";
}

function troca() {
    let texto = document.getElementById('texto');
    let principal = document.getElementById('principal');

    if (texto.classList.contains('desativado')) {
        texto.classList.remove('desativado');
        texto.classList.add('block');
    } else {
        texto.classList.add('desativado');
        texto.classList.remove('block');
    }

    if (principal.classList.contains('block')) {
        principal.classList.remove('block');
        principal.classList.add('desativado');
    } else {
        principal.classList.add('block');
        principal.classList.remove('desativado');
    }
}

function copiar() {
    let textoCopiado = document.getElementById("p");
    var botao = document.getElementById("copiar");
    botao.addEventListener("click", function () {
        navigator.clipboard.writeText(textoCopiado.innerText);
        alert("Texto copiado");
        location.reload();
    })
}