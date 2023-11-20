import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend } from 'chart.js';
import Slider from 'react-slick';

// Manually register the components Chart.js needs
Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend);


const HomePage = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Sample data for the charts
  const chartData = {
    labels: ['Item 1', 'Item 2', 'Item 3'],
    datasets: [
      {
        label: 'Sample Dataset',
        data: [65, 59, 80],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ]
      }
    ]
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <h1>Welcome to My React App</h1>

      {/* Sliders with Charts */}
      <section>
        <h2>Charts</h2>
        <Slider {...sliderSettings}>
          <div >
            <h3>Bar Chart</h3>
            <Bar data={chartData} />
          </div>
          <div>
            <h3>Line Chart</h3>
            <Line data={chartData} />
          </div>
          <div>
            <h3>Pie Chart</h3>
            <Pie data={chartData} />
          </div>
        </Slider>
      </section>

      {/* Rest of your components... */}
    </div>
  );
}

export default HomePage;
