import { NodeService } from 'src/app/node.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.css']
})
export class ProfileBoxComponent implements OnInit {
  
  user: any;

  constructor(private router: Router, private ns: NodeService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
  }

  logOut(){
    sessionStorage.clear();
    console.log(sessionStorage);
    this.ns.logout().subscribe(status => {
      console.log('STAAAAAAAAATUS ', status)
      if(status == 200){
        
        this.router.navigate(['']);
      }
    });
    
  }

}
