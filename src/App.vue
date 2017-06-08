<template>
  <div id="app">
    <router-view :todos="todos"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
      return {
      todos: [
        {id:1,title:'Learn Vuejs',completed:false}
      ]
      }
    },
    mounted(){
      this.axios.get('http://laravel-package.dev/api/todos').then(response => {
        this.todos = response.data
        console.log(response.data)
      })
    },
    computed: {
      todoCount() {
        return this.todos.length
      }
    },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
