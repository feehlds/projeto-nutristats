Feature: Realizar uma busca de nutrientes
    Eu, enquanto um usuário da aplicação
	Devo conseguir acessar a pagina inicial da aplicação 
	De forma que eu realizar uma busca de nutrientes

	Scenario: Devo conseguir acessar a página inicial nutristats
		Given Que eu acessar o site de nutristats
		When Eu digitar um alimento como "feijão"
		And Eu clicar em "Buscar"
		Then Devo ser apresentado os nutrientes relacionados a "feijão"
		And Eu consultar as informções do nutriente clicando em "Info"
		Then Deve ser apresentado a "KCAL" do nutriente