<template>
    
    <div class="cart2">
        
        <section>
         <slot name="title"></slot>
        </section>
      
         <main>
          <slot name="body"></slot>
         </main>
         
        <content>
         <slot name="main"></slot>
        </content>
        
      
      </div>
      

</template>
<script>
export default{
  name:`Form`,

}



</script>
