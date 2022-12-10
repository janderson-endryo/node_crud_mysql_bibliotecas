const app = require('./index')

const request = require('supertest')

describe('teste', () => {
    it('teste', async () => {
        const res = await request(app).get('/')

        expect(res.statusCode).toEqual(200)
        console.log(res)
    })
})