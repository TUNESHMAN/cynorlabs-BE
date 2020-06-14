exports.up = function (knex) {
  // Create the forms table
  return knex.schema.createTable("forms", (table) => {
    table.increments(); //This will create primary keys that auto-increments
    table.string("doctor_name").notNullable();
    table.string("department").notNullable();
    table.integer("doctors_rank").notNullable();
    table.string("task_description").notNullable()
  });
};

exports.down = function (knex) {
  // Destroy the forms table if it exists
  return knex.schema.dropTableIfExists("forms");
};
