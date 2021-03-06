Vue.component('modal', {
	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-content">
		    <slot></slot>
		  </div>
		  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
		</div>
	`
});

Vue.component('card', {
	props: ['title', 'image', 'subtitle', 'avatar'],
	template: `
		<div class="card">
		  <div class="card-image">
		    <figure class="image is-4by3">
		      <img :src="image" alt="Placeholder image">
		    </figure>
		  </div>
		  <div class="card-content">
		    <div class="media">
		      <div class="media-left">
		        <figure class="image is-48x48">
		          <img :src="avatar" alt="Placeholder image">
		        </figure>
		      </div>
		      <div class="media-content">
		        <p class="title is-4">{{ title }}</p>
		        <p class="subtitle is-6">{{ subtitle }}</p>
		      </div>
		    </div>
		    <div class="content">
		      <slot></slot>
		    </div>
		  </div>
		</div>
	`
});

Vue.component('notification', {
	props: ['title'],
	template: `
		<div class="box">
	    	<article>	
    			<div class="content">
    				<strong>{{ title }}</strong>
    				<br>
    				<slot></slot>
    			</div>
	    	</article>
	    </div>
	`
});

var app = new Vue({
	el: "#app",
	data: {
		showModal: false
	}
});