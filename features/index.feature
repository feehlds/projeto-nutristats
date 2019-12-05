 
Feature: Realizar uma busca de nutrientes
 	Eu, enquanto usuário da aplicação, 
	Quero realizar a pesquisa dos alimentos na aplicação,
	De forma que consiga visualizar a composição nutricional dos alimentos.

  
	Scenario: Devo conseguir fazer a busca de nutrientes
		Given Que eu acessar o site de nutristats
		When Eu digitar um alimento como "arroz"
		And Eu clicar em "Buscar"
		Then Devo ser redirecionado para a página "nutrientes"
		Then Devo ser apresentado os nutrientes relacionados a "arroz"
		And Eu consultar as informções do nutriente clicando em "Info"
		Then Deve ser apresentado a  descrição "arroz" do nutriente