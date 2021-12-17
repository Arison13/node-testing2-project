const router = require('express').Router()
const User = require('./users-model')


router.get('/', (req,res, next)=> {
   User.getAll()
   .then(user => {
       res.json(user)
   })
   .catch(next)
})

router.get('/:user_id', (req,res, next)=> {
    User.getById(req.params.user_id)
    .then(user => {
        res.json(user)
    })
    .catch(next)
 })

router.post('/', (req,res,next)=> {
    User.insert(req.body)
    .then( newUser => {
        res.status(201).json(newUser)
    })
    .catch(next)
})

module.exports = router