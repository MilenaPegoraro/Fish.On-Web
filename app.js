function renderizarPesqueiros(dados) {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        resultados += `
        <div class="container-catalogo">
            <h2><a href="#" target="_blank">${dado.nome}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">${dado.endereco}</p>
            <p class="descricao-meta">${dado.peixesDisponiveis}</p>
            <p class="descricao-meta">${dado.especificidades}</p>
            <p class="descricao-meta">${dado.telefone}</p>
        </div>`;
    }
    
    section.innerHTML = resultados;
}

function pesquisar() {

    let section = document.getElementById("resultados-pesquisa")
    console.log(section)
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = ""
    let nome = ""
    let descricao = ""
    let endereco = ""
    let peixesDisponiveis = ""
    let especificidades = ""
    
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        endereco = dado.endereco.toLowerCase()
        peixesDisponiveis = dado.peixesDisponiveis.toLowerCase()
        especificidades = dado.especificidades.toLowerCase()
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || endereco.includes(campoPesquisa) || peixesDisponiveis.includes(campoPesquisa) || especificidades.includes(campoPesquisa)){
            resultados += `
            <div class="container-catalogo">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.endereco}</p>
                <p class="descricao-meta">${dado.peixesDisponiveis}</p>
                <p class="descricao-meta">${dado.especificidades}</p>
                <p class="descricao-meta">${dado.telefone}</p>
            </div>`
        }
    }
    
    if (!resultados){
        resultados = '<p class="nenhum-resultado">Nada foi encontrado.</p>'
    }
    
    section.innerHTML = resultados
}

window.onload = function() {
    renderizarPesqueiros(dados);
}