<template>
	<div class="grid-box">
		<div class="grid-top">
			<div class="row"><a-button @click="saveItem">Save</a-button></div>
			<div class="row">
				<a-button type="primary" @click="addItem('Watchlist', 4, 4)">Add Watchlist</a-button>
				<a-button type="primary" @click="addItem('Form', 2, 2)">Add Form</a-button>
				<a-button type="primary" @click="addItem('HelloWorld', 6, 1)">Add HelloWorld</a-button>
				<a-button type="primary" @click="addItem('Chart', 4, 2)">Add Chart</a-button>
			</div>
		</div>
		<!--  :list.sync="list" -->
		<PerfectScrollbar class="grid-stack" ref="scroll" :list.sync="list">
			<!-- :data-gs-x="item.x" :data-gs-y="item.y" :data-gs-width="item.width" :data-gs-height="item.height"  -->
			<div class="grid-stack-item" v-for="item in list" :key="item.i" :style="item.style !== '' ? item.style : ''">
				<div class="grid-stack-item-content">
					<div class="grid-header">
						<h3 class="grid-title">{{ item.title }}</h3>
						<div class="grid-right-row">
							<a-badge count="2"></a-badge>
							<a-button icon="close" @click="removeItem(item.i)"></a-button>
						</div>
					</div>
					<PerfectScrollbar class="grid-body">
						<component v-if="item.title.indexOf('Chart') === -1" :is="item.content"></component>
						<component v-if="item.title.indexOf('Chart') > -1" :is="item.content" :id="item.title + item.i"></component>
					</PerfectScrollbar>
				</div>
			</div>
		</PerfectScrollbar>
	</div>
</template>

<script>
import HelloWorld from '@components/HelloWorld.vue';
import Chart from '@components/Chart.vue';
import Chart2 from '@components/Chart2.vue';
import Watchlist from '@components/Watchlist.vue';
import Form from '@components/Form.vue';

import { GridStack } from 'gridstack';
import { CustomGridSet } from '@core/ui/custom-grid-set';
import '@core/ui/snap';
import 'gridstack/dist/gridstack.css';
import '@scss/grid.scss';

export default {
	name: 'Home',
	components: {
		Form,
		Watchlist,
		HelloWorld,
		Chart,
	},
	data() {
		return {
			grid: undefined,
			count: 0,
			list: [
				{
					i: '0',
					// width: 6,
					// height: 4,
					content: Chart,
					title: 'Chart',
					style: { width: '600px', height: '400px' },
				},
				{
					i: '1',
					// width: 6,
					// height: 4,
					content: Chart2,
					title: 'Chart2',
					style: { width: '600px', height: '400px' },
				},
			],
			gridSaveData: [],
		};
	},
	mounted: function() {
		this.count = this.list.length;

		this.grid = GridStack.init({
			disableDrag: true,
			disableResize: true,
			margin: 3,
		});
		CustomGridSet.set(this.$refs.scroll.ps);
		$(window).on('resize', this.scrollEvent);
	},
	methods: {
		scrollEvent() {
			this.$refs.scroll.ps.update();
		},
		addItem: function(com, w, h) {
			this.list.push({
				i: String(this.count),
				// x: 4,
				// y: 2,
				// width: w,
				// height: h,
				title: String(com),
				content: com,
				style: { width: w * 100 + 'px', height: h * 100 + 'px', left: '30px', top: '30px' },
			});
			this.count++;
			setTimeout(() => {
				CustomGridSet.set(this.$refs.scroll.ps);
			}, 1);
		},
		removeItem: function(val) {
			// console.log(val);
			const index = this.list.map((item) => item.i).indexOf(val);
			this.list.splice(index, 1);
		},
		saveItem() {
			this.gridSaveData = [];
			for (let index = 0; index < $('.grid-stack-item').length; index++) {
				const element = $('.grid-stack-item')[index];
				const item = {
					i: this.list[index].i,
					x: element.dataset.gsX,
					y: element.dataset.gsY,
					width: element.dataset.gsWidth,
					height: element.dataset.gsHeight,
					title: this.list[index].title,
					content: this.list[index].content,
					style: String(element.style.cssText),
				};
				this.gridSaveData.push(item);
			}
			console.log(this.gridSaveData);
		},
	},
	beforeDestroy: function() {
		$(window).off('resize', this.scrollEvent);
	},
};
</script>
