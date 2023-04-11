import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import ServiceTeams from '../database/services/teams.service';
import { ITeams } from '../database/interfaces';
import { Model } from 'sequelize';
import Teams from '../database/models/Teams';


chai.use(chaiHttp);

const { expect } = chai;

describe('Teams', () => {

  afterEach(sinon.restore);

  it('deve retornar todos os times, service', async () => {
    const allTeams = 
    [
        {
          id: 1,
          teamName: "Avaí/Kindermann"
        },
        {
          id: 2,
          teamName: "Bahia"
        },
        {
          id: 3,
          teamName: "Botafogo"
        }
      ];

    sinon.stub(Model, 'findAll').resolves(allTeams as Teams[]);
    const httpResponse = await chai.request(app).get('/teams');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(allTeams);
  })

  it('deve retornar todos os times, controller', async () => {
    const allTeams = 
    [
        {
          id: 1,
          teamName: "Avaí/Kindermann"
        },
        {
          id: 2,
          teamName: "Bahia"
        },
        {
          id: 3,
          teamName: "Botafogo"
        }
      ];

    sinon.stub(ServiceTeams.prototype, 'getAll').resolves(allTeams as ITeams[]);
    const httpResponse = await chai.request(app).get('/teams');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(allTeams);
  })

  it('deve retornar um time por id, service', async () => {
    const team = 
        {
          id: 1,
          teamName: "Avaí/Kindermann"
        }

    sinon.stub(Model, 'findByPk').resolves(team as Teams);
    const httpResponse = await chai.request(app).get('/teams/1');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(team);
  })

  it('deve retornar um time por id, controller', async () => {
    const team = 
        {
          id: 1,
          teamName: "Avaí/Kindermann"
        }

    sinon.stub(ServiceTeams.prototype, 'getById').resolves(team as ITeams);
    const httpResponse = await chai.request(app).get('/teams/1');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(team);
  })
});
