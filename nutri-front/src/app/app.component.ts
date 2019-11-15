import { NodeService } from './node.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nutri-front';

  constructor(private nodeService: NodeService){

  }

  ngOnInit(){
    console.log('bateu');
      this.nodeService.pesquisaAlimentos('feijão').subscribe(result => {
      console.log(result);
    });
  }
}
