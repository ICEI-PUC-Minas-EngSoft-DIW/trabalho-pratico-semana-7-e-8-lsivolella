const livros = [
  {
    id: 1,
    titulo: "A Game of Thrones",
    subtitulo: "A Song of Ice and Fire — Book 1",
    autor: "George R. R. Martin",
    ano: 1996,
    imagem: "https://picsum.photos/seed/agot/230/120",
    paginas: 694
  },
  {
    id: 2,
    titulo: "A Clash of Kings",
    subtitulo: "A Song of Ice and Fire — Book 2",
    autor: "George R. R. Martin",
    ano: 1998,
    imagem: "https://picsum.photos/seed/acok/230/120",
    paginas: 768
  },
  {
    id: 3,
    titulo: "A Storm of Swords",
    subtitulo: "A Song of Ice and Fire — Book 3",
    autor: "George R. R. Martin",
    ano: 2000,
    imagem: "https://picsum.photos/seed/ass/230/120",
    paginas: 973
  },
  {
    id: 4,
    titulo: "A Feast for Crows",
    subtitulo: "A Song of Ice and Fire — Book 4",
    autor: "George R. R. Martin",
    ano: 2005,
    imagem: "https://picsum.photos/seed/affc/230/120",
    paginas: 753
  },
  {
    id: 5,
    titulo: "A Dance with Dragons",
    subtitulo: "A Song of Ice and Fire — Book 5",
    autor: "George R. R. Martin",
    ano: 2011,
    imagem: "https://picsum.photos/seed/adwd/230/120",
    paginas: 1016
  }
];

function carregarConteudo(id) {
  window.location.href = `html/detalhes.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", popularHome);

function criarCartao(livro) {
  const artigo = document.createElement("article");
  artigo.classList.add("video-box");

  artigo.innerHTML = `
    <img class="video-image" src="${livro.imagem}" alt="${livro.titulo}">
    <h4 class="video-title">${livro.titulo}</h4>
    <p class="video-author">${livro.autor}</p>
    <div class="video-footer">
      <p class="video-views">${livro.ano}</p>
      <p class="video-upload-age">${livro.paginas}</p>
    </div>
  `;

  artigo.addEventListener("click", () => carregarConteudo(livro.id));
  return artigo;
}

function popularHome() {
  const containers = document.querySelectorAll('.videos-container');

  if (!containers.length) return;

  const containerRecomendados = containers[0];
  containerRecomendados.innerHTML = ""
  livros.forEach((livro, index) => {
    containerRecomendados.appendChild(criarCartao(livro, index));
  });

  if (containers[1]) {
    const containerRecentes = containers[1];
    containerRecentes.innerHTML = ""
    livros.forEach((livro, index) => {
      containerRecentes.appendChild(criarCartao(livro, index));
    });
  }
}
