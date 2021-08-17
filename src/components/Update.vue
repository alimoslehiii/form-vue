<template>
  <div class="m-2">
    <router-link :to="{ name: 'show-user', params: { id: user.id }}" href="#" class="btn btn-primary text-light position-absolute bottom-0 mb-4">Show user</router-link>
    <router-link :to="{ name: 'edit-user', params: { id: user.id }}" type="button" class="btn btn-warning text-light" style="margin-left: 110px;">Edit</router-link>
    <button @click="deleteUser" type="button" class="btn btn-danger ms-2">Delete</button>
  </div>
</template>

<script>

export default {
  name: "Update",
  props: ['id','user'],
  methods: {
    deleteUser() {
      this.$store.dispatch('user/deleteUser', this.id)
      this.$router.push('/users')
    },

    editUser(){
      this.$store.dispatch('user/editUser', this.id)
    }
  }
};
</script>

<style scoped>

</style>
