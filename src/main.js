import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
  
const store = new Vuex.Store({state: {
  movies: [
    { id: 1, title: 'Scott Pilgrim vs. the World', genre: 'Comedy' },
    { id: 2, title: 'El día de la bestia', genre: 'Comedy' },
    { id: 3, title: 'What we do in the shadows', genre: 'Comedy' },
    { id: 4, title: 'Cars', genre: 'Family' },
    { id: 5, title: 'Toy Story', genre: 'Family' },
    { id: 6, title: 'Nemo', genre: 'Family' }
  ]
},
})

new Vue({     
  store,               // y esta también
  render: h => h(App),
}).$mount('#app')