export interface ITeams {
  id?: number;
  teamName: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUsers extends ILogin {
  id?: number;
  username: string;
  role: string;
}

export interface Matches {
  id?: number;
  inProgress: boolean;
}

export interface IMatches extends Matches {
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
}
