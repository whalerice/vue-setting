import Vue from 'vue';

Vue.filter('currency', function(value) {
	if (!value) return '';
	let num = new Number(value);
	return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
});
