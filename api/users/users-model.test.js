const User = require('./users-model')
const db = require('../../data/dbconfig')

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

describe('Users model', () => {
    const testObj = {
        username: 'Ari',
        Fname: 'Arison',
        Lname:'Arias',
        email:'ari@dumb.email'
    }
    const newUserObj = {
        user_id:5,
        username: 'bar',
        Fname: 'baz',
        Lname:'fo',
        email:'bar@fo.email'
    }

    describe('[GET] all users', ()=> {
        it('resolves to all the users', async ()=> {
            const result = await User.getAll()
            expect(result).toHaveLength(3) 
        })
    })
    describe('[GET] users by ID', ()=> {
        it('resolves to the user with the specified ID', async ()=> {
            const result = await User.getById(1)
            expect(result).toMatchObject(testObj)
        })
    })
    describe('[POST]s new user', ()=> {
        it('adds the new user to db', async()=> {
            await User.insert(newUserObj)
            const [newUser] = await db('users').where('user_id',5)
            expect(newUser).toMatchObject(newUserObj)
        })
        it('resolves to the new user', async() => {
            const result = await User.insert(newUserObj)
            expect(result).toMatchObject(newUserObj)
        })
    })

    
})