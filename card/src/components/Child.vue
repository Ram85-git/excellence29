<template>
    
    <div class="cart">
        
      <header>
       <slot name="header"></slot>
      </header>
    
       <section>
        <slot name="title"></slot>
       </section>
       
      <content>
       <slot name="main"></slot>
      </content>
      <footer>
        <slot name="footer"></slot>
      </footer>
    
    </div>
    
    </template>
    
    
    <script>
    
    export default {
        name:`Child`,
    
    
    
    }
    
    </script>
    <style scoped>
    .cart{
        border: 2px solid green;
        width: 400px;
        height: 500px;
        margin: auto;
    
    }
    
    </style>