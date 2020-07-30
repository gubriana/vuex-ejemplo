<template>
  <div class="row">
    <div class="col s12">
      <h3 class="grey-text">{{title}}</h3>
      <div class="col m10 offset-m1">
        <div class="card col m3 offset-m1" v-for="movie in Movies" :key="movie.id">
          <div class="card-image">
            <img :src="require(`../assets/${movie.id}.jpg`)">
          </div>
          <div class="card-content">
            <p>{{ movie.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--<img :src="require(../assets/${id}.jpg)">-->
  
</template>

<script>
export default {
  name: 'MovieList',
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