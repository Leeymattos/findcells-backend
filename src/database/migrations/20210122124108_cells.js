
exports.up = function(knex) {
  return knex.schema.createTable('cells', function(table){
    table.increments('id').primary()
    table.string('cell_name').notNullable()
    table.string('leader_name').notNullable()
    table.string('network_color').notNullable()
    table.string('day').notNullable()
    table.string('schedule').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('adress').notNullable()
    table.decimal('latitude').notNullable()
    table.decimal('longitude').notNullable()
    table.string('city').notNullable()
    table.string('uf').notNullable()
    table.string('image').notNullable()
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('cells')
};
