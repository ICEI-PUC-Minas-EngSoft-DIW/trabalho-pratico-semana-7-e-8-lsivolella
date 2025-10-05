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

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const livro = livros.find(l => l.id === id);

if (livro) {
    document.getElementById("livro-imagem").src = livro.imagem;
    document.getElementById("livro-titulo").textContent = livro.titulo;
    document.getElementById("livro-subtitulo").textContent = livro.subtitulo;
    document.getElementById("livro-autor").textContent = livro.autor;
    document.getElementById("livro-ano").textContent = livro.ano;
    document.getElementById("livro-paginas").textContent = livro.paginas;
} else {
    document.querySelector("main").innerHTML = "<p>Livro não encontrado.</p>";
}