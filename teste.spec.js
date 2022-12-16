
const request = require("supertest")
const app = require('./index')

describe('teste', () => {
    it('statuscode', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
    })
})