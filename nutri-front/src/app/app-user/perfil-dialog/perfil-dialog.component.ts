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
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if(this.user.alimentacao){
      this.alimentacao = this.user.alimentacao;
    } else
      this.alimentacao = '';
  }

  updatePefil(){

  }

}
