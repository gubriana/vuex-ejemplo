import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.use(Vuex)
  
const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, score: 0, title: 'Scott Pilgrim vs. the World', genre: 'Comedy' },
      { id: 2, score: 0, title: 'El día de la bestia', genre: 'Comedy' },
      { id: 3, score: 0, title: 'What we do in the shadows', genre: 'Comedy' },
      { id: 4, score: 0, title: 'Cars', genre: 'Family' },
      { id: 5, score: 0, title: 'Toy Story', genre: 'Family' },
      { id: 6, score: 0, title: 'Nemo', genre: 'Family' },
      { id: 7, score: 0, title: 'The shinning', genre: 'Horror' }
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

    // si queremos un gete que reciba parametros, se usa doble funcion currificada.
    // (funcion que retorna una funcion)
    getMoviesByGenre() {
      return function(genre) {
        return store.state.movies.filter(movie => movie.genre == genre)
      }
    }
  },
  mutations: {
    addMovieScore(state, idMovie) {
      const movieEncontrada = state.movies.find(movie => movie.id == idMovie);
      console.log(`La película encontrada es `, movieEncontrada);
      movieEncontrada.score = movieEncontrada.score + 1;
    },
    substractMovieScore(state, idMovie) {
      const movieEncontrada = state.movies.find(movie => movie.id == idMovie);
      console.log(`La película encontrada es `, movieEncontrada);
      movieEncontrada.score = movieEncontrada.score - 1;
    }
  }
})

Vue.config.productionTip = false

new Vue({     
  render: h => h(App),
  store,               // y esta también
}).$mount('#app')