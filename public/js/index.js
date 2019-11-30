//animações barra de pesquisa e botão de pesquisa
document.getElementById('barraPesquisa').addEventListener('focus', function(){
    document.getElementById('bt-buscar').style.width = '100%';
});
document.getElementById('barraPesquisa').addEventListener('focusout', function(){
    document.getElementById('bt-buscar').style.width = '10rem';
});

//Chamada Foundation (Funcionamento do Modal - Foundation Reveal)
$(document).foundation();

//more click
$('.card-profile-stats-more-link').click(function(e){
    e.preventDefault();
    if ( $(".card-profile-stats-more-content").is(':hidden') ) {
      $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
      $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
    $(this).next('.card-profile-stats-more-content').slideToggle();
  });

//Validação de Senhas antes de levar para o servidor
var senha = document.getElementById("senha");
var confirmSenha = document.getElementById("confirmSenhaUser");

function validarSenhas() {
    // console.log("Senha: " + senha.value);
    // console.log("Senha Confirm: " + confirmSenha.value);
    if (senha.value != confirmSenha.value) {
        confirmSenha.setCustomValidity("Senhas Diferentes!");
        confirmSenha.style.borderColor="#f00";
    } else {
        confirmSenha.setCustomValidity("");
        confirmSenha.style.borderColor="#ccc";
    }
}
confirmSenha.onkeyup = validarSenhas;