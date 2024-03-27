import React, { Component, useState } from "react";
import ReactApexChart from "react-apexcharts";
export default function Linechart2() {
const [state,setState ]= useState({
   
  series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
       
  }],
  options: {
    colors: ["#f19ac4"],  
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
     
    },
    
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      
    },
    title: {
      text: 'TVL',
      align: 'left'
    },
   
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      
    },
    
  },


})

return (
  <div>
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="line" height={350} width={450}/>
    </div>
  </div>
);

}
