import { MinuteDelta } from './MinuteDelta';

export type PerMinuteDeltas = {
  [MinuteDelta.ZERO_TO_TEN]: number;
  [MinuteDelta.TEN_TO_TWENTY]: number;
  [MinuteDelta.TWENTY_TO_THIRTY]: number;
  [MinuteDelta.THIRTY_TO_FINAL]: number;
};
