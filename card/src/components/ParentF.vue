<template>
<Form>
    <template v-slot:title>
        <h1>Application Form</h1>
    </template>
    <template v-slot:main>
        <form>
            
        </form>

    </template>

</Form>
</template>
<script>
import Form from './Form.vue';
export default {
    name:`ParentF`,
    components:{
        Form
    }

}


</script>