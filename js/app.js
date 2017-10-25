var app = new Vue({
	el:'#app',
	data: {
		books:[]
	},
	created() {
		var self = this
		this.$http.get('dataServer.json').then(response => {
		
			self.books = response.data

		}, response => {
			 // error callback
		});
	},
	methods: {
	}
});