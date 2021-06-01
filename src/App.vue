<template>
	<div id="app">
		<header class="header">
			<nav class="nav">
				<router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
				<router-link to="/web">Web</router-link>
			</nav>
		</header>
		<div class="container">
			<!-- <router-view /> -->
			<transition name="view">
				<router-view />
			</transition>
		</div>
	</div>
</template>
