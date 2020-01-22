new Vue({

	el: '#app',

	data: {
		url: "",
		movieData: [],
		valArr: [],
		titleArr: [],
		title: null,
	},

	methods: {

		getMovie: function (title) {
			axios
				.get('http://www.omdbapi.com/?apikey=25b10283&t=' + this.title)
				.then(response => (this.movieData = response.data))
		},

		splitVal: function (value) {
			this.valArr = value.split(",");
			return this.valArr;
		},

		splitTitle: function (value) {
			this.titleArr = value.split(" ");
			return this.titleArr;
		},

		genSearchLink: function (value) {
			this.url = "https://www.google.de/?q=" + value;
			return this.url;
		},

	}
})

//Usage : 						http://www.omdbapi.com/
//API : 		Example:		http://www.omdbapi.com/?apikey=25b10283&t=Donnie+Darko
