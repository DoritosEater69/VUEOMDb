new Vue({

	el: '#app',

	data: {
		movieData: [],
		title: null,
	},

	methods: {

		getMovie: function (title) {
			axios
				.get('http://www.omdbapi.com/?apikey=25b10283&t=' + this.title)
				.then(response => (this.movieData = response.data))
		}

	}
})

//Usage : 						http://www.omdbapi.com/
//API : 		Example:		http://www.omdbapi.com/?apikey=25b10283&t=Donnie+Darko
