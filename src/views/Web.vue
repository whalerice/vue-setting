<template>
	<div cq-context class="chart-box">
		<div class="ciq-nav"></div>
		<div class="ciq-chart-area">
			<div class="ciq-chart">
				<div class="chartContainer"></div>
			</div>
		</div>
		<div class="ciq-footer full-screen-hide">
			<cq-share-button></cq-share-button>
			<cq-show-range></cq-show-range>
		</div>
	</div>
</template>

<script>
// import 'chartiq/js/thirdparty/custom-elements.min.js';
import 'chartiq/js/advanced';
import 'chartiq/js/addOns';
// import { CIQ } from 'chartiq/js/componentUI';
import 'chartiq/js/components';
// import { CIQ } from 'chartiq/js/components';

import getDefaultConfig from 'chartiq/js/defaultConfiguration';
import PerfectScrollbar from 'chartiq/js/thirdparty/perfect-scrollbar.esm';

import quotefeed from 'chartiq/examples/feeds/quoteFeedSimulator';
import 'chartiq/examples/feeds/symbolLookupChartIQ';
import 'chartiq/examples/markets/marketDefinitionsSample';
import 'chartiq/examples/markets/marketSymbologySample';
import marker from 'chartiq/examples/markers/markersSample';
import 'chartiq/examples/markers/tradeAnalyticsSample';
import 'chartiq/examples/markers/videoSample';
import 'chartiq/examples/translations/translationSample';
import forecastfeed from 'chartiq/examples/feeds/quoteFeedForecastSimulator';

import 'chartiq/css/normalize.css';
import 'chartiq/css/page-defaults.css';
import 'chartiq/css/stx-chart.css';
import 'chartiq/css/chartiq.css';

export default {
	components: {
		// cqShareButton: CIQ.UI.components('cq-share-button')[0].tag,
	},
	data() {
		return {
			// ShareButton: new CIQ.UI.components('cq-share-button')[0].classDefinition,
		};
	},
	mounted: function() {
		// console.log(CIQ.UI);
		const config = getDefaultConfig({
			markerSample: marker.MarkersSample,
			scrollStyle: PerfectScrollbar,
			quoteFeed: quotefeed,
			forecastQuoteFeed: forecastfeed,
		});
		config.createChart();
		// this.stxx = config.createChart();
	},
};
</script>

<style lang="scss" scoped>
.chart-box {
	width: 100%;
	height: calc(100% - 44px);
	.ciq-nav {
		background-color: #fff;
	}
}
</style>
