let contatos = [];
let indiceAtual = -1;
let usuarioFixo = 'admin';
let senhaFixa = '1234';

function login() {
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    
    if (usuario === usuarioFixo && senha === senhaFixa) {
    document.getElementById('tela-login').classList.add('tela-escondida');
    document.getElementById('tela').classList.remove('tela-escondida');
    } else {
    alert('Usuário ou senha inválidos!');
    }
}

function incluir() {
    limparFormulario();
    habilitarEdicao(true);
}

function editar() {
    habilitarEdicao(true);
}

function salvar() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;

    let novoContato = { nome, sobrenome, endereco, telefone };

    if (indiceAtual === -1) {
    contatos.push(novoContato);
    } else {
    contatos[indiceAtual] = novoContato;
    }

    cancelar();
}

function cancelar() {
    limparFormulario();
    habilitarEdicao(false);
}

function excluir() {
    if (indiceAtual >= 0) {
    contatos.splice(indiceAtual, 1);
    limparFormulario();
    indiceAtual = -1;
    }
}

function primeiro() {
    if (contatos.length > 0) {
    indiceAtual = 0;
    mostrarContato(indiceAtual);
    }
}

function anterior() {
    if (indiceAtual > 0) {
    indiceAtual--;
    mostrarContato(indiceAtual);
    }
}

function proximo() {
    if (indiceAtual < contatos.length - 1) {
    indiceAtual++;
    mostrarContato(indiceAtual);
    }
}

function ultimo() {
    if (contatos.length > 0) {
    indiceAtual = contatos.length - 1;
    mostrarContato(indiceAtual);
    }
}

function mostrarContato(indice) {
    let contato = contatos[indice];
    document.getElementById('nome').value = contato.nome;
    document.getElementById('sobrenome').value = contato.sobrenome;
    document.getElementById('endereco').value = contato.endereco;
    document.getElementById('telefone').value = contato.telefone;
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('telefone').value = '';
}

function habilitarEdicao(editar) {
    document.getElementById('salvar-btn').classList.toggle('tela-escondida', !editar);
    document.getElementById('cancelar-btn').classList.toggle('tela-escondida', !editar);
}