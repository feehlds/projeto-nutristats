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

function requestLogin(reqBody) {
  $.ajax({
    type: "POST",
    url: '/usuarios/login',
    data: reqBody,
    dataType: "json",
    success: function (data, textStatus, xhr) {
      location.reload()
    },
    complete: function (xhr, textStatus) {
      if (xhr.responseText && xhr.status == 401) {
        let res = JSON.parse(xhr.responseText)
        // data.form contains the HTML for the replacement form
        showAlert(res.message)
      } else  
        location.reload()
    }
  });
}

//JQuery and Ajax event listener
$(function () {
  $('#postLogin').on('submit', function (e) {
    e.preventDefault();
    var data = $(this).serialize()
    requestLogin(data);
  });
});

//Checar colesterol
function showColesterol(col) {
  console.log(col)
  if (col >= 0)
    document.getElementById('colesterol').innerHTML = col + '(mg)';
  else
    document.getElementById('colesterol').innerHTML = col;
}

//Alert de erro
function showAlert(message) {
  let display = document.getElementById("alertMessage").style.display;
  if (display == "none") {
    document.getElementById("alertMessage").style.display = 'block';
    document.getElementById("errorMessage").innerHTML = message
  }
  else if (display == 'block' && message) {
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