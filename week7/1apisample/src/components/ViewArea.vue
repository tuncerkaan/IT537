<template>
  <div>
    <ul>
      <li v-for="gif in gifs" :key="gif.id">
        <img :src="gif.images.fixed_height.url" alt="Trending gif">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ViewArea',
  props:['gifs']

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
