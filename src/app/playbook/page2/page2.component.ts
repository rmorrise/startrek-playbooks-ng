import {Component, Input, OnInit} from '@angular/core';
import {PlaybookData} from '../model/playbookData';

@Component({
  selector: 'st-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  @Input('playbook-data') data: PlaybookData

  constructor() { }

  ngOnInit() {
  }
}
