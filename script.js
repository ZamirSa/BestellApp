let myDishes = [
    {
        "name": "Veggie mushroom black burger",
        "price": 16.90,
        "description": "Mixed green salad, Tomatoes, Edamame, Mushrooms",
        "image": "VeggieMushroomBlackBurger.png"
    },
    {
        "name": "All meat burger",
        "price": 15.90,
        "description": "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse",
        "image": "AllMeatBurger.png"
    },
    {
        "name": "Beef red burger",
        "price": 14.90,
        "description": "Beef, Cheese, Tomatoes, Lettuce, Onion",
        "image": "BeefRedBurger.png"
    },
    {
        "name": "Big chicken burger",
        "price": 15.90,
        "description": "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
        "image": "BigChickenBurger.png"
    }
];

//render Dishes
function renderDishes() {
    let dishesContentRef = document.getElementById('burgers');
    dishesContentRef.innerHTML = "";

    for (let iDish = 0; iDish < myDishes.length; iDish++) {
        let price = myDishes[iDish].price.toFixed(2) + " €";
        dishesContentRef.innerHTML += getDishTemplate(iDish, price);
    }
}

function getDishTemplate(iDish, price) {
    return `<figure>
    <div>
    <img src="./img/${myDishes[iDish].image}" alt="">
     <span><h4>${myDishes[iDish].name}</h4>
    <figcaption>${myDishes[iDish].description}</figcaption></span>
    </div>
    <div class="priceandbutton">
        <h4>${price}</h4>
    <button>Add to basket</button>
</div>
</figure>`
}



