exports.up = function (knex) {
  // Create the forms table
  return knex.schema
    .createTable("forms", (table) => {
      table.increments(); //This will create primary keys that auto-increments
      table.string("doctor_name").notNullable();
      table.string("department").notNullable();
      table.integer("doctors_rank").notNullable();
      table.string("task_description").notNullable();
    })
    .createTable("users", (user) => {
      user.increments();
      user.string("username", 128).unique().notNullable();
      user.string("password", 128).notNullable();
      user.string("role").notNullable();
    });
};

exports.down = function (knex) {
  // Destroy the forms table if it exists and the users table. This has to be done in reverse order
  return knex.schema.dropTableIfExists("users").dropTableIfExists("forms");
};
