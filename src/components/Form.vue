<template>
	<div>
		<h2>Form Component</h2>
		<p>value : {{ name }}</p>
	</div>
</template>
<script>
export default {
	props: ['value'],
	name: 'Form',
	data() {
		return {
			name: 'cc',
		};
	},
	watch: {
		value: function(n) {
			switch (n) {
				case 'a':
					this.name = '으캬캬캬';
					break;
				case 'b':
					this.name = '허허';
					break;
				default:
					this.name = '없는뎀!!';
					break;
			}
		},
	},
	methods: {},
};
</script>
