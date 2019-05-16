const request = require('supertest')
const server = require('./server')

describe('server', () => {

    it('sets the environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {

        it('should return 200 OK', () => {
            return request(server)
                .get('/')
                .expect(200)
        });

        it('using async/await', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
        })

        it('using async/await', async () => {
            await request(server).get('/').then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return { api: up }', async () => {
            const res = await request(server).get('/')
            const { api } = res.body
            expect(api).toBe('up')
        });

    });

});