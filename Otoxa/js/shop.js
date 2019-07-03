// for reasons beyond me, everything I've tried to get initCart() and popCheck() to run properly onload from the js have failed. As such, I've put two lines of js in shop.html to run them there.

// this is the error I've yet to resolve:
//
// Uncaught TypeError: Cannot set property 'innerHTML' of null
//     at initCart (shop.js:19)
//     at shop.js:220


// declare variable for string for cart items to be used in local storage
let itemString;
//declare variable for items to be stored as an array
let itemArr;


//function to add items to cart, takes in product number from html
const addItem = (thing) => {
  let existing = localStorage.getItem('localItems');
  // if localItems can be split, split it, otherwise make an array
  existing = existing ? existing.split(',') : [];
  // put the passed item into the array
  existing.push(thing);
  // put the array into local storage as a string
  localStorage.setItem('localItems', existing.toString());
  // make that local storage string an easily accessible variable
  itemString = localStorage.getItem('localItems');
  //turn that variable back into an array
  itemArr = itemString.split(',');
  //set the cart count to the number of items in that array
  document.getElementById('cartCount').innerHTML = itemArr.length;
  //populate the checkout HTML
  popCheck()
}

//create the merchandise class, for objects with a name price and "productID"
class Product {
  constructor (name, price, pics) {
    this.name = name;
    this.price = price;
    this.pics = pics;
  }
  // functions to get object values
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getPics() {
    return this.pics;
  }
}

//create objects for each product
const p1 = new Product ('Otoxa and the Bird Poster', 19.99, ["../images/birdposter.png"]);
const p2 = new Product ('Eye and Sword Hoodie', 44.99, ["../images/hoodiefront.png", "../images/hoodieback.png"]);
const p3 = new Product ('Otoxa Watercolor Poster', 19.99, ["../images/watercolorposter.jpg"]);
const p4 = new Product ('Eye Pin', 9.99, ["../images/pin.png"], 4);
const p5 = new Product ('Cave Stream Phone Case', 14.99, ["../images/phone.png"]);


// create referenceable id strings as access keys
const merchIds = {
  'p1': p1,
  'p2': p2,
  'p3': p3,
  'p4': p4,
  'p5': p5
};

// populate the checkout page
const popCheck = () => {
  let totalCost = 0.00;
  let checkoutHTML = ``;
  //check if there are items in the cart
  if (itemArr != false) {
    // count each merchandise ID to get a quantity for each
    for (let i=0; i < itemArr.length; i++) {
      switch (itemArr[i]) {
        case 'p1':
        if (typeof p1Count == 'number') {
          p1Count++;
        } else {
          var p1Count = 1;
        }
        break;
        case 'p2':
        if (typeof p2Count == 'number') {
          p2Count++;
        } else {
          var p2Count = 1;
        }
        break;
        case 'p3':
        if (typeof p3Count == 'number') {
          p3Count++;
        } else {
          var p3Count = 1;
        }
        break;
        case 'p4':
        if (typeof p4Count == 'number') {
          p4Count++;
        } else {
          var p4Count = 1;
        }
        break;
        case 'p5':
        if (typeof p5Count == 'number') {
          p5Count++;
        } else {
          var p5Count = 1;
        }
        break;
        //default HTML for empty cart
        default:
        checkoutHTML = `<li class="error">There's nothing in your cart!</li>`
        break;
      }
    }
  //check to see which merchIDs are in cart
  if (p1Count > 0) {
    let quantity = p1Count;
    //calculate the cost of the items by mulitpyling price by quantity
    let p1Cost = p1.getPrice() * p1Count;
    // adding the cost to the total
    totalCost += p1Cost;
    //appending the HTML for the item(s)
    checkoutHTML += `<li class ="prodName">${p1.getName()}</li><li class = "prodPrice">${p1.getPrice()}</li><li class="quantity" id="p1qty">Quantity: ${quantity}</li><button id="p1ChangeBtn" onclick="qtyChange(${p1Count}, 'p1', 'p1qty', 'p1ChangeBtn')">Change Quantity</button>`
  }
  if (p2Count > 0) {
    let quantity = p2Count;
    let p2Cost = p2.getPrice() * p2Count;
    totalCost += p2Cost;
    checkoutHTML += `<li class ="prodName">${p2.getName()}</li><li class = "prodPrice">${p2.getPrice()}</li><li class="quantity" id="p2qty">Quantity: ${quantity}</li><button id="p2ChangeBtn" onclick="qtyChange(${p2Count}, 'p2', 'p2qty', 'p2ChangeBtn')">Change Quantity</button>`

  }
  if (p3Count > 0) {
    let quantity = p3Count;
    let p3Cost = p3.getPrice() * p3Count;
    totalCost += p3Cost;
    checkoutHTML += `<li class ="prodName">${p3.getName()}</li><li class = "prodPrice">${p3.getPrice()}</li><li class="quantity" id="p3qty">Quantity: ${quantity}</li><button id="p3ChangeBtn" onclick="qtyChange(${p3Count}, 'p3', 'p3qty', 'p3ChangeBtn')">Change Quantity</button>`

  }
  if (p4Count > 0) {
    let quantity = p4Count;
    let p4Cost = p4.getPrice() * p4Count;
    totalCost += p4Cost;
    checkoutHTML += `<li class ="prodName">${p4.getName()}</li><li class = "prodPrice">${p4.getPrice()}</li><li class="quantity" id="p4qty">Quantity: ${quantity}</li><button id="p4ChangeBtn" onclick="qtyChange(${p4Count}, 'p4', 'p4qty', 'p4ChangeBtn')">Change Quantity</button>`

  }
  if (p5Count > 0) {
    let quantity = p5Count;
    let p5Cost = p5.getPrice() * p5Count;
    totalCost += p5Cost;
    checkoutHTML += `<li class ="prodName">${p5.getName()}</li><li class = "prodPrice">${p5.getPrice()}</li><li class="quantity" id="p5qty">Quantity: ${quantity}</li><button id="p5ChangeBtn" onclick="qtyChange(${p5Count}, 'p5', 'p5qty', 'p5ChangeBtn')">Change Quantity</button>`

  }
}
  //if cart is empty
  if (checkoutHTML == false) {
    checkoutHTML = `<li class="error">There's nothing in your cart!</li>`
  } else {
    //add the total on to the end of the HTML
    checkoutHTML += `<li id="total">Total: ${totalCost.toFixed(2)}</li>`
  }

  //push the HTML variable to the actual DOM
  document.getElementById('dispCart').innerHTML = checkoutHTML;
}

