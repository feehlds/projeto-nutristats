import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NodeService } from 'src/app/node.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-dialog',
  templateUrl: './cadastro-dialog.component.html',
  styleUrls: ['./cadastro-dialog.component.css']
})
export class CadastroDialogComponent implements OnInit {
  passoDialog: number;
  failToSignUp = {
    fail: false,
    message: ''
  };
  nomeCompleto: string = "";
  email: string = "";
  dataNasc: string = "";
  sexo: string = "";
  userName: string = "";
  pass: string = "";
  passConfirm: string = "";

  constructor(private ns: NodeService, public activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
    this.passoDialog = 1;
  }

  mudarPassoDialogCadastro(acao: string) {
    if (acao == 'prox' && this.passoDialog == 1) { this.passoDialog = 2; }
    else if (acao == 'prox' && this.passoDialog == 2) { this.cadastrar(); }
    else if (acao == 'ant') { this.passoDialog = 1; }
  }

  cadastrar() {
    //Senhas não vazias e iguais
    if (this.userName.length > 0) {
      //Usuário não vazio
      if (this.pass.length > 0 && this.pass === this.passConfirm) {
        let loginUser = {
          "login": this.userName,
          "pass": this.pass,
          "nomeCompleto": this.nomeCompleto,
          "email": this.email,
          "dataNasc": this.dataNasc,
          "sexo": this.sexo
        };
        this.ns.cadastro(loginUser).subscribe(data => {
          alert('Cadastrado!');
          let logar = {
            "login": loginUser.login,
            "pass": loginUser.pass
          };

          this.ns.login(logar).subscribe(user =>{
            sessionStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['']);
          },
          err => {
            alert('deu bosta');
          });
        
          this.failToSignUp.fail = false;
        },
          err => {
            alert('Deu erro');
          });
      }
      else {
        this.failToSignUp.fail = true;
        this.failToSignUp.message = "As senhas estão diferentes"
      }
    }
    else {
      this.failToSignUp.fail = true;
      this.failToSignUp.message = "Usuário deve ser preenchido";
    }
  }
}
