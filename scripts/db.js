const dialogRef = document.getElementById("dialog");

let myDishes = [
    {
        "name": "Veggie mushroom black burger",
        "price": 16.90,
        "description": "Mixed green salad, Tomatoes, Edamame, Mushrooms",
        "image": "VeggieMushroomBlackBurger.png",
    },
    {
        "name": "All meat burger",
        "price": 15.90,
        "description": "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse",
        "image": "AllMeatBurger.png",
    },
    {
        "name": "Beef red burger",
        "price": 14.90,
        "description": "Beef, Cheese, Tomatoes, Lettuce, Onion",
        "image": "BeefRedBurger.png",
    },
    {
        "name": "Big chicken burger",
        "price": 15.90,
        "description": "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
        "image": "BigChickenBurger.png",
    },
    {
        "name": "Classic hamburger",
        "price": 13.90,
        "description": "Beef, Tomatoes, Cheese, Salad",
        "image": "hamburger.jpg",
    }
];

let myBasketDishes = {
    'amount': [],
    'price': [],
    'subtotal': 0,
    'total': []
};
