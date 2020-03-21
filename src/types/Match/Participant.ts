import { Stats } from 'types/Match/Stats';
import { Timeline } from 'types/Match/Timeline';

export type Participant = {
  spell1Id: number;
  participantId: number;
  timeline: Timeline;
  spell2Id: number;
  teamId: number;
  stats: Stats;
  championId: number;
};
