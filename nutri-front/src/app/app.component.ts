import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nutri-front';

  constructor(private router: Router){
    
  }

  ngOnInit(){
    console.log(sessionStorage);
    if(sessionStorage.getItem('user')){
      this.router.navigate(['AppUser']);
    } else{
      this.router.navigate(['']);
    }
  }
}
