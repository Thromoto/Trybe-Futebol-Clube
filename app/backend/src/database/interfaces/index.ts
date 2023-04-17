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

export interface IMatchesTeams extends IMatches {
  homeTeam: ITeams;
  awayTeam: ITeams;
}

export interface IStatistics {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}
