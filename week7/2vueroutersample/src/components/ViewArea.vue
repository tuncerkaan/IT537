<template>
  <div>
    <ul>
      <li v-for="gif in gifs" :key="gif.id">
        <router-link :to="goProfile(gif.id)">
          <img :src="gif.images.fixed_height.url" alt="Trending gif">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ViewArea',
  props:['gifs'],
  methods: {
    goProfile(id) {
      return `/profile/${id}`;
    }
  }

}
</script>

<style scoped>
li 
{
  list-style: none;
  float: left;
  margin: 5px;
}
</style>
