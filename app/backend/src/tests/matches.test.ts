import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import ServiceMatches from '../database/services/matches.service';
import { Model } from 'sequelize';
import Matches from '../database/models/Matches';
import { IMatches } from '../database/interfaces';



chai.use(chaiHttp);

const { expect } = chai;

describe('Matches', () => {

  afterEach(sinon.restore);

  const allMatches = 
  [
      {
        id: 1,
        homeTeamId: 16,
        homeTeamGoals: 1,
        awayTeamId: 8,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
          teamName: "São Paulo"
        },
        awayTeam: {
          teamName: "Grêmio"
        }
      },
      {
        id: 41,
        homeTeamId: 16,
        homeTeamGoals: 2,
        awayTeamId: 9,
        awayTeamGoals: 0,
        inProgress: true,
        homeTeam: {
          teamName: "São Paulo"
        },
        awayTeam: {
          teamName: "Internacional"
        }
      }
    ];

  const matchesTrue = 
  [
      {
        id: 1,
        homeTeamId: 16,
        homeTeamGoals: 1,
        awayTeamId: 8,
        awayTeamGoals: 1,
        inProgress: true,
        homeTeam: {
          teamName: "São Paulo"
        },
        awayTeam: {
          teamName: "Grêmio"
        }
      },
      {
        id: 41,
        homeTeamId: 16,
        homeTeamGoals: 2,
        awayTeamId: 9,
        awayTeamGoals: 0,
        inProgress: true,
        homeTeam: {
          teamName: "São Paulo"
        },
        awayTeam: {
          teamName: "Internacional"
        }
      }
    ];

    const matchesFalse = 
  [
      {
        id: 1,
        homeTeamId: 16,
        homeTeamGoals: 1,
        awayTeamId: 8,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
          teamName: "São Paulo"
        },
        awayTeam: {
          teamName: "Grêmio"
        }
      },
      {
        id: 41,
        homeTeamId: 16,
        homeTeamGoals: 2,
        awayTeamId: 9,
        awayTeamGoals: 0,
        inProgress: false,
        homeTeam: {
          teamName: "São Paulo"
        },
        awayTeam: {
          teamName: "Internacional"
        }
      }
    ];

  it('deve retornar todos os jogos, service', async () => {

    sinon.stub(Model, 'findAll').resolves(allMatches as unknown as Matches[]);
    const httpResponse = await chai.request(app).get('/matches');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(allMatches);
  })

  it('deve retornar todos os jogos, controller', async () => {

    sinon.stub(ServiceMatches.prototype, 'getAll').resolves(allMatches);
    const httpResponse = await chai.request(app).get('/matches');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(allMatches);
  })

  it('deve buscar partidas em andamento', async () => {
    
    sinon.stub(ServiceMatches.prototype, 'getAll').resolves(matchesTrue);
    const httpResponse = await chai.request(app).get('/matches?inProgress=true');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(matchesTrue);
  })
});
