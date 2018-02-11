import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { PlaybookComponent } from './playbook/playbook.component';
import { MoveComponent } from './move/move.component';
import {NumberToWordsPipe} from '../pipes/number-to-words.pipe';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [Page1Component, PlaybookComponent, MoveComponent],
  exports: [PlaybookComponent]
})
export class PlaybookModule { }
