<template>

<button class="Open-pop" v-on:click="()=>TogglePopup('buttonTrigger')">Open popup Form</button>
<br><br><br>
  <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="
  ()=>TogglePopup('buttonTrigger')">

 <Form > 
    <template v-slot:title>
        <h1>Application Form</h1>
    </template>
    <template  v-slot:main>
        <div class="radial">
        <div class="formdiv">
          <form class="form">
            <lable for="email">Email</lable><input type="email" placeholder="Email" v-model="email" id="email">
            <lable for="name">Name</lable><input type="text" placeholder="Name" v-model="name" id="name">
            <lable for="date">dob</lable><input type="date" placeholder="Date of Birth" v-model="dob" id="dob">
            <lable for="password">Password</lable><input type="password" placeholder="Password" v-model="password" id="password">
            <lable for="Password">Confirm Password</lable><input type="password" v-model="password" placeholder="Confirm password" id="password">
            <lable for="termsandconditions">Terms and conditions </lable><input type="checkbox" v-model="termsandconditions" id="termsandconditions">
            <!-- <button class="buttonSort">Sort</button> -->
        </form>
          <button class="button" v-on:click.prevent="submit()">Submit</button>
          

       
        </div>
        

    </div>
    </template>

 </Form>
</Popup>
<Popup v-if="popupTriggers.timedTrigger">
    <h2>My Popup</h2>
    
  </Popup>


</template>
<script>
import { ref } from 'vue';
import Form from './Form.vue';
import Popup from './Popup.vue';
export default {
    name:`ParentF`,
    
    components:{
        Form,
        Popup
    },

    data(){
        const popupTriggers = ref({
        buttonTrigger: false,
        timedTrigger: false
        });
        const TogglePopup=(trigger)=>{
        popupTriggers.value[trigger]=!popupTriggers.value[trigger]

      }





        return{
            email:"",
            name:"",
            password:"",
            dob:"",
            Popup,
            popupTriggers,
            TogglePopup

        }
    },
    props:{
        editEmail:{
            type:String,
            requre:true
        },
        editIndex:{
            type:Number,
            requre:true
        }

     


    },
    watch:{
        editEmail:function(newEmail){
            console.log("watch ",newEmail.email,
            newEmail.name,
            newEmail.dob,
            newEmail.password);
            this.email=newEmail.email;
            this.name=newEmail.name;
            this.dob=newEmail.dob;
            this.password=newEmail.password;
            // console.log(newEmail.email);
        }
    },
    methods:{
        submit:function(){
            console.log("Entered value ",
            this.email,this.name,
            this.dob,this.password,
             this.editIndex);
            if(this.editIndex!== -1){
                console.log("edit item");
                this.$emit("edit-item",{
                    editEmail:this.email,
                    editName:this.name,
                    editDob:this.dob,
                    editPassword:this.password,
                    editIndex:this.editIndex,
                });
            }else{
                this.$emit("submit-item", this.email,this.name,this.dob,this.password);
            }
            this.email="";
            this.name="";
            this.dob="";
            this.password="";
        }
    }
}


//         submit:function(){
//             this.$emit("submit-item",this.email,this.name,this.dob);
//             this.email="";
//             this.name="";
//             this.bob="";
          
//             if(this.editIndex!==-1){

                
//                 this.$emit("submit-ietm",{
//                    editEmail:this.email,
//                    editName:this.name,
//                   editDob:this.dob,
//                   editPasswor:this.password

//                 });
//             }
//             else{
//                 this.$emit("submit-item",this.email,this.name,this.dob);

//             }
//             this.email="";
//             this.name="";
//             this.password=""

            

            
//         }
//     }

// }


</script>
<style scoped>
.formdiv{
    display: flex;
    flex-direction: column;
    background-color: rgb(187, 35, 218);
    height: 400px;
    width: 350px;
    /* margin: auto; */
    gap:8px; 
    padding: 20px;
    border: 5px solid rgb(24, 223, 6);
}
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    text-align: left;
}
.button{
    width: 100px;
    height: 25px;
    margin: auto;
    color: white;
    background-color: green;
}
.buttonSort{
    width: 100px;
    height: 25px;
    margin: auto;
}
/* .radial{
    height:500px;
    width: 100%;
    background-color: aqua;
    padding: 10px;

    /* background-image:linear-gradient(orange,rgb(109, 104, 184)); */
   /* } */ 


#termsandconditions{
    margin-top: -22px;
}
.Open-pop{
    background-color: green;
    color: white;
    padding: 5px;
}


</style>