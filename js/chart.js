'use strict'

let titleArray = []

let titleArrayFunc = function(){
  for(let i = 0; i < busmallItems.length; i++){
    let objTitle = busmallItems[i].title
    titleArray.push(objTitle)
  }
}

titleArrayFunc()

let clickedArray = []

let clickedArrayFunc = function(){
  for(let i = 0; i < busmallItems.length; i++){
    let objClicked = busmallItems[i].clicked
    clickedArray.push(objClicked)
  }
}

let shownArray = []

let shownArrayFunc = function(){
  for(let i = 0; i < busmallItems.length; i++){
    let objShown = busmallItems[i].shown
    shownArray.push(objShown)
  }
}

let elChartContainer = document.getElementById('chart-container')
let ctx = elChartContainer.getContext('2d')

//how can i write a function that takes in an array and returns the value of the array.

function displayChart(){
  let elChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: titleArray,
      datasets: [{
        label: '# of Times Clicked',
        data: clickedArray,
        backgroundColor:
          'rgba(255, 99, 132, 0.2)',
        borderColor:
          'rgba(255,99,132,1)',
        borderWidth: 1
      },
      {
        label: '# of Times Shown',
        data: shownArray,
        backgroundColor:
          'rgba(54, 162, 235, 0.2)',
        borderColor:
          'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })}