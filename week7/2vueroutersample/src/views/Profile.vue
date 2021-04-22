<template>
  <div class="profile">
    <b-container class="bv-example-row">
    <b-row class="text-center">
      <b-col><img class="screen-half" :src="gif.user.avatar_url" alt="User gif"></b-col>
      <b-col cols="8">
        <div>
          <b-jumbotron :header="gif.user.display_name" :lead="gif.user.description">
            <p>For more information visit website</p>
            <b-button variant="primary" target="_blank" :href="gif.user.website_url">More Info</b-button>
          </b-jumbotron>
        </div>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Profile',
  data() {
    return {
      gif:{},
    }
  },
  created() {
    const url = `http://api.giphy.com/v1/gifs/${this.$route.params.id}?api_key=aiMm6kS7MEgRfLEmCZRvh7YA0wqq2SuY`;
    /*fetch(url)
    .then((response) => {return response.json()})
    .then((response) => {
      this.gif = response.data;
    })*/

    axios.get(url)
    .then((response) => {return response.data.data})
    .then((data) => {
      this.gif = data;
    })

    console.log('Variables is here ...' + this.$root._self.$options.globals.variables.sample);

  }
}
</script>
<style>
  .screen-half{
    width:100%;
  }
</style>