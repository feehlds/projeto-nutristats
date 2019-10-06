//animações barra de pesquisa e botão de pesquisa
document.getElementById('barraPesquisa').addEventListener('focus', function(){
    document.getElementById('bt-buscar').style.width = '100%';
});
document.getElementById('barraPesquisa').addEventListener('focusout', function(){
    document.getElementById('bt-buscar').style.width = '10rem';
});
