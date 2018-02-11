import {Move} from './move';

export interface PlaybookData {
  playbookName: string
  requiredMoves: Move[]
  optionalMoves: Move[]
}
