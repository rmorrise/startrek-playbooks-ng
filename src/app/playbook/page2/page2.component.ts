import {Component, Input, OnInit} from '@angular/core';
import {PlaybookData} from '../model/playbookData';
import {StandardMoves} from '../model/standardMoves';

@Component({
  selector: 'st-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  @Input('playbook-data') data: PlaybookData
  @Input('standard-moves') standardMoves: StandardMoves

  constructor() { }

  ngOnInit() {
  }
}
