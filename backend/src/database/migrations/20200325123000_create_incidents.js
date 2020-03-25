
exports.up = function (knex) {
  return knex.schema.createTable('incidents', (table) => {
    table.increments() // primary key

    table.string('title').notNullable()
    table.string('description').notNullable()
    table.string('value').notNullable()

    table.string('ong_id').notNullable() // relationship with ongs table
    table.foreign('ong_id').references('id').inTable('ongs')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('incidents')
}
