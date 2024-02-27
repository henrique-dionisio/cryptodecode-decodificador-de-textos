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
    return mensagem.replace(/e/g, 'etr')
                   .replace(/i/g, 'ime')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'obe')
                   .replace(/u/g, 'fat');                 
}

function descriptografarMensagem(mensagemCriptografada) {
    return mensagemCriptografada.replace(/etr/g, 'e')
                                .replace(/ime/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/obe/g, 'o')
                                .replace(/fat/g, 'u');              

}

document.getElementById('btnCopiar').addEventListener('click', function () {
    copiarTexto();
});

function copiarTexto() {
    let resultado = document.querySelector('.result-area');
    resultado.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Texto copiado!');
}

function limparTexto() {
    document.querySelector('.text-area').value = '';
}


