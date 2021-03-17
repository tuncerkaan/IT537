<template>
  <div>
      <input v-model="query">
      <button @click="doSearch">Search</button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      query:''
    }
  },
  methods: {
    doSearch(){
      this.$emit('SearchRequest', this.query);
    }
  },

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
