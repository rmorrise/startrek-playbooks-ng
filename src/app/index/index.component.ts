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
    {name: 'Tactical Officer', file: 'tactical'},
    {name: 'The Chief Medic', file: 'medic'},
    {name: 'The Operations Officer', file: 'operations'},
    {name: 'The Science Officer', file: 'science'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
