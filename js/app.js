'use strict';

// grab the images
var displayPicOne = document.getElementById('first-pic');
var displayPicTwo = document.getElementById('second-pic');
var displayPicThree = document.getElementById('third-pic');


var allProducts = [];
// constuctor for items
function Product(pathTo) {
  this.pathTo = pathTo;
  this.votes = 0;
  allProducts.push(this);
}

// create new products
var bag = new Product('img/bag.jpg');
var banana = new Product('img/banana.jpg');
var bathroom = new Product('img/bathroom.jpg');
var boots = new Product('img/boots.jpg');
var breakfast = new Product('img/breakfast.jpg');
var bubblegum = new Product('img/bubblegum.jpg');
var chair = new Product('img/chair.jpg');
var cthulhu = new Product('img/cthulhu.jpg');
var dogDuck = new Product('img/dog-duck.jpg');
var dragon = new Product('img/dragon.jpg');
var pen = new Product('img/pen.jpg');
var petSweep = new Product('img/pet-sweep.jpg');
var scissors = new Product('img/scissors.jpg');
var shark = new Product('img/shark.jpg');
var sweep = new Product('img/sweep.png');
var tauntaun = new Product('img/tauntaun.jpg');
var unicorn = new Product('img/unicorn.jpg');
var usb = new Product('img/usb.gif');
var waterCan = new Product('img/water-can.jpg');
var wineGlass = new Product('img/wine-glass.jpg');

var newThree = [];
var lastThree = []
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
  displayPicTwo.src = newThree[1].pathTo;
  displayPicThree.src = newThree[2].pathTo;
}

displayNewThree();