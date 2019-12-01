//Salvar user
//var user;

//Chamada Foundation (Funcionamento do Modal - Foundation Reveal)
$(document).foundation();

//more click
$('.card-profile-stats-more-link').click(function (e) {
  e.preventDefault();
  if ($(".card-profile-stats-more-content").is(':hidden')) {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
  } else {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
  }
  $(this).next('.card-profile-stats-more-content').slideToggle();
});

//JQuery and Ajax event listener
$(function () {
  $('#postLogin').on('submit', function (e) {
    e.preventDefault();
    var data = $(this).serialize();
    $.post('/usuarios/login', data, function (message) {
      if (message.message) {
        showAlert(message.message)
      } else if (message) {        
        location.reload();
      }
    });
  });
});


//Alert de erro
function showAlert(message) {
  let display = document.getElementById("alertMessage").style.display;
  if (display == "none") {
    document.getElementById("alertMessage").style.display = 'block';
    document.getElementById("errorMessage").innerHTML = message
  }
  else if (display == 'block' && message){
    document.getElementById("errorMessage").innerHTML = message
  }
  else
    document.getElementById("alertMessage").style.display = 'none'
}

//Validação de Senhas antes de levar para o servidor
var senha = document.getElementById("senha");
var confirmSenha = document.getElementById("confirmSenhaUser");

function validarSenhas() {
  if (senha.value != confirmSenha.value) {
    confirmSenha.setCustomValidity("Senhas Diferentes!");
    confirmSenha.style.borderColor = "#f00";
  } else {
    confirmSenha.setCustomValidity("");
    confirmSenha.style.borderColor = "#ccc";
  }
}
confirmSenha.onkeyup = validarSenhas;