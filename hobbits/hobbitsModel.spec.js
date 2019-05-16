const db = require('../data/dbConfig')
const Hobbits = require('./hobbitsModel')

describe('hobbits model', () => {

    afterEach(async () => {
        await db('hobbits').truncate()
    })

    describe('insert()', () => {

        it('should insert provided hobbit', async () => {
            await Hobbits.insert({ name: 'Thorin' })

            const hobbits = await db('hobbits')

            expect(hobbits).toHaveLength(1)
        });

    });

});
