/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('userId').notNullable().unique();
    table.string('name').notNullable();
    table.string('phoneNumber').notNullable();
    table.string('carPlateNumber').notNullable();
    table.string('carType').notNullable();
    table.string('password').notNullable();
    table.string('qrCodeUrl').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
