<template>
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
          </form>
          <button class="button" v-on:click.prevent="submit()">Submit</button>
        </div>

    </div>
    </template>

</Form>
</template>
<script>
import Form from './Form.vue';
export default {
    name:`ParentF`,
    components:{
        Form
    },
    methods:{
        submit(){
            this.$emit("submit-item",this.email,this.name,this.dob);
            this.email="",
            this.name="",
            this.bob=""
        }
    }

}


</script>
<style scoped>
.formdiv{
    display: flex;
    flex-direction: column;
    background-color: rgb(187, 35, 218);
    height: 400px;
    width: 400px;
    margin: auto;
    gap:8px; 
      padding: 25px;
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
}
.radial{
    height:500px;
    width: 100%;
    background-color: aqua;
    padding: 10px;
    background-image:linear-gradient(orange,rgb(109, 104, 184));
    
}
#termsandconditions{
    margin-top: -22px;
}


</style>