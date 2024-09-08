function login() {
    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value.trim();
    const mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = ''; // Limpar mensagens anteriores

    if (email === "") {
        mensagem.innerHTML += "<p>Preencha o campo de e-mail</p>";
    } else if (senha === "") {
        mensagem.innerHTML += "<p>Preencha o campo de senha</p>";
    } else {
        // Verificar dados no localStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario = usuarios.find(user => user.email === email && user.senha === senha);

        if (usuario) {
            window.location.href = "./home.html";
        } else {
            mensagem.innerHTML += "<p>E-mail ou senha inválidos</p>";
        }
    }
}
