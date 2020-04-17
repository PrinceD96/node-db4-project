exports.up = function (knex) {
	return knex.schema
		.createTable("ingredients", tbl => {
			tbl.increments();
			tbl.string("ingredient_name", 128).notNullable();
		})
		.createTable("recipes", tbl => {
			tbl.increments();
			tbl.string("recipe_name", 128).notNullable();
		})
		.createTable("steps", tbl => {
			tbl.integer("recipe_id").unsigned().notNullable();
			tbl.float("step_number");
			tbl.string("instructions").notNullable();
		})
		.createTable("recipe_ingredients_steps", tbl => {
			tbl.primary(["recipe_id", "ingredient_id"]);
			tbl
				.integer("recipe_id")
				.unsigned()
				.notNullable()
				.references("recipes.id");
			tbl
				.integer("ingredient_id")
				.unsigned()
				.notNullable()
				.references("ingredients.id");
			tbl
				.integer("step_number")
				.unsigned()
				.notNullable()
				.references("steps.step_number");
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("recipe_ingredients_steps")
		.dropTableIfExists("steps")
		.dropTableIfExists("recipes")
		.dropTableIfExists("ingredients");
};
