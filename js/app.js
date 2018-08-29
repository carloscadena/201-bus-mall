'use strict';

// grab the images
var displayPicOne = document.getElementById('first-pic');
var displayPicTwo = document.getElementById('second-pic');
var displayPicThree = document.getElementById('third-pic');

var allProducts = [];
// constuctor for items
function Product(item, pathTo, timesShown = 0, votes = 0) {
  this.item = item;
  this.pathTo = pathTo;
  this.timesShown = timesShown;
  this.votes = votes;
  allProducts.push(this);
}

var JSONpresent = JSON.parse(localStorage.getItem('products'));

if(JSONpresent){
  for(var i = 0; i < JSONpresent.length; i++){
    // Create products with existing info
    new Product(JSONpresent[i].item, JSONpresent[i].pathTo, JSONpresent[i].timesShown, JSONpresent[i].votes);
  }
} else {
  // create new products
  new Product('R2 Bag', 'img/bag.jpg');
  new Product('Banana Slicer','img/banana.jpg');
  new Product('Toilet Paper/i-pad Holder','img/bathroom.jpg');
  new Product('Open Toed Rainboots','img/boots.jpg');
  new Product('All-in-One Breakfast Maker','img/breakfast.jpg');
  new Product('Meatball bubblegum','img/bubblegum.jpg');
  new Product('Round Bottom Chair','img/chair.jpg');
  new Product('Cthulhu','img/cthulhu.jpg');
  new Product('Dog duck-bill','img/dog-duck.jpg');
  new Product('Dragon Meat','img/dragon.jpg');
  new Product('Utensil Pen','img/pen.jpg');
  new Product('Pet Sweeper','img/pet-sweep.jpg');
  new Product('Pizza Scissors','img/scissors.jpg');
  new Product('Shark Sleeping Bag','img/shark.jpg');
  new Product('Baby Sweeper','img/sweep.png');
  new Product('Tauntaun','img/tauntaun.jpg');
  new Product('Unicorn Meat','img/unicorn.jpg');
  new Product('Wiggling Tentacle Usb','img/usb.gif');
  new Product('Water Can','img/water-can.jpg');
  new Product('Wine Glass','img/wine-glass.jpg');
}

var newThree = [];
var lastThree = [];
function displayNewThree(){
  newThree = [];
  // find random three to show that aren't the same and aren't the last three
  while (newThree.length < 3){
    var idx = Math.floor(Math.random() * allProducts.length);
    if (newThree.includes(allProducts[idx]) || lastThree.includes(allProducts[idx])){
      continue;
    } else {
      newThree.push(allProducts[idx]);
    }
  }
  lastThree = newThree;
  // make pics displayed new random three and add event listeners
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

// display results after 25 clicks
function showResults(){
  document.getElementById('pic-container').setAttribute('style', 'display:none');
  document.getElementById('myChart').setAttribute('style', 'display:block');
  document.getElementById('reset-button').setAttribute('style', 'display:block');
  document.getElementsByTagName('h2')[0].textContent = 'The votes are in...';
  document.getElementsByTagName('h2')[0].setAttribute('style', 'margin:5px');
  var names = [];
  var votesFor = [];
  var colors = [];
  var shown = [];
  var dynamicColors = function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };
  for (var i = 0; i < allProducts.length; i++){
    names.push(allProducts[i].item);
    votesFor.push(allProducts[i].votes);
    colors.push(dynamicColors());
    shown.push(allProducts[i].timesShown);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: 'Votes',
        data: votesFor,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      },
      {
        label: 'Shown',
        data: shown,
        // backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      // maintainAspectRatio: false,
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero:true,
            autoSkip: false,
          }
        }]
      }
    }
  });

}

// manage the clicks
var clicks = 0;
function handleClick(e){
  e.preventDefault();
  if(e.target.id === 'first-pic'){
    newThree[0].votes++;
  }
  if(e.target.id === 'second-pic'){
    newThree[1].votes++;
  }
  if(e.target.id === 'third-pic'){
    newThree[2].votes++;
  }
  clicks++;
  if(clicks < 25) displayNewThree();
  else {
    displayPicOne.removeEventListener('click', handleClick);
    displayPicTwo.removeEventListener('click', handleClick);
    displayPicThree.removeEventListener('click', handleClick);
    localStorage.setItem('products', JSON.stringify(allProducts));
    showResults();
  }
}

// allow for user to go straight to results
var resultsButton = document.getElementById('results-button');
resultsButton.addEventListener('click', function(){
  if(JSONpresent){showResults();}
});

// allow for user to reset results
var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function(){
  localStorage.removeItem('products');
});

displayNewThree();

console.log('blah')