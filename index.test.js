const request = require('supertest');
const app = require('./index'); // export app instead of listening directly

describe('GET /api/roles', () => {
  it('should return user roles', async () => {
    const res = await request(app).get('/api/roles');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
 