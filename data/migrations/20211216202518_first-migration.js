
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments('user_id')
        tbl.string('username', 128).notNullable()
        tbl.string('Fname', 128).notNullable()
        tbl.string('Lname', 128).notNullable()
        tbl.string('email', 128).notNullable().unique()
    })
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
