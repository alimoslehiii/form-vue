<template>
  <div>
    <form @submit.prevent="storeUser">
      <div class="row form-row">
        <div class="form-group col-md-6">
          <label for="name">Full Name</label>
          <input v-model="name" type="text" class="form-control" id="name" placeholder="full name">
          <div class="form-text text-danger">
            {{ nameErrorText }}
          </div>
        </div>
        <div class="form-group col-md-6">
          <label for="fatherNAme">Father's name</label>
          <input v-model="fatherName"  type="text" class="form-control" id="fatherName" placeholder="father's name">
          <div class="form-text text-danger">
            {{ fatherErrorText }}
          </div>
        </div>
      </div>
      <div class="row flex-row">
        <div class="form-group col-md-6">
          <label for="userName">User name</label>
          <input v-model="userName" type="text" class="form-control" id="userName" placeholder="user name">
          <div class="form-text text-danger">
            {{ userErrorText }}
          </div>
        </div>
        <div class="form-group col-md-6">
          <label for="phone">Phone</label>
          <input v-model="phone" type="text" class="form-control" id="phone" placeholder="Apartment, studio, or floor">
          <div class="form-text text-danger">
            {{ phoneErrorText }}
          </div>
        </div>
      </div>
      <div class="row flex-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input v-model="email" type="email" class="form-control" id="inputEmail4" placeholder="Email">
          <div class="form-text text-danger">
            {{ emailErrorText }}
          </div>
        </div>
        <div class="form-group col-md-6">
          <label for="birthID">Birthday ID</label>
          <input v-model="birthID" type="text" class="form-control" id="birthID" placeholder="birthday ID">
          <div class="form-text text-danger">
            {{ birthErrorText }}
          </div>
        </div>
      </div>
      <div class="row flex-row">
        <div class="form-group col-md-4">
          <label for="city">city</label>
          <input v-model="city" type="text" class="form-control" id="city" placeholder="city">
          <div class="form-text text-danger">
            {{ cityErrorText }}
          </div>
        </div>
        <div class="form-group col-md-4">
          <label for="street">Street</label>
          <input v-model="street" type="text" class="form-control" id="street" placeholder="street">
          <div class="form-text text-danger">
            {{ streetErrorText }}
          </div>
        </div>
        <div class="form-group col-md-4">
          <label for="postalCode">Postal Code</label>
          <input v-model="postalCode" type="text" class="form-control" id="postalCode" placeholder="postal coed">
          <div class="form-text text-danger">
            {{ postalErrorText }}
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-10">Submit</button>
      <button @click="resetData" type="button" class="btn btn-warning mt-10 ms-2 text-light">Reset</button>
    </form>

  </div>


</template>

<script>

export default {
  name: "CreatUser",
  data() {
    return {
      name: "",
      fatherName: "",
      userName: "",
      phone: "",
      email: "",
      birthID: "",
      city: "",
      street: "",
      postalCode: "",
      // user: {},

      nameErrorText: "",
      fatherErrorText: "",
      userErrorText: "",
      phoneErrorText: "",
      emailErrorText: "",
      birthErrorText: "",
      cityErrorText: "",
      streetErrorText: "",
      postalErrorText: "",
    };
  },
  methods: {
    storeUser() {
      if (this.name === "") {
        this.nameErrorText = "Title is required";
      } else if (this.fatherName === "") {
        this.fatherErrorText = "Title is required";
      } else if (this.userName === "") {
        this.userErrorText = "Title is required";
      } else if(this.phone === ""){
        this.phoneErrorText = "Title is required"
      } else if(this.email === ""){
        this.emailErrorText = "Title is required"
      } else if (this.birthID === "") {
        this.birthErrorText = "Title is required"
      }else if (this.city === "") {
        this.cityErrorText = "Title is required"
      }else if (this.street === "") {
        this.streetErrorText = "Title is required"
      }else if (this.postalCode === "") {
        this.postalErrorText = "Title is required"
      }else {
        this.nameErrorText = "";
        this.fatherErrorText = "";
        this.userErrorText = "";
        this.phoneErrorText = ""
        this.emailErrorText = ""
        this.birthErrorText = ""
        this.cityErrorText = ""
        this.streetErrorText = ""
        this.postalErrorText = ""


        this.$store.dispatch("user/storeUser", [
          this.name,
          this.fatherName,
          this.userName,
          this.phone,
          this.email,
          this.birthID,
          this.city,
          this.street,
          this.postalCode,

          this.name = "",
          this.fatherName = "",
          this.userName = "",
          this.phone = "",
          this.email = "",
          this.birthID = "",
          this.city = "",
          this.street = "",
          this.postalCode = "",
        ]);
      }
    },
    resetData() {
      this.name = ""
      this.fatherName = ""
      this.userName = ""
      this.phone = ""
      this.email = ""
      this.birthID = ""
      this.city = ""
      this.street = ""
      this.postalCode = ""
    }
  }
};
</script>

<style scoped>

</style>
