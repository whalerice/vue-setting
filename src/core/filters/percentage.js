import Vue from 'vue';
Vue.filter('percentage', function(value, decimals) {
	if (!value) {
		value = 0;
	}

	if (!decimals) {
		decimals = 0;
	}

	value = value * 100;
	value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
	value = value + '%';
	return value;
});
