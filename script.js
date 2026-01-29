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

//adds amount
function addAmount(iDish) {
    let amountRef = document.getElementById("amount" + iDish);
    let amountInTitleRef = document.getElementById("amountInTitle" + iDish);

    if (myBasketDishes.amount[iDish] < 20) {
        myBasketDishes.amount[iDish]++
        amountInTitleRef.innerHTML = amountRef.innerHTML;
        renderBasket();}
}

//reduces Amount
function reduceAmount(iBasket) {
    let amountRef = document.getElementById("amount" + iBasket);
    let amountInTitleRef = document.getElementById("amountInTitle" + iBasket);
        if (myBasketDishes.amount[iBasket] > 1) {
        myBasketDishes.amount[iBasket]--
        amountInTitleRef.innerHTML = amountRef.innerHTML;
        renderBasket();}
}

function addDish(dishTitle, iDish) {
    myBasketDishes.dishTitles.push(dishTitle);
    myBasketDishes.amount.push(1);

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
    <h6><span id="amountInTitle${iBasket}">${myBasketDishes.amount[iBasket]}</span>x ${myBasketDishes.dishTitles[iBasket]}</h6>
    <div>
    <p><button id="reduceAmount${iBasket}" onclick="reduceAmount(${iBasket});">-</button><span id="amount${iBasket}">${myBasketDishes.amount[iBasket]}</span><button onclick="addAmount(${iBasket});">+</button></p>
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
