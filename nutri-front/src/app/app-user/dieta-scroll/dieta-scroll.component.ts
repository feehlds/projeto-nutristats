import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dieta-scroll',
  templateUrl: './dieta-scroll.component.html',
  styleUrls: ['./dieta-scroll.component.css']
})
export class DietaScrollComponent implements OnInit {
  
  dietas;


  refeicoes;
  constructor() { }

  ngOnInit() {
    this.refeicoes = ['Café da manhã', 'Almoço', 'Café da tarde', 'Janta', 'Gordice da noite'];
  }

}
