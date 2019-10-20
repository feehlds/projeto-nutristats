class Usuario {
    constructor(nome, email, sexo, dataNascimento, nomeUsuario, senha, peso, altura){
        this.Nome = nome;
        this.Email = email;
        this.Sexo = sexo;
        this.DataNascimento = dataNascimento;
        this.NomeUsuario = nomeUsuario;
        this.Senha = senha;
        this.Peso = peso;
        this.Altura = altura;
    }

    getNome(){
        return this.Nome;
    }
    setNome(nome){
        this.Nome = nome;
    }
    getEmail(){
        return this.getEmail;
    }
    setEmail(email){
        this.setEmail = email;
    }
    getSexo(){
        return this.Sexo;
    }
    setSexo(sexo){
        this.Sexo = sexo;
    }
    getDataNascimento(){
        return this.DataNascimento;
    }
    setDataNascimento(dtaNascimento){
        this.DataNascimento = dtaNascimento;
    }

    getNomeUsuario(){
        return this.NomeUsuario;
    }
    setNomeUsuario(nomeUsuario){
        this.NomeUsuario = nomeUsuario;
    }
    getSenha(){
        return this.Senha;
    }
    setSenha(senha){
        this.Senha = senha;
    }
    getAltura(){
        return this.altura;
    }
    setAltura(altura){
        this.Altura = altura;
    }
    getPeso(){
        return this.Peso;
    }
    setPeso(peso){
        this.Peso = peso; 
    }
  }
  //export default Usuario;
  module.exports = {Usuario: Usuario};

