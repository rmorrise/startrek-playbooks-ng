import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PlaybookData} from './model/playbookData';
import {map} from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  getCaptain(): Observable<PlaybookData> {
    return this.getPlaybookData('assets/data/captain.json')
  }

  private getPlaybookData(url) {
    return this.http.get(url).pipe(map((data: any) => {
      return (<PlaybookData>data)
    }));
  }
}
