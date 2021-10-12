<template>
  <div class="container">

    <UserForm :user="user" />

    <button @click="editUser" type="submit" class="btn btn-success mt-10">Save</button>
    <button @click="resetData" type="button" class="btn btn-warning mt-10 ms-2 text-light">Reset</button>
    <button @click="back" class="btn btn-dark mt-10 ms-2">Cancel</button>

  </div>
</template>

<script>
import UserForm from "@/components/UserForm";

export default {
  name: "EditUser",
  components: { UserForm },
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
