// used as reference https://github.com/bkonkle/node-knex-typescript-example/blob/master/migrations/001_initial.ts
// also --> https://gist.github.com/tukkajukka/9893e5f111862d06044b73fa944a8741
// import Knex from 'knex'

exports.up = function (knex) {
// exports.up = function (knex: Knex) {
  // knex.schema.createTable('ongs', (table: Knex.TableBuilder) => {
  return knex.schema.createTable('ongs', (table) => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable() // federal unit abbreviation
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('ongs')
}
