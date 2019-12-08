Feature: Realizar cadastro no sistema
    Eu, enquanto usuário, 
    quero realizar cadastro no sistema,
    para ter acesso a área de dietas.

    Scenario: Devo conseguir criar uma conta na aplicação com usuário não existente
		Given Que eu acessar o site de nutristats
		And Eu apertar em "Login"
    And aperta em "Cadastrar"
    And prencher o formulário com os campos: nome: "luis", email: "luis@luis.com", data de nascimento: "16/01/2000", Sexo; "Masculino", nomeUsuario: "luis", senha: "12345"  confirmarSenha: "12345"
		