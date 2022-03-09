const request = require('supertest');
const app = require('../../src/index');
const connection = require('../../src/database/connection');
const { isExportDeclaration } = require('typescript');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterAll(() => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD2",
        email: "contato@apad.com.br",
        whatsapp: "855952465",
        city: "aparecida de goiânia",
        uf: "SC"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});