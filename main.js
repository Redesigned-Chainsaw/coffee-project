"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(event) {
    event.preventDefault(); // don't submit the form, we just want to update the data
    var selectedCoffee;
    var filteredCoffees = [];

    if (event.target === submitButton || event.target === roastSelection) {
        selectedCoffee = roastSelection.value;
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedCoffee) {
                filteredCoffees.push(coffee);
            }
        });
    } else {
        selectedCoffee = coffeeName.value;
        console.log(selectedCoffee);
        coffees.forEach(function(coffee) {
            if (coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        });
    }


    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var coffeeName = document.getElementById("coffee-name");

console.log(coffeeName.value)

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeName = document.getElementById('coffee-name');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
coffeeName.addEventListener('input', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
