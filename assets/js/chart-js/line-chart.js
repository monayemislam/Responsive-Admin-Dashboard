const ctxLine = document.getElementById('earningChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: '# of Transaction',
            data: [12, 55, 30, 90, 20, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
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
        plugins: {
          legend: {
            labels: {
              color: "#e5e7ea",
            }
          }
        },
        scales: {
          y: {
            ticks: {
              color: "#e5e7ea",
              font: {
                size: 11,
              },
              beginAtZero: true
            }
          },
          x: {
            ticks: {
              color: "#e5e7ea",
              font: {
                size: 11
              },
              beginAtZero: true
            }
          }
        }
      }

    
});