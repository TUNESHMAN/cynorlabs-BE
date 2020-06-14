// The db-config has knowledge of our knex file. It is where our configuration is done
const knex = require("knex");
const knexfile = require("../knexfile");

const database = "development";

// Export the configuration
module.exports = knex(knexfile[database]);
