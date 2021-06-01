<template>
	<div :id="id" class="chart"></div>
</template>

<script>
import sample5min from 'chartiq/examples/data/STX_SAMPLE_5MIN.js';
import 'chartiq/js/addOns';
import { CIQ } from 'chartiq/js/advanced.js';
import 'chartiq/css/stx-chart.css';

export default {
	name: 'Chart',
	props: {
		id: String,
	},
	components: {},
	data() {
		return {};
	},
	mounted: function() {
		// console.log(WebComponents);
		let val = '#' + this.id;
		let stxx = new CIQ.ChartEngine({
			container: document.querySelector(val),
			layout: {
				chartType: 'candle',
				crosshair: true,
				candleWidth: 30,
				periodicity: 1,
				interval: 'day',
			},
			preferences: {
				currentPriceLine: true,
				whitespace: 100,
			},
			chart: {
				yAxis: {
					position: 'left',
				},
			},
		});
		new CIQ.Tooltip({
			stx: stxx,
			ohl: true,
			volume: true,
			series: true,
			studies: true,
		});
		stxx.loadChart(
			'TEST',
			{
				masterData: sample5min,
				periodicity: {
					period: 1,
					interval: 5,
					timeUnit: 'minute',
				},
			},
			function() {
				// CIQ.Studies.addStudy(stxx, 'ma');
				// CIQ.Studies.addStudy(stxx, 'Aroon');
				// stxx.addSeries('IBM', { color: 'blue', permanent: true });
				// stxx.addSeries('Close', {
				// 	color: 'yellow',
				// 	loadData: false,
				// 	shareYAxis: true,
				// 	renderer: 'Lines',
				// });
			},
		);
		// stxx.loadChart('SPY', {
		// 	masterData: sample5min,
		// 	periodicity: {
		// 		period: 1,
		// 		interval: 5,
		// 		timeUnit: 'minute',
		// 	},
		// });
	},
	methods: {},
};
</script>
