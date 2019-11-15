import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class SearchTableComponent implements OnInit {

  cols = [
    {field: '', header: ''},
  ];

  constructor() { }

  ngOnInit() {
  }

}
