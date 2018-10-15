const chartOptions = {
  title: {
    display: true,
    text: 'My Asset',
    fontSize: 16
  },
  legend: {
    position: 'bottom'
  },
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        return data['datasets'][0]['data'][tooltipItem['index']] + '%';
      }
    }
  }
};

export default chartOptions;