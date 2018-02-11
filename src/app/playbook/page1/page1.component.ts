import {Component, Input, OnInit} from '@angular/core';
import {PlaybookData} from '../model/playbookData';

@Component({
  selector: 'st-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  @Input('playbook-data') data: PlaybookData

  constructor() { }

  ngOnInit() {
  }

  get requiredMovesPlural(): boolean {
    return this.data.requiredMoves.length > 1
  }
}
