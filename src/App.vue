<template>
  <div id="app">
    <FamilyMovieList />
    <ComedyMovieList />
  </div>
</template>

<script>
import FamilyMovieList from './components/FamilyMovieList.vue'
import ComedyMovieList from './components/ComedyMovieList.vue'

export default {
  name: 'App',
  components: {
    FamilyMovieList,
    ComedyMovieList
  }
}
</script>

<style>
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
