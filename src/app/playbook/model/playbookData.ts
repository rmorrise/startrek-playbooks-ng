import {Move} from './move';

export interface PlaybookData {
  playbookName: string
  firstMove: Move
  optionalMoves: Move[]
}
