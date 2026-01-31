//HTML Templates
function getDishTemplate(iDish, finalPrice) {
    return `
    <figure>
        <div>
            <img src="./img/${myDishes[iDish].image}" alt="">
            <span>
                <h4>${myDishes[iDish].name}</h4>
                <figcaption>${myDishes[iDish].description}</figcaption>
            </span>
        </div>
        <div class="priceandbutton">
            <h4>${finalPrice}</h4>
            <div>
                <button id="AddToBasketButton${iDish}" onclick="renderBasketDish(${iDish});">Add to basket</button>
                <button id="AddedButton${iDish}" class="displaynone">${myBasketDishes.amount[iDish]} Added</button>
                <button id="plusButton${iDish}" onclick="addAmount(${iDish});"class="displaynone">+</button>
            </div>
        </div>
</figure>`
}

function getBasketDishesTemplate(iDish, finalPrice) {
    return `    
    <figure id="dish${iDish}" class="basketDish">
        <h6>
            <span class="basketDishTitle" id="amountInTitle${iDish}">${myBasketDishes.amount[iDish]}x ${myDishes[iDish].name}</span>
            <span class="trash" id="trash${iDish}"></span>
        </h6>
        <div>
            <p>
            <button id="reduceAmount${iDish}" onclick="reduceAmount(${iDish});"><img src="./img/trash.png" alt=""></button>
            <span id="amount${iDish}">${myBasketDishes.amount[iDish]}</span>
            <button onclick="addAmount(${iDish});">+</button>
            </p>
            <span id="price${iDish}">${finalPrice}</span>
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