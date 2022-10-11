<template>
  <b-container id="app" class="py-4">
    <div class="text-center">
      <h1 class="display-1">Todo List</h1>
      <p class="lead mx-3">Brought to you by JSONs</p>
    </div>
    <Main msg="Welcome to Your Vue.js App" />
  </b-container>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
  html {
    height: 100%;
  }
  html body {
    background: #F5F4F4;
    /* background: linear-gradient(180deg, rgba(92, 147, 184,1) 0%, rgba(220,219,227,1) 96%); */
  }
  .jumbotron {
    background-color: #3C5087;
  }
  .btn {
    background-color: #4194E0 !important;
    border: none !important;
  }
  .cancel-btn {
    background-color: #F5F4F4 !important;
    color: #203E5D !important;
  }
</style>
