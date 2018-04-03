"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<span class="coffeename">' + coffee.name + '</span>&nbsp;';
    html += '<span class="roasttype">' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var newCoffees = (coffees[0].id === 1) ?  Array.from(coffees.reverse()) : coffees;

        newCoffees.forEach(function(coffee) {
        var coffeeName = document.querySelector('#coffee-name').value.toLowerCase();

        if ((coffee.roast === selectedRoast || selectedRoast === 'All') && coffee.name.toLowerCase().includes(coffeeName) === true ) {

            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

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


coffees.reverse();

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var searchText = document.querySelector('#coffee-name');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchText.addEventListener('input',updateCoffees);
roastSelection.addEventListener('change',updateCoffees);