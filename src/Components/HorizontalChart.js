
/* App.js */
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const HorizontalChart = () => {
		const options = {
			animationEnabled: true,
            height:300,
            
			theme: "light2",
			title:{
				text: "Most Popular Social Networking Sites"
			},
			axisX: {
				title: "Social Network",
				reversed: true,
			},
			axisY: {
				title: "Monthly Active Users",
				includeZero: true,
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  2200000000, label: "Facebook" },
					{ y:  1800000000, label: "YouTube" },
					{ y:  800000000, label: "Instagram" },
					{ y:  563000000, label: "Qzone" },
					{ y:  376000000, label: "Weibo" },
					
				]
			}]
		}
        const addSymbols=(e)=>{
            var suffixes = ["", "K", "M", "B"];
            var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
            if(order > suffixes.length - 1)
                order = suffixes.length - 1;
            var suffix = suffixes[order];
            return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
        }
		return (
		<div style={{height:"100%",width:"100%",padding:"10px",borderRadius:"10px"}}>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
}
export default HorizontalChart;                              
