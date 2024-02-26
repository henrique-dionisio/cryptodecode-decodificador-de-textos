function criptografar() {
    let mensagemOriginal = document.querySelector('.text-area').value;
    let mensagemCriptografada = criptografarMensagem(mensagemOriginal);
    
    document.querySelector('.result-area').value = mensagemCriptografada;
}

function descriptografar() {
    let mensagemCriptografada = document.querySelector('.text-area').value;
    let mensagemOriginal = descriptografarMensagem(mensagemCriptografada);
    
    document.querySelector('.result-area').value = mensagemOriginal;
}

function criptografarMensagem(mensagem) {
    return mensagem.replace(/e/g, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat');
}

function descriptografarMensagem(mensagemCriptografada) {
    return mensagemCriptografada.replace(/ufat/g, 'u')
                               .replace(/ober/g, 'o')
                               .replace(/ai/g, 'a')
                               .replace(/imes/g, 'i')
                               .replace(/enter/g, 'e');
}
