import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private ns: NodeService, public activeModal: NgbActiveModal, private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() {
    this.passoDialog = 1;
  }

  mudarPassoDialogCadastro(acao: string) {
    if (acao == 'prox' && this.passoDialog == 1) { this.passoDialog = 2; }
    else if (acao == 'prox' && this.passoDialog == 2) { this.cadastrar(); }
    else if (acao == 'ant' && this.passoDialog == 1) {
      this.activeModal.close();
      this.modalService.open(LoginDialogComponent);
    }
    else if (acao == 'ant') { this.passoDialog = 1; }
  }

  cadastrar() {
    //Senhas não vazias e iguais
    if (this.userName.length > 0) {
      //Usuário não vazio
      if (this.pass.length > 0 && this.pass === this.passConfirm) {
        var loginUser = {
          "login": this.userName,
          "pass": this.pass,
          "nomeCompleto": this.nomeCompleto,
          "email": this.email,
          "perfil": {
            "sexo": this.sexo,
            "dataNasc": this.dataNasc
          }

        };
        this.ns.cadastro(loginUser).subscribe(user => {
          sessionStorage.clear();
          sessionStorage.setItem('user', JSON.stringify(user));
          this.activeModal.close();
          this.router.navigate(['AppUser']);
        },
          err => {
            alert('Não foi possível cadastrar');
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
