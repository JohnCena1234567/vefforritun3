<template>	
	<button id="button">
		<slot></slot>
	</button>	
</template>

<script>
	export default {

	}
</script>

<style>
	#button {
		background-color: #1C78FF;
		font-size: 22px;
		border: none;
		color: white;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		padding: 10px 20px;
		border-radius: 10px;
		outline: none;
		box-shadow: 0 6px #999;
	}

	#button:active {
		background-color: #1C78FF;
		box-shadow: 0 3px #666;
		transform: translateY(4px);
	}
</style>