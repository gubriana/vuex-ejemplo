<template>
  <div class="row">
    <div class="col s12">
      <h3 class="grey-text">Family Movie List</h3>
      <div class="col m10 offset-m1">
        <div class="card col m3 offset-m1 " v-for="movie in familyMovies" :key="movie.id">
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
  name: "FamilyMovieList",
  computed: {
    familyMovies() {
      return this.$store.state.movies.filter(movie => movie.genre === "Family");
    }
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding: 0px;
}
</style>
