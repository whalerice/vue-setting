<template>
	<div class="about">
		<h1>This is an about page</h1>
		<div>
			<input type="text" v-model="inputValue" @keyup.enter="search()" />
			<button type="button" @click="search()">submit</button>
			<button type="button" @click="reset()">reset</button>
		</div>
		<AChild :filename="childVal"></AChild>
		<Form :value="childVal"></Form>
	</div>
</template>

<script>
import AChild from '@components/AChild';
import Form from '@components/Form';
export default {
	components: {
		AChild,
		Form,
	},
	data() {
		return {
			inputValue: '',
			childVal: '',
		};
	},
	methods: {
		search() {
			this.childVal = this.inputValue;
		},
		reset() {
			this.childVal = '';
			this.inputValue = '';
		},
	},
};
</script>
