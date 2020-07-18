exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("forms")
    .truncate() //We use truncate so that the incremental order of primary keys can be maintained
    .then(function () {
      // Inserts seed entries
      return knex("forms").insert([
        {
          id: 1,
          doctor_name: "Ben",
          department: "Psychology",
          doctors_rank: 5,
          task_description: "Worked on mental stability of a patient",
        },
        {
          id: 2,
          doctor_name: "Tom",
          department: "Dermatology",
          doctors_rank: 3,
          task_description:
            "Collaborated with another doctor on a patient's skin surgery",
        },
        {
          id: 3,
          doctor_name: "Matt",
          department: "Dentistry",
          doctors_rank: 4,
          task_description: "Flossing of woman's teeth",
        },
        {
          id: 4,
          doctor_name: "Debby",
          department: "Gynaecology",
          doctors_rank: 2,
          task_description:
            "Prescribed helpful drugs for a female patient to enhance her fertility",
        },
      ]);
    });
};
