import { NodeService } from './../../node.service';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  user: string = '';
  pass: string = '';

  failToLogin: boolean = false;

  constructor(private ns: NodeService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  login(){
    if(this.user.length > 0 && this.pass.length > 0){
      let loginUser = {
        "login": this.user,
        "pass" : this.pass
      };
      this.ns.login(loginUser).subscribe(data => {
        alert('logou!');
      }, 
      err => {
        this.failToLogin = true;
      });
    } else {
      this.failToLogin = true;
    }
  }
  openSignUpDialog(){
    
  }
  close() {
    this.failToLogin = false;
  }
}
