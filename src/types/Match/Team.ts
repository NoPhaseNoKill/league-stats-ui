import { Ban } from 'types/Match/Ban';

export type Team = {
  firstDragon: boolean;
  bans: Ban[];
  firstInhibitor: boolean;
  win: string;
  firstRiftHerald: boolean;
  firstBaron: boolean;
  baronKills: number;
  riftHeraldKills: number;
  firstBlood: boolean;
  teamId: number;
  firstTower: boolean;
  vilemawKills: number;
  inhibitorKills: number;
  towerKills: number;
  dominionVictoryScore: number;
  dragonKills: number;
};
