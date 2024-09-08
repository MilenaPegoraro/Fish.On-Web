function validCadasPesc() {
    const nome = document.getElementById('nome-pescador').value.trim();
    const email = document.getElementById('email-pescador').value.trim();
    const senha = document.getElementById('senha-pescador').value.trim();
    const mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = ''; // Limpar mensagens anteriores
    
    if (nome === "") {
        mensagem.innerHTML += "<p>Preencha o campo de nome</p>";
    } else if (email === "") {
        mensagem.innerHTML += "<p>Preencha o campo de e-mail</p>";
    } else if (senha === "") {
        mensagem.innerHTML += "<p>Preencha o campo de senha</p>";
    } else {
        // Armazenar dados no localStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push({ nome, email, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        // Redirecionar para login
        window.alert("Cadastro realizado com sucesso!");
        window.location.href = "./login.html";
    }
}
