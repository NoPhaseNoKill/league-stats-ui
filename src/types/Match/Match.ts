import { ParticipantIdentity } from 'types/Match/ParticipantIdentity';
import { Team } from 'types/Match/Team';
import { Participant } from 'types/Match/Participant';

export type Match = {
  seasonId: number;
  queueId: number;
  gameId: number;
  participantIdentities: ParticipantIdentity[];
  gameVersion: string;
  platformId: string;
  gameMode: string;
  mapId: number;
  gameType: string;
  teams: Team[];
  participants: Participant[];
  gameDuration: number;
  gameCreation: number;
};
