//render dishes
function renderDishes() {
    let dishesContentRef = document.getElementById('burgers');
    dishesContentRef.innerHTML = "";

    for (let iDish = 0; iDish < myDishes.length; iDish++) {
        let price = myDishes[iDish].price.toFixed(2) + " €";
        dishesContentRef.innerHTML += getDishTemplate(iDish, price);
    }
}

//openBasket
function openBasket() {
    let basket = document.getElementById("basket");
    basket.classList.toggle("displayflex");
    basket.innerHTML = getEmptyBasketTemplate();
}

//adds dishes to the basket
function addBasket(iDish) {
    let basket = document.getElementById("basket");
    basket.classList.toggle("displayflex");
    basket.innerHTML = ""
    basket.innerHTML = getBasketTemplate(iDish);
}


//HTML Templates
function getDishTemplate(iDish, price) {
    return `<figure>
    <div>
    <img src="./img/${myDishes[iDish].image}" alt="">
     <span><h4>${myDishes[iDish].name}</h4>
    <figcaption>${myDishes[iDish].description}</figcaption></span>
    </div>
    <div class="priceandbutton">
        <h4>${price}</h4>
    <button onclick="addBasket(${iDish})">Add to basket</button>
</div>
</figure>`
}

function getEmptyBasketTemplate() {
    return ` <div class="basket">
                <h5>Your Basket</h5>
            
            <div class="description">
            <p>
                Nothing here yet.<br>
                Go ahead and choose something delicious!
            </p>
            <button onclick="openBasket();"><img src="./img/shopping_cart.png" alt="shopping cart icon"></button>
            </div>`
}

function getBasketTemplate(iDish) {
    return `
    <div class="basket">
    <h5>Your Basket</h5>
    <figure>
    <h6>${myDishes[iDish].name}</h6>
    <div>
    <img src="" alt="">
    
    </div>
    </figure>
    </div>`
}