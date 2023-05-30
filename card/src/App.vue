<template>
 
  
  <Home/>
  <Table/>
</template>

<script>
import Table from './components/Table.vue'
import Home from './components/Home.vue'




export default {
    name: `App`,
    components: {
      Home,
      Table,
      
      
      
      
      
      
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
