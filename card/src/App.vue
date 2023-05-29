<template>
 
  
  
  <Home/>
  <ParentF/>
</template>

<script>
import Home from './components/Home.vue';
import ParentF from './components/ParentF.vue';




export default {
    name: `App`,
    components: {
      Home,
      ParentF
      
      
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
