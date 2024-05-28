const sampleData = {

labels: ['January', 'February', 'March', 'April', 'May', 'June'],

datasets: [{

label: 'Sample Data',

data: [65, 59, 80, 81, 56, 55],

backgroundColor: 'rgba(255, 99, 132, 0.2)',

borderColor: 'rgba(255, 99, 132, 1)',

borderWidth: 1

}]
} ;


const ctx = document.getElementById('myChart').getContext('2d');
let currentChartType = 'bar'; 

const chartTypes = {
    'bar': 'bar',
    'line': 'line',
    'pie': 'pie'
};

let myChart;

function renderChart(chartType) {
    if (myChart) {
        myChart.destroy(); 
    }
    
    const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`;
    const borderColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;

    sampleData.datasets[0].backgroundColor = randomColor;
    sampleData.datasets[0].borderColor = borderColor;
    
    myChart = new Chart(ctx, {
        type: chartTypes[chartType],
        data: sampleData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



document.querySelectorAll('.chart-type').forEach(button => {
    button.addEventListener('click', function() {
        const chartType = this.getAttribute('data-type');
        renderChart(chartType);
    });
});


renderChart(currentChartType);
