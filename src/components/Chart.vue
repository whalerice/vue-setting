<template>
	<div :id="id" class="chart"></div>
</template>

<script>
import sample5min from 'chartiq/examples/data/STX_SAMPLE_5MIN.js';
import { CIQ } from 'chartiq/js/advanced.js';
// import { CIQ } from 'chartiq/js/standard.js';
import 'chartiq/css/stx-chart.css';

export default {
	name: 'Chart',
	props: {
		id: String,
	},
	data() {
		return {};
	},
	mounted: function() {
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
		});

		stxx.loadChart('SPY', {
			masterData: sample5min,
			periodicity: {
				period: 1,
				interval: 5,
				timeUnit: 'minute',
			},
		});
		stxx.addSeries('Close', {
			color: 'blue',
			loadData: false,
			shareYAxis: true,
			renderer: 'Lines',
		});
	},
	methods: {},
};
</script>
