'use strict'

let heroes = []
let elImgContainer = document.getElementById('img-container')
let elHeroImages = document.getElementsByClassName('hero-image')

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
let Thor = new Images('Thor', './assets/thor.jpg', 'thor', 'Image of the thunder god Thor.')
let BlackPanther = new Images('Black Panther', './assets/black-panther.jpeg', 'black_panther', 'Image of Black Panther.')
let Hulk = new Images('Hulk', './assets/hulk.jpg', 'hulk', 'Image of The Hulk.')
let Wolverine = new Images('Wolverine', './assets/wolverine.jpg', 'wolverine', 'Image of Wolverine.')
let Thanos = new Images('Thanos', './assets/thanos.jpg', 'thanos', 'Image of Thanos.')

heroes.push(Thor, BlackPanther, Hulk, Wolverine, Thanos)

let randomNumber = function() {
  return Math.floor(Math.random() * heroes.length)
}

let firstImage
let secondImage
let thirdImage

let clickHandler = function(event) {
  if(firstImage._id === event.target.id){
    firstImage.clicked++
  } else if(secondImage._id === event.target.id){
    secondImage.clicked++
  } else if(thirdImage._id === event.target.id) {
    thirdImage.clicked++
  }
  displayImages()
}

let displayImages = function () {
  for(let i = 0; i < elHeroImages.length; i++) {
    let elImage = elHeroImages[i]
    let randomHero = heroes[randomNumber()]
    if(i === 0) {
      firstImage = randomHero
    } else if(i === 1) {
      secondImage = randomHero
    } else if(i === 2) {
      thirdImage = randomHero
    }
    elImage.src = heroes[randomNumber()].filePath
    elImage.setAttribute('id', randomHero._id)
    randomHero.shown++
    console.log(randomHero._id, elImage.id)
    elImage.addEventListener('click', clickHandler)
  }
}

displayImages()

// console.log(firstImage)
// console.log(secondImage)
// console.log(thirdImage)