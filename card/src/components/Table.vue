<template>

<div class="table">
    <ParentF v-on:submit-item="submit" v-on:edit-item="edit" v-bind:edit-index="editIndex" v-bind:editEmail="editEmail"
                v-bind:editName="editName" v-bind:editDob="editDob" v-bind:editPassword="editPassword"/>
    <table >
        <tr>
            <th v-for="(item,index) in columns" v-bind:key="index" v-on:click="sortData(index)">{{ item }} ↿⇂</th>
                   
            <!--  <th>Email</th> -->
            <!-- <th>Name</th>
            <th>dob</th> 
            <th>Password</th> -->
            <th>Delete</th>
            <th>Edit</th>
        </tr>
        <tr v-for="(item, index) in items" v-bind:key="index">
                    <td v-for="(rowitem,rowindex) in item" v-bind:key="rowindex">{{ rowitem }}</td>
        <!-- <tr v-for="(item,index) in items" v-bind:key="index"> -->
            <!-- <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.dob }}</td> -->
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
            editIndex:-1,
            columns:["Email","Name","DOB","Password"],
            sortDesc:false,
            sortKey:"",
            }
    },

    methods:{
        submit:function(editEmail,editName,editDob,editPassword){
            this.items.push({
            'email':editEmail,
            'name':editName,
            'dob':editDob,
            'password':editPassword});
            this.email="";
            this.name="";
            this.dob="";
            this.editPassword=""
        },
        edit: function(obj){

        //  var {editEmail, editName, editDob,editIndex,editPassword} =obj;
        //  console.log("actual edit",editEmail,editName, editPassword, editDob,editIndex);
        var { editEmail,editName, editPassword, editDob,editIndex } = obj;
            console.log("actual edit ", editEmail,editName, editPassword, editDob,editIndex);
           
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

        // sortTable(){
        //     console.log("Hello from sort Table");
        //     if(index==0){
        //         console.log("you are in Table");
        //         for(i=0;i<this.items.length;i++){
        //             this.rows.push(this.items[i].email);
        //         }
        //         console.log(this.rows.sort());
        //         this.rows.sort();
        //     }
        // }
        
        sortData: function(index) {
            const key = this.columns[index].toLowerCase().replace(" ", "_");
            console.log(key);
            if (this.sortKey === key) {
                this.sortDesc = !this.sortDesc;
            } else {
                this.sortKey = key;
                this.sortDesc = false;
            }
            console.log("check",this.sortKey==='dob');
            this.items.sort((a, b) => {
                const valueA = a[this.sortKey];
                const valueB = b[this.sortKey];
                if (this.sortKey === "dob") {
                    // Convert the date strings to Date objects for comparison
                    const dateA = new Date(valueA);
                    const dateB = new Date(valueB);
                    if (this.sortDesc) {
                        return dateB.getTime() - dateA.getTime();
                    } else {
                        return dateA.getTime() - dateB.getTime();
                    }
                } else {
                    if (this.sortDesc) {
                        return valueB.localeCompare(valueA);
                    } else {
                        return valueA.localeCompare(valueB);
                    }
                }
            });
            },



        
    }

}


</script>
<style scoped>
table,tr,td,th {
    border: 2px solid rgb(18, 172, 113);
    height:20px;
    width: 200px;
    color:rgb(193, 37, 207);
}
table {
    margin-top: 5px;
    /* margin: auto; */
    border: 2px solid;
    width: 800px;

}



</style>