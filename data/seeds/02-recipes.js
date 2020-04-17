exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("recipes")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("recipes").insert([
				{
					id: 1,
					recipe_name: "Summer Squash Salad",
					description:
						"A bowl of freshly made salad is a refreshing treat to the palate in the hot summer season. Here is a salad recipe to easily prepare at home, complete with the goodness of summer squash, white balsamic vinegar, lemon, garlic, basil leaves along with the spice of red chilli and black pepper. Relish this for lunch or a mid-day meal to beat the summer heat."
				},
				{
					id: 2,
					recipe_name: "Sable Viennois",
					description:
						"Cookies so good you wouldn't be able to resist! Creamy goodness of butter, icing sugar, egg and flour, baked to perfection!"
				},
				{
					id: 3,
					recipe_name: "Laal Duck Mole",
					description:
						"The distinct flavour of duck and its fat would go really well with a robust and flavourful 'laal masala' from Rajasthan, complemented by the spicy chocolate sauce from Mexico, 'Mole'. It's a treat for the senses!"
				},
				{
					id: 4,
					recipe_name: "Eggless Red Velvet Pastry",
					description:
						"This is a quick and easy pastry recipe. You will like its creamy taste; this soft and fluffy red velvet pastry is perfect for Valentine's Day."
				},
				{
					id: 5,
					recipe_name: "Rasmalai Tiramisu",
					description:
						"Give your Indian dessert a caffeine twist with this delicious fusion of rasmalai and tiramisu. A super easy ad quick dessert recipe that is sure to impress your guests."
				}
			]);
		});
};
