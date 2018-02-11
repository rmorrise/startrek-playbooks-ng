import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { PlaybookComponent } from './playbook/playbook.component';
import { MoveComponent } from './move/move.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Page1Component, PlaybookComponent, MoveComponent],
  exports: [PlaybookComponent]
})
export class PlaybookModule { }
