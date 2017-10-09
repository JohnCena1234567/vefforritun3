Vue.component('modal', {
	props: ['title'],
	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-content">
		    <div class="box">
		    	<article>	
	    			<div class="content">
	    				<strong>{{ title }}</strong>
	    				<br>
	    				<slot></slot>
	    			</div>
		    	</article>
		    </div>
		  </div>
		  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
		</div>
	`
});

var app = new Vue({
	el: "#app",
	data: {
		showModal: false
	}
});