<template>

<div class="table">
    <ParentF v-on:submit-item="submit" v-bind:email="email" v-bind:name="name">

    </ParentF>
    <table >
        <tr>
            <th>Email</th>
            <th>Name</th>
            <th>dob</th>
        </tr>
        <tr v-for="(item,index) in items" v-bind:key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.dob }}</td>

        </tr>
    </table>

</div>

</template>

<script>
import ParentF from './ParentF.vue';
export default{
    name:`Table`,
    components:{
        ParentF
    },
    data(){
        return{
            items:[],
            email:"",
            name:"",
            dob:""
        }
    },

    methods:{
        submit(email,name,dob){
            this.items.push({'email':email,'name':name,'dob':dob});
            this.email="";
            this.name="";
            this.dob="";
        }

        
    }

}


</script>
<style scoped>
table,tr,td,th {
    border: 1px solid;
    height:20px;
    width: 200px;
}



</style>