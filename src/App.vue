<template>
  <div id="app" class="container">
    <MovieList title="Películas de Comedia" genre="Comedy" />
    <div class="divider"></div>
    <MovieList title="Películas Familares" genre="Family" />
    <div class="divider"></div>
    <MovieList title="Películas Terror" genre="Horror" />
  </div>
</template>

<script>
//import { mapGetters } from 'vuex';
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  },
  /*
  computed: {
    // forma abreviada de traerme los getters
    comedyMovies() {
      return this.$store.getters.comedyMovies
    },
    familyMovies() {
      return this.$store.getters.familyMovies
    }
    //...mapGetters(["comedyMovies", "familyMovies"])
  },
  mounted() {
    console.log(this.$store.getters.comedyMovies)
  }*/
}
</script>

<style>
#app {
  font-family: Dosis, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
