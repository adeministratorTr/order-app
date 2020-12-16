import request from 'supertest';

import { app } from '../app'

let server;
let req;

beforeAll((done) => {
  server = app.listen(done)
  req = request.agent(server)
})

afterAll((done) => {
  server.close(done)
});

describe('App', () => {
  describe('API - Orders', () => {

    it('GET /api/orders should return valid orders', () => {
      // when you change this test, also inform FrontEnd team
      return req
        .get('/api/orders')
        .expect(resp => {
          resp.body.map(order => {
            expect(order).toHaveProperty('reference')
            expect(order).toHaveProperty('date')
            expect(order).toHaveProperty('delivered')
            expect(order).toHaveProperty('cost')
          })
        })
    })
  })

  describe('API - Page views', () => {
    it('GET /api/page-views should return 0 for non frontend page url', () => {
      return req
        .get('/api/page-views')
        .query({ path: 'bacon' })
        .expect({ numberOfVisits: 0 })
    })

    it('GET /api/page-view should return 1 after page-views increment', async () => {
      const pageUrl = 'not-real-url'
      const pageViewResponse = await req
        .post('/api/page-view')
        .query({ path: pageUrl })

      if (pageViewResponse.status >= 200 && pageViewResponse.status <= 300) {
        return req
          .get('/api/page-views')
          .query({ path: pageUrl })
          .expect(resp => {
            const visitNumber = +resp.body.numberOfVisits
            expect(visitNumber).toBeGreaterThan(0)
          })
      } else {
        console.error('error probably happen on redis')
      }
    })
  })
})
