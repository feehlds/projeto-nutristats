import { PerfilDialogComponent } from './../perfil-dialog/perfil-dialog.component';
import { NodeService } from 'src/app/node.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.css']
})
export class ProfileBoxComponent implements OnInit {

  user: any;

  constructor(private router: Router, private ns: NodeService, private modalService: NgbModal) { }

  ngOnInit() {
    console.log(sessionStorage.getItem('user'))
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  logOut() {
    this.ns.logout().subscribe(resp   => {  
      sessionStorage.removeItem('user');
      sessionStorage.clear();
      this.router.navigate(['']);
    },
      err => {
        alert('Ops, aconteceu algo estranho :o');
      });
  }

  openPerfilDialog(){
    let modal = this.modalService.open(PerfilDialogComponent, {size: 'lg'})
    modal.componentInstance.user = this.user;
  }

}
