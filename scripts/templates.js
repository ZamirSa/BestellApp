//HTML Templates

//Dish Template
function getDishTemplate(iDish, finalPrice) {
    return `
    <figure>
        <div>
            <img src="./img/${myDishes[iDish].image}" alt="${myDishes[iDish].name}">
            <span>
                <h4>${myDishes[iDish].name}</h4>
                <figcaption>${myDishes[iDish].description}</figcaption>
            </span>
        </div>
        <div class="priceandbutton">
            <h4>${finalPrice}</h4>
            <div>
                <button id="AddToBasketButton${iDish}" onclick="renderBasketDish(${iDish});">Add to basket</button>
                <button id="AddedButton${iDish}" class="displaynone widthunset amountbutton">${myBasketDishes.amount[iDish]} Added</button>
                <button id="plusButton${iDish}" onclick="addAmount(${iDish});"class="displaynone widthunset">+</button>
            </div>
        </div>
</figure>`
}

//Basketdish Template
function getBasketDishesTemplate(iDish, finalPrice) {
    return `    
    <figure id="dish${iDish}" class="basketDish">
        <h6>
            <span class="basketDishTitle" id="amountInTitle${iDish}">${myBasketDishes.amount[iDish]}x ${myDishes[iDish].name}</span>
            <span class="trash" id="trash${iDish}"></span>
        </h6>
        <div>
            <p>
            <button id="reduceAmount${iDish}" onclick="reduceAmount(${iDish});"><img src="./img/trash.png" alt="trash icon" onmouseover="this.src='./img/press.png'" onmouseleave="this.src='./img/trash.png'"></button>
            <span id="amount${iDish}">${myBasketDishes.amount[iDish]}</span>
            <button onclick="addAmount(${iDish});">+</button>
            </p>
            <span id="price${iDish}">${finalPrice}</span>
        </div>
    </figure>`
}

//Subtotal and Total Template
function getAllDishPriceTemplate(subtotal, total) {
    return `  
    <tr>
        <td>Subtotal</td>
        <td id="Subtotal">${subtotal}</td>
    </tr>
    <tr>
        <td>Delivery fee</td>
        <td>4,99€</td>
    </tr>
        <tr class="total">
        <th>Total</th>
        <th>${total}</th>
    </tr>
    <button onclick="openDialog();">Buy now (${total})</button>`
}

//confirmationmessage Template
function getDialogTemplate() {
    return `
        <button onclick="closeDialog();"><img src="./img/close.png" alt="close icon"></button>
        <img src="./img/truck.png" alt="">
        <h2>Order confirmed</h2>
        <p>Your food is one the way</p>
    `
}

//menu Template
function getMenuTemplate() {
    return `                
        <button onclick="closeBasket();" aria-label="homepage">
            <a href="#homepage">
                <img src="./img/home.png"alt="home icon" onmouseover="this.src='./img/active.png'" onmouseleave="this.src='./img/home.png'">
            </a>
        </button>
        <button>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                <img src="./img/person.png" alt="person icon" onmouseover="this.src='./img/acdtive.png'"onmouseleave="this.src='./img/person.png'">
            </a>
        </button>
        <button onclick="closeBasket();">
            <a href="#dishsection">
                <img src="./img/takeout_dining_2.png" alt="takeout dinning icon" onmouseover="this.src='./img/favicon.png'" onmouseleave="this.src='./img/takeout_dining_2.png'">
            </a>
        </button>
        ${getShoppingCart()}
        `
}

function getShoppingCart() {
    if (myBasketDishes.totalamount >= 1) {
        return `<button class="shoppingcart" onclick="getBasket();">
                <img src="./img/shopping_cart_orange.png" alt="shopping cart icon"><span>${myBasketDishes.totalamount}</span>
        </button>`
    } else {
        return `<button onclick="getBasket();">
            <img src="./img/shopping_cart(1).png" alt="shopping cart icon" onmouseover="this.src='./img/activeshoppingcart.png'" onmouseleave="this.src='./img/shopping_cart(1).png'"></img>
        </button>`
    }
}