Vue.component('button-counter', {
 	template: `
 		<button class="button is-danger" v-on:click="incrementCounter">
 			{{ counter }}
 		</button>
 	`,
  	data: function () {
    	return {
      		counter: 0
    	}
  	},
  	methods: {
    	incrementCounter: function () {
      		this.counter++
      		this.$emit('increment')
    	}
  	},
});


var app = new Vue({
	el: '#app',
  	data: {
    	total: 0
  	}
});