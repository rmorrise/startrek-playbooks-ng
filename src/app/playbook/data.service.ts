import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PlaybookData} from './model/playbookData';
import {map} from 'rxjs/operators';
import {StandardMoves} from './model/standardMoves';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  getPlaybookData(file: string): Observable<PlaybookData> {
    return this.http.get(`assets/data/playbooks/${file}.json`).pipe(map((data: any) => {
      return (<PlaybookData>data)
    }));
  }

  getStandardMoves(): Observable<StandardMoves> {
    return this.http.get('assets/data/standard-moves.json').pipe(map((data: any) => {
      return (<StandardMoves>data)
    }))
  }
}
