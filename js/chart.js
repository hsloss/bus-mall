'use strict'

let elChartContainer = document.getElementById('chart-container')
let ctx = elChartContainer.getContext('2d')

//how can i write a function that takes in an array and returns the value of the array.

function displayChart(){
  let elChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [busmallItems[0].title, busmallItems[1].title, busmallItems[2].title],
      datasets: [{
        label: '# of Clicks',//# of clicks... key
        data: [busmallItems[0].clicked, busmallItems[1].clicked, busmallItems[2].clicked],//click property for each object//
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
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
  })
}
