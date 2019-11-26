import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimento-dialog',
  templateUrl: './alimento-dialog.component.html',
  styleUrls: ['./alimento-dialog.component.css']
})
export class AlimentoDialogComponent implements OnInit {
  alimento;
  currentPage;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.currentPage = 1
  }

}
