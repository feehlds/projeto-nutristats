import { NodeService } from 'src/app/node.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-perfil-dialog',
  templateUrl: './perfil-dialog.component.html',
  styleUrls: ['./perfil-dialog.component.css']
})
export class PerfilDialogComponent implements OnInit {

  user;
  alimentacao;
  peso;
  altura;
  constructor(private ns: NodeService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    
    if(this.user.perfil.peso){
      this.peso = this.user.perfil.peso
    }
    
    if(this.user.alimentacao){
      this.alimentacao = this.user.alimentacao;
    } else
      this.alimentacao = '';
  }

  updatePefil(){
    if(this.alimentacao != "Escolha uma opção"){
      this.user.perfil.alimentacao = this.alimentacao;
    }
    console.log(this.user)
    this.ns.updateUsuario(this.user);
  }

}
