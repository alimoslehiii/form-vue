<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 mt-8 offset-1">

        <ListUser :user="user"/>

      </div>

    </div>
  </div>
</template>

<script>
import ListUser from "@/components/ListUser";
export default {
  name: "ShowUser",
  components: { ListUser },
  computed: {
    user(){
      return this.$store.getters["user/allUsers"].find(user => user.id == this.$route.params.id)
    }
  },
};
</script>

<style scoped>

</style>
