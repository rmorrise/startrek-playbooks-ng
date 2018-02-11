import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Observable';
import {PlaybookData} from '../model/playbookData';

@Component({
  selector: 'st-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.css']
})
export class PlaybookComponent implements OnInit {
  playbookData: Observable<PlaybookData>

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.playbookData = this.dataService.getCaptain()
  }
}
