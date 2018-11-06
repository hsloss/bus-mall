'use strict'
let busmallItems = []
let elImgContainer = document.getElementById('img-container')
let elBusmallImages = document.getElementsByClassName('busmall-image')
let elTable = document.getElementById('click-list')

function Images (newTitle, path, id, description) {
  //properties below//
  this.title = newTitle
  this.filePath = path
  this._id = id
  this.alt = description
  this.clicked = 0
  this.shown = 0
}

//instantiating new instance of our Images object//
let Bag = new Images('R2D2 Suitcase', './assets/bag.jpg', 'bag', 'This is an image of an R2D2 suitcase.')
let Banana = new Images('Banana Slicer', './assets/banana.jpg', 'banana', 'This is an image of a banana slicer.')
let Bathroom = new Images('Toilet Paper Holder with iPad Dock', './assets/bathroom.jpg', 'bathroom', 'This is an image of a toilet paper holder with iPad dock.')
let Boots = new Images('Toeless Rainboots', './assets/boots.jpg', 'boots', 'This is an image of yellow toeless rainboots.')
let Breakfast = new Images('All-in-One Breakfast Appliance', './assets/breakfast.jpg', 'breakfast', 'This is an image of an appliance with a toaster, griddle, and coffee pot all-in-one.')
let Bubblegum = new Images('Meatball Bubblegum', './assets/bubblegum.jpg', 'bubblegam', 'This is an image of meatabll flavored bubblegum.')
let Cthulhu = new Images('Cthulhu', './assets/cthulhu.jpg', 'cthulhu', 'This is an image of the fictional cosmic character Cthulhu.')
let Chair = new Images('Chair with Hill Seat', './assets/chair.jpg', 'chair', 'This is an image of a red chair with hill-like seat.')
let DogDuck = new Images('Dog Duck', './assets/dog-duck.jpg', 'dog_duck', 'This is an image of a dog wearing a duck beak.')
let Pen = new Images('Pen with Utensils', './assets/pen.jpg', 'pen', 'This is an image of pens with caps that are forks, spoons and knives.')
let PetSweep = new Images('Pet Sweep Slippers', './assets/pet-sweep.jpg', 'pet_sweep', 'This is an image of slippers for dogs that are fitted with floor sweeping materials.')
let Scissors = new Images('Pizza Scissors', './assets/scissors.jpg', 'scissors', 'This is an image of scissors that cut pizza slices.')
let Shark = new Images('Shark Sleepingbag', './assets/shark.jpg', 'shark', 'This is an image of a sleeping bag that looks like  a shark.')
let Sweep = new Images('Baby Sweep Onesie', './assets/sweep.png', 'boots', 'This is an image of baby with floor sweeping material attached to its onesie.')
let Tauntaun = new Images('Tauntaun Sleepingbag', './assets/tauntaun.jpg', 'tauntaun', 'This is an image of sleeping bag that looks like a Tauntaun from Star Wars.')
let Unicorn = new Images('Unicorn Meat', './assets/unicorn.jpg', 'unicorn', 'This is an image of a can of unicorn meat.')
let USB = new Images('Lizard Tail USB Stick', './assets/usb.gif', 'usb', 'This is an image of a USB stick that looks like a lizard tail.')
let WaterCan = new Images('Bent Water Can', './assets/water-can.jpg', 'water_can', 'This is an image of a bent water can.')
let WineGlass = new Images('Crooked Wine Glass', './assets/wine-glass.jpg', 'wine_glass', 'This is a wine glass with a crooked glass opening.')

busmallItems.push(Bag, Banana, Bathroom, Boots, Bubblegum, Breakfast, Cthulhu, Chair, DogDuck, Pen, PetSweep, Scissors, Shark, Sweep, Tauntaun, Unicorn, USB, WaterCan, WineGlass)

let randomNumber = function() {
  return Math.floor(Math.random() * busmallItems.length)
}

let firstImage
let secondImage
let thirdImage
let totalClicks = 0

let clickHandler = function(event) {
  if(firstImage._id === event.target.id){
    firstImage.clicked++
  } else if(secondImage._id === event.target.id){
    secondImage.clicked++
  } else if(thirdImage._id === event.target.id) {
    thirdImage.clicked++
  }
  totalClicks++
  console.log(totalClicks)
  displayImages()
}

let removeImages = function() {
  if(totalClicks === 20){
    elImgContainer.remove(elBusmallImages)
  }
}
//remove img elements//
//add chart elements//

let compareArray = []

let displayImages = function () {
  for(let i = 0; i < elBusmallImages.length; i++) {
    let elImage = elBusmallImages[i]
    let randomItem = busmallItems[randomNumber()]
    if(i === 0) {
      firstImage = randomItem
      compareArray.push(firstImage)
      while(compareArray.includes(firstImage)){
        randomItem = busmallItems[randomNumber()]
        firstImage = randomItem
      }
    } else if(i === 1) {
      secondImage = randomItem
      compareArray.push(secondImage)
      while (secondImage === firstImage || compareArray.includes(secondImage)) {
        randomItem = busmallItems[randomNumber()]
        secondImage = randomItem
      }
    } else if(i === 2) {
      thirdImage = randomItem
      compareArray.push(thirdImage)
      while (thirdImage === firstImage || thirdImage === secondImage || compareArray.includes(thirdImage)) {
        randomItem = busmallItems[randomNumber()]
        thirdImage = randomItem
      }
      compareArray = []
      compareArray.push(firstImage, secondImage, thirdImage)
    }
    elImage.src = randomItem.filePath
    elImage.setAttribute('id', randomItem._id)
    randomItem.shown++
    elImage.addEventListener('click', clickHandler)
  }
  while(totalClicks === 20){
    removeImages()
    displayChart()
    debugger;
  }
}


let displayTable = function() {
  for(let i = 0; i < busmallItems.length; i++) {
    let elRow = document.createElement('tr')
    elTable.appendChild(elRow)
    let elHeader = document.createElement('th')
    elRow.appendChild(elHeader)
    elHeader.innerText = busmallItems[i].title
    let elClicks = document.createElement('td')
    elRow.appendChild(elClicks)
    elClicks.innerText = busmallItems[i].clicked
    let elShown = document.createElement('td')
    elRow.appendChild(elShown)
    elShown.innerText = busmallItems[i].shown
    let elPercentage = document.createElement('td')
    elRow.appendChild(elPercentage)
    elPercentage.innerText = (busmallItems[i].clicked / busmallItems[i].shown) * 100 + '%'
  }
}

displayImages()