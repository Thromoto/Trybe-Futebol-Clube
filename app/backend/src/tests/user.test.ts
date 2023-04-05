import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Users & Login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('deve retornar um erro 400 caso o email não seja informado', async () => {
    const httpResponse = await chai.request(app).post('/login').send({})
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
  })

  it('deve retornar um erro 400 caso o password não seja informado', async () => {
    const httpResponse = await chai.request(app)
    .post('/login')
    .send({
        email: 'admin@admin.com'
    })
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
  })

  it('deve retornar um erro 401 caso o email não seja válido', async () => {
    const httpResponse = await chai.request(app)
    .post('/login')
    .send({
        email: 'admin.admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
    })
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({ message: 'Invalid email or password' });
  })

  it('deve retornar um erro 401 caso o password não seja válido', async () => {
    const httpResponse = await chai.request(app)
    .post('/login')
    .send({
        email: 'admin@admin.com',
        password: '12345',
    })
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({ message: 'Invalid email or password' });
  })
});
