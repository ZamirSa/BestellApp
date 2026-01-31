//pushes a number in array myBasketDishes.amount for each dish
function pushAmount() {
    for (let iDish = 0; iDish < myDishes.length; iDish++) {
        myBasketDishes.amount.push(0);
    }
}

//renders all dishes
function renderDishes() {
    let dishesContentRef = document.getElementById('burgers');
    dishesContentRef.innerHTML = "";

    for (let iDish = 0; iDish < myDishes.length; iDish++) {
        let price = myDishes[iDish].price.toFixed(2) + " €";
        let finalPrice = price.replaceAll(".", ",");
        dishesContentRef.innerHTML += getDishTemplate(iDish, finalPrice);
    }
}

//gets basketbuttons adds and removes the right class
function getBasketButton(iDish) {
    let addToBasketButton = document.getElementById('AddToBasketButton' + iDish);
    addToBasketButton.classList.add("displaynone");

    let addedButton = document.getElementById('AddedButton' + iDish);
    addedButton.classList.remove("displaynone");
    addedButton.classList.add("orange");
    addedButton.innerHTML = `${myBasketDishes.amount[iDish]} Added`;

    let plusButton = document.getElementById('plusButton' + iDish);
    plusButton.classList.remove("displaynone");
    plusButton.classList.add("orange");
    plusButton.innerHTML = "+";
}

//renders dish to the basket
function renderBasketDish(iDish) {
    let basketContentRef = document.getElementById("dishes");
    basketContentRef.innerHTML += "";
    let price = myDishes[iDish].price.toFixed(2) + " €";
    let finalPrice = price.replaceAll(".", ",");
    myBasketDishes.amount[iDish] = 1;

    getBasketButton(iDish);

    basketContentRef.innerHTML += getBasketDishesTemplate(iDish, finalPrice);
}

//multiplies the price of the dish and the amount
function getPrice(iDish) {
    let priceRef = document.getElementById("price" + iDish);
    let priceAmount = myDishes[iDish].price * myBasketDishes.amount[iDish];
    let price = priceAmount.toFixed(2) + " €";
    let finalPrice = price.replaceAll(".", ",");
    priceRef.innerHTML = finalPrice;
}

//add amount
function addAmount(iDish) {
    if (myBasketDishes.amount[iDish] < 20) {
        myBasketDishes.amount[iDish]++;

        let amountRef = document.getElementById("amount" + iDish);
        amountRef.innerHTML = `${myBasketDishes.amount[iDish]}`
        let amountInTitleRef = document.getElementById("amountInTitle" + iDish);
        amountInTitleRef.innerHTML = `${myBasketDishes.amount[iDish]}x ${myDishes[iDish].name}`;

        getPrice(iDish);
        getBasketButton(iDish);

        let basketDishRef = document.getElementById("dish" + iDish);
        basketDishRef.classList.remove("displaynone");

    } if (myBasketDishes.amount[iDish] > 1) {
        let reduceAmountRef = document.getElementById("reduceAmount" + iDish);
        reduceAmountRef.innerHTML = "-";
        let trashRef = document.getElementById("trash" + iDish);
        trashRef.innerHTML = `<button onclick="deleteBasket(${iDish});"><img src="./img/trash.png" alt=""></button>`;
    }
}

//reduces Amount
function reduceAmount(iDish) {
    if (myBasketDishes.amount[iDish] > 2) {
        myBasketDishes.amount[iDish]--;

        getAmountRef(iDish);
        getPrice(iDish);
    } else if (myBasketDishes.amount[iDish] > 1) {
        myBasketDishes.amount[iDish]--;

        let reduceAmountRef = document.getElementById("reduceAmount" + iDish);
        reduceAmountRef.innerHTML = `<img src="./img/trash.png" alt="">`;
        let trashRef = document.getElementById("trash" + iDish);
        trashRef.innerHTML = "";

        getAmountRef(iDish);
        getPrice(iDish);

    } else if (myBasketDishes.amount[iDish] > 0) {
        deleteBasketDish(iDish);
    }
}

//returns the reduced amount in the basketdish
function getAmountRef(iDish) {
    let addedButtonRef = document.getElementById("AddedButton" + iDish);
    addedButtonRef.innerHTML = `${myBasketDishes.amount[iDish]} Added`;

    let amountRef = document.getElementById("amount" + iDish);
    amountRef.innerHTML = `${myBasketDishes.amount[iDish]}`

    let amountInTitleRef = document.getElementById("amountInTitle" + iDish);
    amountInTitleRef.innerHTML = `${myBasketDishes.amount[iDish]}x ${myDishes[iDish].name}`;
}

//deletes basketdish
function deleteBasketDish(iDish) {
    myBasketDishes.amount[iDish] = 0;
    let basketDishRef = document.getElementById("dish" + iDish);
    basketDishRef.classList.add("displaynone");

    let addedButtonRef = document.getElementById("AddedButton" + iDish);
    addedButtonRef.innerHTML = `Add to basket`;
    addedButtonRef.classList.add("displaynone");

    let plusButtonRef = document.getElementById("plusButton" + iDish);
    plusButtonRef.classList.remove("orange");
    plusButtonRef.innerHTML = "Add to basket";

    let amountRef = document.getElementById("amount" + iDish);
    amountRef.innerHTML = `${myBasketDishes.amount[iDish]}`
    let amountInTitleRef = document.getElementById("amountInTitle" + iDish);
    amountInTitleRef.innerHTML = `${myBasketDishes.amount[iDish]}`;
}