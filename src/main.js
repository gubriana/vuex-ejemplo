import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.use(Vuex)
  
const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'Scott Pilgrim vs. the World', genre: 'Comedy' },
      { id: 2, title: 'El día de la bestia', genre: 'Comedy' },
      { id: 3, title: 'What we do in the shadows', genre: 'Comedy' },
      { id: 4, title: 'Cars', genre: 'Family' },
      { id: 5, title: 'Toy Story', genre: 'Family' },
      { id: 6, title: 'Nemo', genre: 'Family' },
      { id: 7, title: 'The shinning', genre: 'Horror' }
    ]
  },
  // si queremos procesar los datos antes de usarlos, vamos a crear "getters"
  getters: {
    //comedyMovies() {
    //  return store.state.movies.filter(movie => movie.genre == 'Comedy')
    //},
    //familyMovies() {
    //  return store.state.movies.filter(movie => movie.genre == 'Family')
    //},

    getMoviesByGenre() {
      return function(genre) {
        return store.state.movies.filter(movie => movie.genre == genre)
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({     
  render: h => h(App),
  store,               // y esta también
}).$mount('#app')