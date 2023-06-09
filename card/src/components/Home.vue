<template>
    <Child>
    <template v-slot:header>
        <img class="img1" src="https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4.png"/>
    </template>
    
    <template v-slot:title>
      <h3>Programming</h3>
    </template>
    
    <template v-slot:main>
    <p>Programming is the process of creating a set of instructions that tell a computer how to perform a task. </p>
    
    </template>
    
    <template v-slot:footer>
    <button>Click me</button>
    </template>
    
    </Child>
    <br>
    <h1>Programming </h1>
    </template>
    
    <script>
    import Child from './Child.vue';
    export default {
        name: `Home`,
        components: {
            Child
    
        }
    
    
    }
    
    
    
    </script>
    <style scoped>
    h1 {
        color: orange;
    }
    .img1{
        height: 300px;
        width: 396px;
    
    
    }
    
    </style>