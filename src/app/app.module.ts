import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DataService} from './playbook/data.service';
import {HttpClientModule} from '@angular/common/http';
import {PlaybookModule} from './playbook/playbook.module';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';
import { NumberToWordsPipe } from './pipes/number-to-words.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlaybookModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
