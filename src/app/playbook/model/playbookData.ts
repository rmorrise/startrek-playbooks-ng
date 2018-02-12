import {Move} from './move';
import {StatLineDescriptor} from './statLineDescriptor';

export interface PlaybookData {
  playbookName: string
  requiredMoves?: Move[]
  numOptionalMoves: number
  optionalMoves: Move[]
  descriptors: StatLineDescriptor[]
  roleFluff: string
  quote: string
}
