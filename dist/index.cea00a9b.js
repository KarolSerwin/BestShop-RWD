const summary = document.querySelector(".calc--list");
const listItems = document.querySelectorAll(".list__item");
/*LIST ITEMS DISPLAY*/ for(let i = 0; i < listItems.length; i++)listItems[i].style.display = "none";
/*QUANTITY*/ const inputTop = document.getElementById("products");
const itemProducts = listItems[0];
inputTop.addEventListener("change", function(event) {
    const productsCalc = itemProducts.children[1];
    const productsPrice = itemProducts.children[2];
    if (inputTop.value) {
        itemProducts.style.display = "flex";
        productsCalc.innerText = inputTop.value + " * $" + 2.5;
        productsPrice.innerText = "$" + inputTop.value * 2.5;
        orderPricesSum.push(inputTop.value * 2.5);
    } else itemProducts.style.display = "none";
});
/*ORDERS*/ const inputBottom = document.getElementById("orders");
const itemOrders = listItems[1];
inputBottom.addEventListener("change", function(event) {
    const ordersCalc = itemOrders.children[1];
    const ordersPrice = itemOrders.children[2];
    if (inputBottom.value) {
        itemOrders.style.display = "flex";
        ordersCalc.innerText = inputBottom.value + " * $" + 0.5;
        ordersPrice.innerText = "$" + inputBottom.value * 0.5;
        orderPricesSum.push(inputBottom.value * 0.5);
    } else itemOrders.style.display = "none";
});
/*CHOOSE PACKAGE*/ const option = document.querySelectorAll("option");
const options = document.querySelectorAll("option");
const select = document.getElementById("dropdown");
const itemOption = listItems[2];
select.addEventListener("change", function(event) {
    const packageType = itemOption.children[1];
    const packagePrice = itemOption.children[2];
    if (options[1].selected === true) {
        itemOption.style.display = "flex";
        packageType.innerText = "Basic";
        packagePrice.innerText = "$10";
        orderPricesSum.push(10);
    } else if (options[2].selected === true) {
        itemOption.style.display = "flex";
        packageType.innerText = "Professional";
        packagePrice.innerText = "$20";
        orderPricesSum.push(20);
    } else if (options[3].selected === true) {
        itemOption.style.display = "flex";
        packageType.innerText = "Premium";
        packagePrice.innerText = "$30";
        orderPricesSum.push(30);
    } else itemOption.style.display = "none";
});
/*CHECKBOX ACCOUNTING*/ const checkboxAcc = document.getElementById("accounting");
const itemAcc = listItems[3];
const counter = [];
checkboxAcc.addEventListener("change", function(event, index) {
    counter.push(1);
    if (counter.length % 2 !== 0) {
        itemAcc.style.display = "flex";
        orderPricesSum.push(12);
    } else if (counter.length % 2 === 0) {
        orderPricesSum.push(-12);
        itemAcc.style.display = "none";
    }
});
/*CHECKBOX TERMINAL*/ const checkboxTer = document.getElementById("terminal");
const itemTer = listItems[4];
const counterB = [];
checkboxTer.addEventListener("change", function(event) {
    counterB.push(1);
    if (counterB.length % 2 !== 0) {
        itemTer.style.display = "flex";
        orderPricesSum.push(8);
    } else if (counter.length % 2 === 0) {
        orderPricesSum.push(-8);
        itemTer.style.display = "none";
    }
});
/*RESULT - SUM OF ORDER*/ const orderPricesSum = [];
let result = document.querySelector(".total__price");
const form = document.querySelector(".calc--form");
form.addEventListener("change", function(event) {
    result.innerText = "$" + orderPricesSum.reduce(function(acc, curr) {
        return acc + curr;
    });
}) /*
function Calculator(form, summary) {

    this.prices = {
        products: 0.5,
        orders: 0.25,
        package: {
            basic: 0,
            professional: 25,
            premium: 60
        },
        accounting: 35,
        terminal: 5
    };

    this.form = {
        products: form.querySelector("#products"),
        orders: form.querySelector("#orders"),
        package: form.querySelector("#package"),
        accounting: form.querySelector("#accounting"),
        terminal: form.querySelector("#terminal")
    };

    this.summary = {
        list: summary.querySelector("ul"),
        items: summary.querySelector("ul").children,
        total: {
            container: summary.querySelector("#total-price"),
            price: summary.querySelector(".total__price")
        }
    };
}*/ ;

//# sourceMappingURL=index.cea00a9b.js.map
