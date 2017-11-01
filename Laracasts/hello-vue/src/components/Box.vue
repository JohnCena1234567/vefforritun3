<template>
	<div id="box">
		<h1>
			<slot></slot>
		</h1>
	</div>

</template>

<script>
	export default {

	}
</script>

<style>
	#box {
    	border: 2px solid #F0F0F0;
    	padding: 4px 10px;
    	padding-top: 1px;
    	border-radius: 10px;
    	display: inline-block;
    	margin: 2px;
	}
</style>