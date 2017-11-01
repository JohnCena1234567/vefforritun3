<template>	
	<button id="button2">
		<slot></slot>
	</button>	
</template>

<script>
	export default {

	}
</script>

<style>
	#button2 {
		background-color: white;
		font-size: 16px;
		border: 1px solid #3084FF;
		color: #3084FF;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		padding: 10px 12px;
		border-radius: 10px;
		outline: none;
		margin-top: 20px;
		float: left;
	}
</style>