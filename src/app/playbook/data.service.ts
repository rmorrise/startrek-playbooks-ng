import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PlaybookData} from './model/playbookData';
import {map} from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  getPlaybookData(file: string) {
    return this.http.get(`assets/data/${file}.json`).pipe(map((data: any) => {
      return (<PlaybookData>data)
    }));
  }
}
