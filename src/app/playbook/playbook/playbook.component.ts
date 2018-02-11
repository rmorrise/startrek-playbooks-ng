import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Observable';
import {PlaybookData} from '../model/playbookData';
import 'rxjs/add/observable/empty';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'st-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.css']
})
export class PlaybookComponent implements OnInit {
  $playbookData: Observable<PlaybookData>;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.$playbookData = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      let file = params.get('file');
      console.log(`file: ${file}`);

      return this.dataService.getPlaybookData(file)
    }));
  }
}
