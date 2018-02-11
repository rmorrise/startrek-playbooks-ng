import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { PlaybookComponent } from './playbook/playbook.component';
import { MoveComponent } from './move/move.component';
import {NumberToWordsPipe} from '../pipes/number-to-words.pipe';
import {PipesModule} from '../pipes/pipes.module';
import { Page2Component } from './page2/page2.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [Page1Component, PlaybookComponent, MoveComponent, Page2Component],
  exports: [PlaybookComponent]
})
export class PlaybookModule { }
