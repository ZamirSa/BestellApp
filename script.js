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
}

//adds dishes to the basket
function renderBasket(iDish) {
    let basketContentRef = document.getElementById("dishes");
    basketContentRef.innerHTML = "";

    for (let iBasket = 0; iBasket < myBasketDishes.dishTitles.length; iBasket++) {
        basketContentRef.innerHTML += getBasketDishesTemplate(iBasket);
    }
}

function addAmount(iDish) {
    amountRef = document.getElementById("amount");
    if (amountRef.innerHTML < 20) {
        amountRef.innerHTML = myDishes[iDish].amount++;
    }
}

function addDish(dishTitle, iDish) {
    myBasketDishes.dishTitles.push(dishTitle);

    renderBasket();

    let addDishButton = document.getElementById('dishButton' + [iDish]);
    addDishButton.classList.add("displaynone");

    let addhiddenButton = document.getElementById('hiddenButton' + [iDish]);
    addhiddenButton.classList.remove("displaynone");
    addhiddenButton.classList.add("orange");

    let addhiddenButtonText = document.getElementById('hiddenButtonText' + [iDish]);
    addhiddenButtonText.classList.remove("displaynone");
    addhiddenButtonText.classList.add("orange");
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
    <div><button id="dishButton${iDish}" onclick="addDish('${myDishes[iDish].name}', '${iDish}');">Add to basket</button><button id="hiddenButtonText${iDish}" class="displaynone">Added</button><button onclick="addAmount(${iDish});" id="hiddenButton${iDish}" class="displaynone">+</button></div>
</div>
</figure>`
}

function getBasketDishesTemplate(iBasket) {
    return `    
    <div id="dish${iBasket}" class="basketDish">
    <h6>${myBasketDishes.dishTitles[iBasket]}</h6>
    <div>
    <p id="amount">${myDishes[iBasket].amount}</p>
    <img src="" alt="">
    </div>
    </div>`

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
