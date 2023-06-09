<template>
 
  
  <Home/>
  <Table/>
  <SimpleForm/>
</template>

<script>
import Table from './components/Table.vue'
import Home from './components/Home.vue'
import SimpleForm from './components/SimpleForm.vue';



export default {
    name: `App`,
    components: {
      Home,
      Table,
      SimpleForm
      
      
      
      
      
      
      
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
