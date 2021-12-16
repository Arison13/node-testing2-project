const users = [
  {
    username: 'Ari',
    Fname: 'Arison',
    Lname:'Arias',
    email:'ari@dumb.email'
  },
  {
    username: 'Angie04',
    Fname: 'Angie',
    Lname:'Hernandez',
    email:'mylove@life.forever'
  },
  {
    username: 'Parce',
    Fname: 'Leo',
    Lname:'Marika',
    email:'parce@marika.email'
  },

];

exports.seed = async function(knex) {
  await knex('users').truncate()
  await knex('users').insert(users)

};