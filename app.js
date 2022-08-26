'use strict'
let formEl = document.getElementById('salmon_form');

let cookie_stand = [];

function cookie (name) {
    this.name = name;
};

Cookie.prototype.display = function() {
    //read the target element (where am I adding elements)
    El = docuemnt.getElementById('store');

    //create a new element
    let itemEl = document.createElement('li');

    //update new element with values
    itemEl.textCont4ent = `Name - ${this.name}`;
    
    //append new element to the document.
let cookie_stand = [];
El.appendChild(itemEl);
};

formEl.addEventListener('submit'), function(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log(event.target.cookie_form_name);

    // destructuring an object using its properties
let { cookie_name } = event.target;

let  = new Cookie_stand(
cookie_stand_name.value,
);


cookie_stand.push(cookie_stand);
console.log(cookie_stand);

let cookie_standEl = docuemnt.getElmentById('store');
cookie_standEl.innerHTML = ''; // reset the list to an empty lisst.
for (let cookie_stand of salmon) {
    cookie_stand.display(); 
};
renderFooter();
function renderFooter() {
    let headerrow = document.createElement('tr');
    tableBody.appendChild(headerrow);
    let tdElement = document.createElement('td');

    tdElement.textContent = 'totals';
    headerrow.appendChild(tdElement);
    let total;

}

function handleSubmit(event) {

}

function addCookie_Stand(name) {

}
};
