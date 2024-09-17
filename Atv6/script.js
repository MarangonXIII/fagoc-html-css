function validarFormulario() {
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    let formValido = true;

    document.getElementById('nomeErro').style.display = 'none';
    document.getElementById('emailErro').style.display = 'none';
    document.getElementById('mensagemErro').style.display = 'none';

    document.getElementById('nome').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('mensagem').classList.remove('error');

    if (nome === "") {
        document.getElementById('nomeErro').style.display = 'block';
        document.getElementById('nome').classList.add('error');
        formValido = false;
    }

    if (email === "") {
        document.getElementById('emailErro').style.display = 'block';
        document.getElementById('email').classList.add('error');
        formValido = false;
    }

    if (mensagem === "") {
        document.getElementById('mensagemErro').style.display = 'block';
        document.getElementById('mensagem').classList.add('error');
        formValido = false;
    }

    if (formValido) {
        alert("Mensagem enviada com sucesso!");
    }

    return false;
}