<template>
	<div id="box2">
		<h1>
			<slot></slot>
			<br>
			<bButton>{{ closetext }}</bButton>
		</h1>
	</div>

</template>

<script>
	import bButton from './bButton.vue'
	export default {
		props: [ 'closetext' ],
		components: { bButton },
	}
</script>

<style>
	#box2 {
    	border: 2px solid #F0F0F0;
    	padding: 4px 20px;
    	padding-top: 1px;
    	border-radius: 10px;
    	display: inline-block;
    	margin: 2px;
	}
</style>