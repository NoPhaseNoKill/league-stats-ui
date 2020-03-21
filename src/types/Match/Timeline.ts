import { PerMinuteDeltas } from 'types/Match/Deltas/PerMinuteDeltas';

export type Timeline = {
  lane: string;
  participantId: number;
  goldPerMinDeltas: PerMinuteDeltas;
  creepsPerMinDeltas: PerMinuteDeltas;
  xpPerMinDeltas: PerMinuteDeltas;
  role: string;
  damageTakenPerMinDeltas: PerMinuteDeltas;
};
