<template>
  <div>
    <h3>Comedy Movie List</h3>
    <ul>
      <li v-for="movie in comedyMovies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "ComedyMovieList",
  computed: {
    comedyMovies() {
      return this.$store.state.movies.filter(movie => movie.genre === "Comedy");
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
