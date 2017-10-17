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

var app = new Vue({
	el: "#app"
});