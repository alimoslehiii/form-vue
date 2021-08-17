<template>
  <div class="container">
    <form @submit.prevent="editUser">
      <div class="row form-row">
        <div class="form-group col-md-6">
          <label for="name">Full Name</label>
          <input v-model="user.name" type="text" class="form-control" id="name" placeholder="full name">
        </div>
        <div class="form-group col-md-6">
          <label for="fatherNAme">Father's name</label>
          <input v-model="user.company.name" type="text" class="form-control" id="fatherName" placeholder="father's name">
        </div>
      </div>
      <div class="row flex-row">
        <div class="form-group col-md-6">
          <label for="userName">User name</label>
          <input v-model="user.username" type="text" class="form-control" id="userName" placeholder="user name">
        </div>
        <div class="form-group col-md-6">
          <label for="phone">Phone</label>
          <input v-model="user.phone" type="text" class="form-control" id="phone" placeholder="Apartment, studio, or floor">
        </div>
      </div>
      <div class="row flex-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input v-model="user.email" type="email" class="form-control" id="inputEmail4" placeholder="Email">
        </div>
        <div class="form-group col-md-6">
          <label for="birthID">Birthday ID</label>
          <input v-model="user.address.zipcode" type="text" class="form-control" id="birthID" placeholder="birthday ID">
        </div>
      </div>
      <div class="row flex-row">
        <div class="form-group col-md-4">
          <label for="city">city</label>
          <input v-model="user.address.city" type="text" class="form-control" id="city" placeholder="city">
        </div>
        <div class="form-group col-md-4">
          <label for="street">Street</label>
          <input v-model="user.address.street" type="text" class="form-control" id="street" placeholder="street">
        </div>
        <div class="form-group col-md-4">
          <label for="postalCode">Postal Code</label>
          <input type="text" class="form-control" id="postalCode" placeholder="postal coed">
        </div>
      </div>

      <button type="submit" class="btn btn-success mt-10">Save</button>
      <button @click="resetData" type="button" class="btn btn-warning mt-10 ms-2 text-light">Reset</button>
      <button @click="back" class="btn btn-dark mt-10 ms-2">Cancel</button>
    </form>

  </div>
</template>

<script>

export default {
  name: "EditUser",
  computed: {
    user(){
      return this.$store.getters["user/allUsers"].find(user => user.id == this.$route.params.id)
    }
  },
  methods: {
    editUser(){
      this.$store.dispatch('user/editUser', this.user)
      this.$router.push('/users')
    },
    back(){
      this.$router.go(-1)
    },
    resetData() {
      this.user.name = ""
      this.user.company.name = ""
      this.user.username = ""
      this.user.phone = ""
      this.user.email = ""
      this.user.address.zipcode = ""
      this.user.address.city = ""
      this.user.address.street = ""
    }
  }
};
</script>

<style scoped>

</style>
