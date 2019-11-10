class Usuario {
    constructor(id,nome, email, sexo, dataNascimento, nomeUsuario, senha, peso, altura){
        this.setId(id);
        this.setNome(nome);
        this.setEmail(email);
        this.setSexo(sexo);
        this.setDataNascimento(dataNascimento);
        this.setNomeUsuario(nomeUsuario);
        this.setSenha(senha);
        this.setPeso(peso);
        this.setAltura(altura);
    }
    getId(){
        return this.Id;
    }
    setId(id){
        this.Id = id;
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
        this.Email = email;
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
        return this.Altura;
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
    calcularIMC(){
        return  parseFloat((this.Peso / Math.pow(this.Altura, 2)).toFixed(2));
    }
    getIdade(){
        var atual = new Date();
        var anoAtual =  atual.getFullYear();
        var diaAtual =  atual.getDay();
        var mesAtual =  atual.getMonth();
        var dataNasc= this.DataNascimento.split("/");
        var ano = dataNasc[2];
        var mes = dataNasc[1];
        var dia = dataNasc[0];

        var idade =  anoAtual - ano;

        if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
            idade--;
        }
        return  idade;
    }
    //Taxa metabólica basal
    calcularTMB(){
        var somar, multPeso, multAltura,  multIdade;

        if(this.getSexo() =="M"){
            somar =66.5;
            multPeso = 13.75;
            multAltura = 5.003;
            multIdade = 6.755;
        }else{
            somar = 655.1
            multPeso = 9.563;
            multAltura = 1.850;
            multIdade = 4.676;
        }

        return parseFloat((somar + (multPeso * this.Peso) + (multAltura * this.Altura *100) - (multIdade * this.getIdade())).toFixed(2) );

        
    }
  }
  //export default Usuario;
  module.exports = {Usuario: Usuario};

