const db = require('../../data/dbconfig');

module.exports = {
    insert,
    // update,
    // remove,
    getAll,
    getById,
  }

  function getAll() {
    return db('users')
  }
  
  function getById(id) {
    return db('users').where('user_d',id).first()
  }
  
  async function insert(newUser) {
    return db('users').insert(newUser)
      .then (([id])=> {
        return getById(id)
      })
    
  }
  
//   async function update(id, changes) {
//     return null
//   }
  
//   function remove(id) {
//     return null
//   }  