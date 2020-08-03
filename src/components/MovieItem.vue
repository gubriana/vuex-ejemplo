<template>
    <div class="card col m3 offset-m1">
        <div class="card-image">
        <img :src="require(`../assets/${movie.id}.jpg`)">
        </div>
        <div class="card-content">
        <p>{{ movie.title }}</p>
        </div>
        <div class="card-action">
        <button class="btn-floating btn-large waves-effect waves-light red btn-small" @click="disminuirPuntaje"><i class="material-icons">arrow_drop_down</i></button>
        <span class="puntaje"> {{movie.score}} </span>
        <button class="btn-floating btn-large waves-effect waves-light red btn-small" @click="aumentarPuntaje"><i class="material-icons">arrow_drop_up</i></button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MovieItem',
    props: {
        movie: {
            title: String,
            id: Number,
            image: String
        }
    },
    //manejador puntaje
    methods: {
        aumentarPuntaje() {
           this.$store.commit("addMovieScore", this.movie.id);
        },
        disminuirPuntaje() {
            this.$store.commit("substractMovieScore", this.movie.id);
        }
    }
}

</script>