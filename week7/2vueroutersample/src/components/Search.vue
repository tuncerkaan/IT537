<template>
  <div>
    <b-container class="mt-3">
      <b-input-group>
        <b-form-input v-model="query" @keypress.enter="doSearch"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-primary" @click="doSearch">Button</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-container>
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
  margin-top: 10px;
}
</style>
