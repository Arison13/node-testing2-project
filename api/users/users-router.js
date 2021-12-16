const router = require('express').Router()
const User = require('./users-model')


router.get('/', (req,res, next)=> {
   User.getAll()
   .then(user => {
       res.json(user)
   })
})



module.exports = router