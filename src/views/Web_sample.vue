<template>
	<cq-context>
		<cq-color-picker></cq-color-picker>

		<div class="ciq-nav full-screen-hide">
			<!-- enables the more button when in break-sm mode : break-sm 모드에서 더 많은 버튼을 활성화합니다. -->
			<div class="sidenav-toggle ciq-toggles">
				<cq-toggle class="ciq-sidenav" cq-member="sidenav" cq-toggles="sidenavOn,sidenavOff" cq-toggle-classes="active,"
					><span></span>
					<cq-tooltip>More</cq-tooltip>
				</cq-toggle>
			</div>

			<cq-menu class="ciq-search">
				<cq-lookup cq-keystroke-claim="" cq-keystroke-default="" cq-uppercase=""></cq-lookup>
			</cq-menu>

			<!-- any entry in this div will be shown in the side navigation bar in break-sm mode : 이 Div의 모든 항목은 사이드 내비게이션 바에 브레이크-sm 모드로 표시됩니다.-->
			<cq-side-nav cq-on="sidenavOn">
				<div class="icon-toggles ciq-toggles">
					<cq-toggle class="ciq-draw" cq-member="drawing"><span></span><cq-tooltip>Draw</cq-tooltip></cq-toggle>
					<cq-toggle class="ciq-CH" cq-member="crosshair"><span></span><cq-tooltip>Crosshair</cq-tooltip></cq-toggle>
					<cq-info-toggle></cq-info-toggle>
				</div>
			</cq-side-nav>

			<div class="ciq-menu-section">
				<div class="ciq-dropdowns">
					<cq-menu class="ciq-menu ciq-period">
						<span><cq-clickable stxbind="Layout.periodicity">1D</cq-clickable></span>
						<cq-menu-dropdown>
							<cq-menu-container cq-name="menuPeriodicity"></cq-menu-container>
						</cq-menu-dropdown>
					</cq-menu>

					<cq-menu class="ciq-menu ciq-views collapse">
						<span>Views</span>
						<cq-menu-dropdown>
							<cq-views></cq-views>
						</cq-menu-dropdown>
					</cq-menu>

					<cq-menu class="ciq-menu ciq-display collapse">
						<span>Display</span>
						<cq-menu-dropdown>
							<cq-menu-dropdown-section class="chart-types">
								<cq-heading>Chart Style</cq-heading>
								<cq-menu-container cq-name="menuChartStyle"></cq-menu-container>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="chart-aggregations">
								<cq-menu-container cq-name="menuChartAggregates"></cq-menu-container>
							</cq-menu-dropdown-section>
						</cq-menu-dropdown>
					</cq-menu>

					<cq-menu class="ciq-menu ciq-studies collapse">
						<span>Studies</span>
						<cq-menu-dropdown cq-no-scroll="">
							<cq-study-legend cq-no-close="">
								<cq-section-dynamic>
									<cq-heading>Current Studies</cq-heading>
									<cq-study-legend-content>
										<template cq-study-legend="">
											<cq-item>
												<cq-label class="click-to-edit"></cq-label>
												<div class="ciq-icon ciq-close"></div>
											</cq-item>
										</template>
									</cq-study-legend-content>
									<cq-placeholder>
										<div stxtap="Layout.clearStudies()" class="ciq-btn sm">Clear All</div>
									</cq-placeholder>
								</cq-section-dynamic>
							</cq-study-legend>
							<div class="scriptiq-ui">
								<cq-heading>ScriptIQ</cq-heading>
								<cq-item><cq-clickable cq-selector="cq-scriptiq-editor" cq-method="open">New Script</cq-clickable></cq-item>
								<cq-scriptiq-menu></cq-scriptiq-menu>
								<cq-separator></cq-separator>
							</div>
							<cq-heading cq-filter="" cq-filter-min="15">Studies</cq-heading>
							<cq-scroll cq-no-maximize="">
								<cq-studies></cq-studies>
							</cq-scroll>
						</cq-menu-dropdown>
					</cq-menu>

					<cq-menu class="ciq-menu stx-markers collapse">
						<span>Events</span>
						<cq-menu-dropdown>
							<cq-heading>Chart Events</cq-heading>
							<cq-item stxtap="Markers.showMarkers('square')"
								>Simple Square<span class="ciq-radio"><span></span></span>
							</cq-item>
							<cq-item stxtap="Markers.showMarkers('circle')"
								>Simple Circle<span class="ciq-radio"><span></span></span>
							</cq-item>
							<cq-item stxtap="Markers.showMarkers('callout')"
								>Callouts<span class="ciq-radio"><span></span></span>
							</cq-item>
							<cq-item class="ta_markers-ui" stxtap="Markers.showMarkers('trade')"
								>Trade<span class="ciq-radio"><span></span></span>
							</cq-item>
							<cq-item class="video_markers-ui" stxtap="Markers.showMarkers('video')"
								>Video<span class="ciq-radio"><span></span></span>
							</cq-item>
							<cq-item stxtap="Markers.showMarkers('abstract')"
								>Abstract<span class="ciq-radio"><span></span></span>
							</cq-item>
							<cq-separator></cq-separator>
							<cq-item stxtap="Markers.showMarkers()" class="ciq-active"
								>None<span class="ciq-radio"><span></span></span>
							</cq-item>
							<div class="timespanevent-ui">
								<cq-separator></cq-separator>
								<cq-heading>Panel Events</cq-heading>
								<cq-item class="span-event" stxtap="TimeSpanEvent.showMarkers('Order')" cq-no-close=""
									>Order<span class="ciq-checkbox ciq-active"><span></span></span
								></cq-item>
								<cq-item class="span-event" stxtap="TimeSpanEvent.showMarkers('CEO')" cq-no-close=""
									>CEO<span class="ciq-checkbox ciq-active"><span></span></span
								></cq-item>
								<cq-item class="span-event" stxtap="TimeSpanEvent.showMarkers('News')" cq-no-close=""
									>News<span class="ciq-checkbox ciq-active"><span></span></span
								></cq-item>
							</div>
						</cq-menu-dropdown>
					</cq-menu>

					<cq-menu class="ciq-menu ciq-preferences collapse">
						<span></span>
						<cq-menu-dropdown>
							<cq-menu-dropdown-section class="chart-preferences">
								<cq-heading>Chart Preferences</cq-heading>
								<cq-menu-container cq-name="menuChartPreferences"></cq-menu-container>
								<cq-separator></cq-separator>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="y-axis-preferences">
								<cq-heading>Y-Axis Preferences</cq-heading>
								<cq-menu-container cq-name="menuYAxisPreferences"></cq-menu-container>
								<cq-separator></cq-separator>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="chart-theme">
								<cq-heading>Themes</cq-heading>
								<cq-themes></cq-themes>
								<cq-separator></cq-separator>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="chart-locale">
								<cq-heading>Locale</cq-heading>
								<cq-item><cq-clickable cq-selector="cq-timezone-dialog" cq-method="open">Change Timezone</cq-clickable></cq-item>
								<cq-item stxsetget="Layout.Language()"><cq-flag></cq-flag><cq-language-name>Change Language</cq-language-name></cq-item>
							</cq-menu-dropdown-section>
						</cq-menu-dropdown>
					</cq-menu>
				</div>
				<div class="trade-toggles ciq-toggles">
					<cq-toggle class="tfc-ui sidebar stx-trade" cq-member="tfc"><span></span><cq-tooltip>Trade</cq-tooltip></cq-toggle>
					<cq-toggle class="tc-ui stx-tradingcentral" cq-member="tc"><span></span><cq-tooltip>Analysis</cq-tooltip></cq-toggle>
					<cq-toggle class="recognia-ui stx-recognia" cq-member="recognia"><span></span><cq-tooltip>Analysis</cq-tooltip></cq-toggle>
				</div>
			</div>
		</div>
		<!-- End Navbar -->

		<!-- custom tag for scriptiq only works when plugin is loaded : scriptiq에 대한 사용자 지정 태그는 플러그인이 로드된 경우에만 작동합니다.-->
		<cq-scriptiq class="scriptiq-ui"></cq-scriptiq>

		<!-- custom tag for tradingcentral only works when plugin is loaded : 거래 센터에 대한 사용자 지정 태그는 플러그인이 로드된 경우에만 작동합니다.-->
		<cq-tradingcentral class="tc-ui" token="eZOrIVNU3KR1f0cf6PTUYg==" partner="1000" disabled=""></cq-tradingcentral>

		<!-- custom tag for recognia only works when plugin is loaded 인식에 대한 사용자 지정 태그는 플러그인이 로드된 경우에만 작동합니다. -->
		<cq-recognia uid="" lang="en" disabled=""></cq-recognia>

		<div class="ciq-chart-area">
			<div class="ciq-chart">
				<cq-palette-dock>
					<div class="palette-dock-container">
						<cq-drawing-palette class="palette-drawing grid palette-hide" docked="true" orientation="vertical" min-height="300" cq-drawing-edit="none"></cq-drawing-palette>
						<cq-drawing-settings class="palette-settings" docked="true" hide="true" orientation="horizontal" min-height="40" cq-drawing-edit="none"></cq-drawing-settings>
					</div>
				</cq-palette-dock>

				<div class="chartContainer">
					<!-- stx-hu-tooltip is required only if addon tooltip is used and customization is required  : 추가 도구 설명이 사용되고 사용자 정의가 필요한 경우에만 stx-hu-tool tip이 필요합니다.-->
					<stx-hu-tooltip>
						<stx-hu-tooltip-field field="DT">
							<stx-hu-tooltip-field-name>Date/Time</stx-hu-tooltip-field-name>
							<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value>
						</stx-hu-tooltip-field>
						<stx-hu-tooltip-field field="Close">
							<stx-hu-tooltip-field-name></stx-hu-tooltip-field-name>
							<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value>
						</stx-hu-tooltip-field>
					</stx-hu-tooltip>

					<cq-chart-title cq-marker="" cq-browser-tab=""></cq-chart-title>

					<cq-chartcontrol-group class="full-screen-show" cq-marker=""></cq-chartcontrol-group>

					<cq-comparison-lookup></cq-comparison-lookup>

					<cq-chart-legend></cq-chart-legend>

					<cq-loader></cq-loader>
				</div>
				<!-- End Chart Container -->
			</div>
			<!-- End Chart Box -->
		</div>
		<!-- End Chart Area -->

		<!-- Markers/Events -->
		<cq-abstract-marker cq-type="helicopter"></cq-abstract-marker>
		<!-- End Marker/Events -->

		<!-- Attribution component -->
		<cq-attribution></cq-attribution>

		<div class="ciq-footer full-screen-hide">
			<cq-share-button></cq-share-button>
			<cq-show-range></cq-show-range>
		</div>

		<!-- End Footer -->

		<cq-dialogs>
			<cq-dialog>
				<cq-drawing-context></cq-drawing-context>
			</cq-dialog>

			<cq-dialog>
				<cq-study-context></cq-study-context>
			</cq-dialog>
		</cq-dialogs>

		<cq-side-panel></cq-side-panel>
	</cq-context>
