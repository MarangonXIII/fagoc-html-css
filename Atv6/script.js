function validarFormulario() {
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    let formValido = true;

    // Limpa as mensagens de erro
    document.getElementById('nomeErro').style.display = 'none';
    document.getElementById('emailErro').style.display = 'none';
    document.getElementById('mensagemErro').style.display = 'none';

    // Remove classes de erro
    document.getElementById('nome').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('mensagem').classList.remove('error');

    // Validação do campo nome
    if (nome === "") {
        document.getElementById('nomeErro').style.display = 'block';
        document.getElementById('nome').classList.add('error');
        formValido = false;
    }

    // Validação do campo e-mail
    if (email === "") {
        document.getElementById('emailErro').style.display = 'block';
        document.getElementById('email').classList.add('error');
        formValido = false;
    }

    // Validação do campo mensagem
    if (mensagem === "") {
        document.getElementById('mensagemErro').style.display = 'block';
        document.getElementById('mensagem').classList.add('error');
        formValido = false;
    }

    // Se o formulário for válido, exibe o alerta de sucesso
    if (formValido) {
        alert("Mensagem enviada com sucesso!");
    }

    // Retorna falso para evitar o envio real do formulário
    return false;
}