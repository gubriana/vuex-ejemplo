<template>
  <div class="row">
    <div class="col s12">
      <h3 class="grey-text">{{title}}</h3>
      <br>
      <MovieItem v-for="movie in Movies" :key="movie.id" :movie=movie />
    </div>
  </div>
  <!--<img :src="require(../assets/${id}.jpg)">-->

</template>

<script>
import MovieItem from '@/components/MovieItem.vue'

export default {
  name: 'MovieList',
  components: {
    MovieItem
  },
  props: {
    title: String,
    genre: String
  },
  computed: {
    Movies() {
      /*if (this.genre == 'Comedy') {
        return this.$store.getters.comedyMovies
      } else if (this.genre == 'Family') {
        return this.$store.getters.familyMovies
      } else {
        return []
      }
    }*/
    return this.$store.getters.getMoviesByGenre(this.genre);
    }
  }
}
</script>

<style scoped>
.card{
  padding: 0px;
}
</style>