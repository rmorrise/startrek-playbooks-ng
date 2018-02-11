import {Component, Input, OnInit} from '@angular/core';
import {Move} from '../model/move';

@Component({
  selector: 'st-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
  @Input('move') move: Move

  constructor() { }

  ngOnInit() {
  }

}