//allows the user to change quantity of items they wish to purchase
//item count, merchandiseID, and the DOM elements to be affected are passed in
const qtyChange = (counter, merchId, liId, btnId) => {
  //li where quantity was previously displayed is replaced with a number input
  document.getElementById(liId).innerHTML = `<input type="number">`;
  // the number input's default value is the previous quantity
  document.getElementById(liId).firstChild.defaultValue = counter;
  //the button's function is changed and the arguments are passed on
  document.getElementById(btnId).setAttribute("onclick", `updateQty(${counter}, '${merchId}', ${liId}, ${btnId})`);
  // the button text is changed appropriately
  document.getElementById(btnId).innerHTML= 'Update Quantity';

  //all instances of the item quantity to be changed are removed from storage
  for (let i = itemArr.length; i>=0; i--) {
    // loop through the stored item array and check it vs its merch ID
    if (itemArr[i] === merchId) {
      // if it matches, cut it
      itemArr.splice(i, 1);
    }
  }
}

// now the user enters the new quantity
const updateQty = (counter, merchId, liId, btnId) => {
  //set default value to previous count
  counter = liId.firstChild.value;
  // push new count into the item array
  for (let i = counter; i > 0; i--) {
    itemArr.push(merchId)
  }
  //turn the item array back into a string
  itemString = itemArr.join();
  //push that item to local storage
  localStorage.setItem('localItems', itemString);
  // update the cart count and the page's HTML
  initCart();
  popCheck();
}


// function to check the cart total when the page loads
const initCart =() => {
  //if there's nothing in the cart, declare an empty string and array and set the count to 0
  if ((localStorage.getItem('localItems') == false)||localStorage.getItem('localItems') == null) {
    itemString = '';
    itemArr = [];
    document.getElementById('cartCount').innerHTML = itemArr.length;
  } else {
    // if there's something inside the cart, declare its contents as a string then make that string an array
   itemString = localStorage.getItem('localItems');
   itemArr = itemString.split(',');
   document.getElementById('cartCount').innerHTML = itemArr.length;
  }
}
//display the checkout modal
const showCheckout = () => {
  //get the total from the already rendered element
  document.getElementById('modTotal').innerHTML = document.getElementById('total').innerHTML;
  // display the hidden checkout div
  document.getElementById('modBox').style.display = "flex";
  // display hidden overlay
  document.getElementById('modOver').style.display = "block";

}

const closeMod = () => {
  document.getElementById('modBox').style.display = "none";
  document.getElementById('modOver').style.display = "none";
}
