exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("table_name")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("ingredients").insert([
				{ ingredient_name: "White balsamic vinegar" },
				{ ingredient_name: "Lemon juice" },
				{ ingredient_name: "Lemon rind" },
				{ ingredient_name: "Red chillies" },
				{ ingredient_name: "Garlic cloves" },
				{ ingredient_name: "Olive oil" },
				{ ingredient_name: "Summer squash" },
				{ ingredient_name: "Sea salt" },
				{ ingredient_name: "Basil leaves" }
			]);
		});
};
