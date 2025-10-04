document.querySelectorAll('.video-image').forEach(element => {
   element.addEventListener('click', carregarConteudo);
});

function carregarConteudo()
{
    window.location.href = 'html/detalhes.html'
    console.log("carregar conteudo");
}
