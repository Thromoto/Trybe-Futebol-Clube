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
