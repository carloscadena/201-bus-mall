'use strict';

// grab the images
var displayPicOne = document.getElementById('first-pic');
var displayPicTwo = document.getElementById('second-pic');
var displayPicThree = document.getElementById('third-pic');


var allProducts = [];
// constuctor for items
function Product(item, pathTo) {
  this.item = item;
  this.pathTo = pathTo;
  this.timesShown = 0;
  this.votes = 0;
  allProducts.push(this);
}

// create new products
var bag = new Product('R2 Bag', 'img/bag.jpg');
var banana = new Product('Banana Slicer','img/banana.jpg');
var bathroom = new Product('Toilet Paper/i-pad Holder','img/bathroom.jpg');
var boots = new Product('Open Toed Rainboots','img/boots.jpg');
var breakfast = new Product('All-in-One Breakfast Maker','img/breakfast.jpg');
var bubblegum = new Product('Meatball bubblegum','img/bubblegum.jpg');
var chair = new Product('Round Bottom Chair','img/chair.jpg');
var cthulhu = new Product('Cthulhu','img/cthulhu.jpg');
var dogDuck = new Product('Dog duck-bill','img/dog-duck.jpg');
var dragon = new Product('Dragon Meat','img/dragon.jpg');
var pen = new Product('Utensil Pen','img/pen.jpg');
var petSweep = new Product('Pet Sweeper','img/pet-sweep.jpg');
var scissors = new Product('Pizza Scissors','img/scissors.jpg');
var shark = new Product('Shark Sleeping Bag','img/shark.jpg');
var sweep = new Product('Baby Sweeper','img/sweep.png');
var tauntaun = new Product('Tauntaun','img/tauntaun.jpg');
var unicorn = new Product('Unicorn Meat','img/unicorn.jpg');
var usb = new Product('Wiggling Tentacle Usb','img/usb.gif');
var waterCan = new Product('Water Can','img/water-can.jpg');
var wineGlass = new Product('Wine Glass','img/wine-glass.jpg');

var newThree = [];
var lastThree = [];
function displayNewThree(){
  newThree = [];
  while (newThree.length < 3){
    var idx = Math.floor(Math.random() * allProducts.length);
    if (newThree.includes(allProducts[idx] || lastThree.includes(allProducts[idx]))){
      continue;
    } else {
      newThree.push(allProducts[idx]);
    }
  }
  lastThree = newThree;
  displayPicOne.src = newThree[0].pathTo;
  newThree[0].timesShown++;
  displayPicOne.addEventListener('click', handleClick);
  displayPicTwo.src = newThree[1].pathTo;
  newThree[1].timesShown++;
  displayPicTwo.addEventListener('click', handleClick);
  displayPicThree.src = newThree[2].pathTo;
  newThree[2].timesShown++;
  displayPicThree.addEventListener('click', handleClick);
}

function showResults(){
  var resultsList = document.getElementById('list-results')

  for(var i = 0; i < allProducts.length; i++){
    var newLi = document.createElement('li');
    newLi.textContent = `${allProducts[i].item} - times shown: ${allProducts[i].timesShown} - selected ${allProducts[i].votes}`;
    resultsList.appendChild(newLi);
  }
  document.getElementById('pic-container').setAttribute('style', 'display:none')

}

var clicks = 0;
function handleClick(e){
  e.preventDefault();
  console.log(e.target.id);
  if(e.target.id === 'first-pic'){
    newThree[0].votes++;
    console.log(newThree[0]);
  }
  if(e.target.id === 'second-pic'){
    newThree[1].votes++;
    console.log(newThree[1]);
  }
  if(e.target.id === 'third-pic'){
    newThree[2].votes++;
    console.log(newThree[2]);
  }
  clicks++;
  if(clicks < 5) displayNewThree();
  else showResults();
}


displayNewThree();