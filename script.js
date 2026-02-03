//pushes a number in array myBasketDishes.amount for each dish
function pushAmount() {
    for (let iDish = 0; iDish < myDishes.length; iDish++) {
        myBasketDishes.amount.push(0);
        myBasketDishes.price.push(0);
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
    getRenderBasketDishSubtotal(iDish);
    renderMenu();
    getBasketButton(iDish);
    getEmptyBasket();

    basketContentRef.innerHTML += getBasketDishesTemplate(iDish, finalPrice);
    let basketRef = document.getElementById("basket");
    basketRef.classList.remove("displaynone");
}

function getRenderBasketDishSubtotal(iDish) {
    myBasketDishes.amount[iDish] = 1;
    myBasketDishes.totalamount += 1;

    myBasketDishes.price[iDish] = myDishes[iDish].price;
    let subtotalnumber = myBasketDishes.subtotal += myBasketDishes.price[iDish];

    getSubtotal(iDish, subtotalnumber);
}

function getSubtotal(iDish, subtotalnumber) {
    let subtotalnumberfixed = subtotalnumber.toFixed(2) + " €";
    let subtotal = subtotalnumberfixed.replaceAll(".", ",");

    getTotalNumber(subtotalnumber, iDish, subtotal);
}

//get total
function getTotalNumber(subtotalnumber, iDish, subtotal) {
    let totalnumber = subtotalnumber + 4.99;
    let totalfixed = totalnumber.toFixed(2) + " €";
    let total = totalfixed.replaceAll(".", ",");

    allDishPrice(subtotal, total);
}

//multiplies the price of the dish and the amount
function getPrice(iDish, subtotalnumber) {
    let priceRef = document.getElementById("price" + iDish);
    let priceAmount = myBasketDishes.price[iDish] * myBasketDishes.amount[iDish];
    let price = priceAmount.toFixed(2) + " €";
    let finalPrice = price.replaceAll(".", ",");
    priceRef.innerHTML = finalPrice;

    getSubtotal(iDish, subtotalnumber);
}

//add amount
function addAmount(iDish) {
    if (myBasketDishes.amount[iDish] < 20) {
        myBasketDishes.amount[iDish]++;
        myBasketDishes.totalamount++;
        let subtotalnumber = myBasketDishes.subtotal += myBasketDishes.price[iDish];
        renderallAmountandPrice(subtotalnumber, iDish);
        getBasketButton(iDish);
        getEmptyBasket();
        let basketDishRef = document.getElementById("dish" + iDish);
        basketDishRef.classList.remove("displaynone");

    } if (myBasketDishes.amount[iDish] > 1) {
        addAmountifone(iDish);
    }
}

function renderallAmountandPrice(subtotalnumber, iDish) {
    renderMenu();
    getAmountRef(iDish);
    getPrice(iDish, subtotalnumber);
}

function addAmountifone(iDish) {
    let reduceAmountRef = document.getElementById("reduceAmount" + iDish);
    reduceAmountRef.innerHTML = "-";
    let trashRef = document.getElementById("trash" + iDish);
    trashRef.innerHTML = `<button onclick="deleteBasketDish(${iDish});"><img src="./img/trash.png" alt="trashicon" onmouseover="this.src='./img/press.png'" onmouseleave="this.src='./img/trash.png'"></button>`;
}

//reduces Amount
function reduceAmount(iDish) {
    if (myBasketDishes.amount[iDish] > 2) {
        myBasketDishes.amount[iDish]--;
        let subtotalnumber = myBasketDishes.subtotal -= myBasketDishes.price[iDish];
        myBasketDishes.totalamount--;
        renderallAmountandPrice(subtotalnumber, iDish)

    } else if (myBasketDishes.amount[iDish] > 1) {
        reduceAmountifone(iDish);

    } else if (myBasketDishes.amount[iDish] > 0) {
        deleteBasketDish(iDish);
    }
}

//adds trashicon instead of -
function reduceSubtotal(iDish) {
    myBasketDishes.amount[iDish]--
    let subtotalnumber = myBasketDishes.subtotal -= myBasketDishes.price[iDish];
    myBasketDishes.totalamount--;

    reduceAmountifone(iDish);
    renderallAmountandPrice(subtotalnumber, iDish)
}

function reduceAmountifone(iDish) {
    let reduceAmountRef = document.getElementById("reduceAmount" + iDish);
    reduceAmountRef.innerHTML = `<img src="./img/trash.png" alt="trashicon" onmouseover="this.src='./img/press.png'" onmouseleave="this.src='./img/trash.png'">`;
    let trashRef = document.getElementById("trash" + iDish);
    trashRef.innerHTML = "";
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
    let subtotalnumber = myBasketDishes.subtotal -= myBasketDishes.price[iDish] * myBasketDishes.amount[iDish];
    myBasketDishes.totalamount -= myBasketDishes.amount[iDish];
    getPrice(iDish, subtotalnumber);
    getEmptyBasket();
    renderMenu();
    removeAddedButton(iDish);
    reduceAmountifone(iDish);

    let amountRef = document.getElementById("amount" + iDish);
    amountRef.innerHTML = `${myBasketDishes.amount[iDish]}`
    let amountInTitleRef = document.getElementById("amountInTitle" + iDish);
    amountInTitleRef.innerHTML = `${myBasketDishes.amount[iDish]}`;
}

//removes display of added and plus button
function removeAddedButton(iDish) {
    myBasketDishes.amount[iDish] = 0;

    let basketDishRef = document.getElementById("dish" + iDish);
    basketDishRef.classList.add("displaynone");

    let addedButtonRef = document.getElementById("AddedButton" + iDish);
    addedButtonRef.innerHTML = `Add to basket`;
    addedButtonRef.classList.add("displaynone");

    let plusButtonRef = document.getElementById("plusButton" + iDish);
    plusButtonRef.classList.remove("orange");
    plusButtonRef.innerHTML = "Add to basket";
}

//renders subtotal, total, delivery fee
function allDishPrice(subtotal, total) {
    let allDishPriceRef = document.getElementById("allDishPrice");
    allDishPriceRef.innerHTML = getAllDishPriceTemplate(subtotal, total);

    if (myBasketDishes.subtotal < 1) {
        allDishPriceRef.classList.add("displaynone");
    } else {
        allDishPriceRef.classList.remove("displaynone");
    }
}

//renders emptyBasket
function getEmptyBasket() {
    let emptyBasketRef = document.getElementById("emptyBasket");
    if (myBasketDishes.subtotal < 1) {
        emptyBasketRef.classList.remove("displaynone");
    } else {
        emptyBasketRef.classList.add("displaynone");
    }
}

let closeTimer;

//opens confirmationmessage
function openDialog() {
    var element = document.getElementById("body");
    element.classList.add("hidden")
    dialogRef.showModal();
    dialogRef.innerHTML = getDialogTemplate();

    let basketRef = document.getElementById("basket");
    basketRef.classList.add("displaynone");
    burgersRef = document.getElementById("burgers");
    burgersRef.classList.remove("displaynone");

    closeTimer = setTimeout(closeDialog, 2500);
}

//closes confirmationmessage
function closeDialog() {
    clearTimeout(closeTimer);
    var element = document.getElementById("body");
    element.classList.remove("hidden");
    let basketContentRef = document.getElementById("dishes");
    basketContentRef.innerHTML = "";
    dialogRef.close();

    let basketRef = document.getElementById("basket");
    basketRef.classList.remove("displaynone");
    basketRef.classList.add("basketdisplay");

    reloadAll();
}

function reloadAll() {
    myBasketDishes.totalamount = 0;
    myBasketDishes.price = [];
    myBasketDishes.amount = [];
    myBasketDishes.subtotal = 0;
    myBasketDishes.total = [];
    pushAmount();
    getEmptyBasket();
    renderDishes();
    renderMenu();
    allDishPrice(0, "");
}

//toggles display none on basket
function getBasket() {
    let basketRef = document.getElementById("basket");
    basketRef.classList.toggle("basketdisplay");

    let burgersRef = document.getElementById("burgers");
    burgersRef.classList.toggle("displaynone");

    let bodyRef = document.getElementById("body");
    bodyRef.classList.toggle("hidden");
}

//closes Basket
function closeBasket() {
    basketRef = document.getElementById("basket");
    basketRef.classList.add("basketdisplay");

    burgersRef = document.getElementById("burgers");
    burgersRef.classList.remove("displaynone");

    bodyRef = document.getElementById("body");
    bodyRef.classList.remove("hidden");
}

function renderMenu() {
    menuRef = document.getElementById("menu");
    menuRef.innerHTML = getMenuTemplate();
}
