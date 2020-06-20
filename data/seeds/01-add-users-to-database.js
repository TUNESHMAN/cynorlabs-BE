exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "Tunesh", password: "nopassword", role: "doctor" },
        { id: 2, username: "Raed", password: "nopassword", role: "doctor" },
        { id: 3, username: "Gabe", password: "nopassword", role: "manager" },
      ]);
    });
};
