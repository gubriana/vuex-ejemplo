<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
