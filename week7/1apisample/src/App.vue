<template>
  <div id="app">
    <navbar></navbar>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <search v-on:SearchRequest="handleRequest"></search>
    <view-area :gifs=gifs></view-area>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Search from './components/Search.vue'
import ViewArea from './components/ViewArea.vue'

export default {
  name: 'App',
  components: {
    Navbar, Search, ViewArea
  },
  data() {
    return {
      gifs:[],
    }
  },
  methods: {
    handleRequest(query){
    this.gifs = [];
    const url = `http://api.giphy.com/v1/gifs/search?api_key=aiMm6kS7MEgRfLEmCZRvh7YA0wqq2SuY&q=${query}&limit=10`;
    fetch(url)
    .then((response) => {return response.json()})
    .then((response) => {
      this.gifs = response.data;
    })
    }
  },
  created() {
    const url = 'http://api.giphy.com/v1/gifs/trending?api_key=aiMm6kS7MEgRfLEmCZRvh7YA0wqq2SuY&limit=10';
    fetch(url)
    .then((response) => {return response.json()})
    .then((response) => {
      this.gifs = response.data;
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
