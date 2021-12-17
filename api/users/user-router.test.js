const server = require('../server')
const request = require('supertest')
const db = require('../../data/dbConfig')

beforeAll(async ()=> {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach( async()=> {
    await db.seed.run()

})
afterAll( async ()=> {
    await db.destroy()
})

it('is the correct ENV', ()=> {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('Users Router', ()=> {
    describe('[GET] /users', ()=> {
        let res
        beforeEach(async ()=> {
            res = await request(server).get('/api/users')
        })
        it('responds with a status code 200', ()=> {
            expect(res.status).toBe(200)
        })
        it('responds with all users', ()=> {
        expect(res.body).toHaveLength(3)
    })
 })
 describe('[GET] /users by id ', ()=> {
     let res
    beforeEach(async ()=> {
        res = await request(server).get('/api/users/1')
    })
     it('responds with a status code 200',()=> {
        expect(res.status).toBe(200)
     })
     it('responds with user with the id provided',()=> {
        expect(res.body).toMatchObject({
            "Fname": "Arison", 
            "Lname": "Arias", 
            "email": "ari@dumb.email", 
            "user_id": 1, 
            "username": "Ari"})
     })
 })
})