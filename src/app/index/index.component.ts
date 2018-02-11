import { Component, OnInit } from '@angular/core';

export interface PlaybookFile {
  name: string
  file: string
}

@Component({
  selector: 'st-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  files: PlaybookFile[] = [
    {name: 'The Captain', file: 'captain'},
    {name: 'The XO', file: 'xo'},
    {name: 'The Chief Engineer', file: 'engineer'},
    {name: 'Tactical Officer', file: 'tactical'}
    // <!--<a href="playbooks/tactical"><li>Tactical Officer</li></a>-->
    // <!--<a href="playbooks/medic"><li>The Chief Medic</li></a>-->
    // <!--<a href="playbooks/operations"><li>Operations Officer</li></a>-->
    // <!--<a href="playbooks/science"><li>Science Officer</li></a>-->
  ]

  constructor() { }

  ngOnInit() {
  }

}
