<template>

<div class="table">
    <ParentF v-on:submit-item="submit" v-on:edit-item="edit" v-bind:edit-index="editIndex" v-bind:editEmail="editEmail"
                v-bind:editName="editName" v-bind:editDob="editDob" v-bind:editPassword="editPassword"/>
    <table >
        <tr>
            <th>Email</th>
            <th>Name</th>
            <th>dob</th>
            <!-- <th>Password</th> -->
            <th>Delete</th>
            <th>Edit</th>
        </tr>
        <tr v-for="(item,index) in items" v-bind:key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.dob }}</td>
            <!-- <td>{{ item.editPassword }}</td> -->

            <td>
                <i class="fa-solid fa-trash" v-on:click.prevent="deleteItem(index)"></i>
           
            </td>
             <td>
                
             <i class="fa-regular fa-pen-to-square" v-on:click.prevent="editItem(index)"></i>
         
             </td>
            
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
            editEmail:"",
            editName:"",
            editDob:"",
            editPassword:"",
            editIndex:-1
            }
    },

    methods:{
        submit:function(editEmail,editName,editDob,editPassword){
            this.items.push({'email':editEmail,
            'name':editName,'dob':editDob,'password':editPassword});
            this.email="";
            this.name="";
            this.dob="";
            this.editPassword=""
        },
        edit: function(obj){

         var {editEmail, editName, editDob,editIndex,editPassword} =obj;
         console.log("actual edit",editEmail,editName, editPassword, editDob,editIndex);
        this.items[editIndex].email=editEmail;
        this.items[editIndex].name=editName;
        this.items[editIndex].dob=editDob;
        this.items[editIndex].password=this.editPassword;
        this.editEmail = "";
            this.editName = "";
            this.editDob = "";
            this.editPassword = "";
            this.editIndex = -1;
        // this.items[editIndex].password=this.editPassword
         },

        editItem: function(index){
            console.log("Edit index");
            this.editIndex = index;
            // this.updateObject=this.items.findIndex();
            // this.name = this.items[index];
           this.editEmail=this.items[index];
         },

         
        deleteItem: function (index) {
            this.items.splice(index,1);
        },



        
    }

}


</script>
<style scoped>
table,tr,td,th {
    border: 2px solid rgb(18, 172, 113);
    height:20px;
    width: 200px;
    color:blueviolet;
}
table {
    margin-top: 5px;
    /* margin: auto; */
    border: 2px solid;
    width: 800px;

}



</style>