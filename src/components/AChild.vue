<template>
	<div>
		<h2>AChild Component</h2>
		<div>
			<p>value : {{ name }}</p>
			<button type="button" @click="change">change</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['filename'],
	data() {
		return {
			name: 'bb',
		};
	},
	mounted: function() {},
	watch: {
		filename: function(n) {
			switch (n) {
				case 'a':
					this.name = '삼성';
					break;

				default:
					this.name = '찾는 파일이 없습니다.';
					break;
			}
		},
	},
	methods: {
		change() {
			// this.$emit('reset');
			console.log('bb');
		},
	},
};
</script>