</template>

<script>
import 'chartiq/css/normalize.css';
import 'chartiq/css/page-defaults.css';
import 'chartiq/css/stx-chart.css';
import 'chartiq/css/chartiq.css';

import 'chartiq/js/thirdparty/custom-elements.min.js';
import 'chartiq/js/advanced';
import 'chartiq/js/addOns';
// import 'chartiq/js/componentUI';
// import 'chartiq/js/components';
import { CIQ } from 'chartiq/js/components';

import getDefaultConfig from 'chartiq/js/defaultConfiguration';
import PerfectScrollbar from 'chartiq/js/thirdparty/perfect-scrollbar.esm';

import quotefeed from 'chartiq/examples/feeds/quoteFeedSimulator';
import marker from 'chartiq/examples/markers/markersSample';
import forecastfeed from 'chartiq/examples/feeds/quoteFeedForecastSimulator';

import 'chartiq/examples/feeds/symbolLookupChartIQ';
import 'chartiq/examples/markets/marketDefinitionsSample';
import 'chartiq/examples/markets/marketSymbologySample';
import 'chartiq/examples/markers/tradeAnalyticsSample';
import 'chartiq/examples/markers/videoSample';
import 'chartiq/examples/translations/translationSample';

export default {
	mounted: function() {
		console.log(CIQ.UI);
		const config = getDefaultConfig({
			markerSample: marker.MarkersSample,
			scrollStyle: PerfectScrollbar,
			quoteFeed: quotefeed,
			forecastQuoteFeed: forecastfeed,
		});
		config.createChart();
		// let stxx = config.createChart();
		// console.log(stxx);
	},
};
</script>

<style lang="scss" scoped>
cq-dialog {
	background-color: black;
}
</style>
