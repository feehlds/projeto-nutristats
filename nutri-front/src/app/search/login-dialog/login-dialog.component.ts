import { CadastroDialogComponent } from './../cadastro-dialog/cadastro-dialog.component';
import { NodeService } from './../../node.service';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  user: string = '';
  pass: string = '';

  failToLogin: boolean = false;

  constructor(private ns: NodeService, public activeModal: NgbActiveModal, private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.user.length > 0 && this.pass.length > 0){
      let loginUser = {
        "login": this.user,
        "pass" : this.pass
      };
      this.ns.login(loginUser).subscribe(user => {
        sessionStorage.clear();
        this.modalService.dismissAll();
        sessionStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['AppUser']);
        this.activeModal.close();
      }, 
      err => {
        this.failToLogin = true;
      });
    } else {
      this.failToLogin = true;
    }
  }
  openSignUpDialog(){
    this.activeModal.close();
    this.modalService.open(CadastroDialogComponent);
  }
  closeAlert() {
    this.failToLogin = false;
  }
}
