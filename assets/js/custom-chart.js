const ctx = document.getElementById('doughnutChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [
        'Core Investment',
        'Opportunistic',
        'Exploratory',
        'Reserves',
    ],
    datasets: [{
        label: ['Funding Allocation'],
        data: [50, 20, 10, 20],
        borderWidth: 0,
        backgroundColor: [
        '#44A08D',
        '#136F84',
        '#0B446D',
        '#033356',
        ],
        hoverOffset: 4
    }],
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
