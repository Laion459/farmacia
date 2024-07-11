// script.js
// Atualiza o ano no copyright do rodapé
document.getElementById("anoAtual").textContent = new Date().getFullYear();

// Botão Voltar ao Topo
const voltarTopoBtn = document.getElementById("voltarTopo");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        voltarTopoBtn.style.display = "block";
    } else {
        voltarTopoBtn.style.display = "none";
    }
};

voltarTopoBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});

// Dados dos produtos - Simulando um banco de dados
const produtos = [
    {
        nome: 'Analgésico Comum',
        imagem: 'analgesico.jpg',
        descricao: 'Alivia dores de cabeça e no corpo.'
    },
    {
        nome: 'Antialérgico',
        imagem: 'antialergico.jpg',
        descricao: 'Combate sintomas de alergia.'
    },
    // Adicione mais produtos aqui
];

// Função para carregar os produtos na página
const productsGrid = document.querySelector('.products-grid');
function carregarProdutos() {
    produtos.forEach(produto => {
        let produtoHTML = `
            <div class="product">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <a href="#" class="btn">Comprar</a> 
            </div>
        `;
        productsGrid.innerHTML += produtoHTML;
    });
}

carregarProdutos(); 