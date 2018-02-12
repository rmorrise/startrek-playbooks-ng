import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Observable';
import {PlaybookData} from '../model/playbookData';
import 'rxjs/add/observable/empty';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {StandardMoves} from '../model/standardMoves';

@Component({
  selector: 'st-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.css']
})
export class PlaybookComponent implements OnInit {
  $playbookData: Observable<PlaybookData>;
  $standardMoves: Observable<StandardMoves>;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.$playbookData = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      return this.dataService.getPlaybookData(params.get('file'))
    }));
    this.$standardMoves = this.dataService.getStandardMoves()
  }
}
