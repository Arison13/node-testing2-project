const router = require('express').Router()
const User = require('./users-model')


router.get('/', (req,res, next)=> {
   User.getAll()
   .then(user => {
       res.json(user)
   })
})

router.get('/:user_id', (req,res, next)=> {
    User.getById(req.params.user_id)
    .then(user => {
        res.json(user)
    })
 })



module.exports = router