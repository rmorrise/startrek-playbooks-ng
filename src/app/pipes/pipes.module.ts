import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NumberToWordsPipe} from './number-to-words.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NumberToWordsPipe],
  exports: [NumberToWordsPipe]
})
export class PipesModule { }
