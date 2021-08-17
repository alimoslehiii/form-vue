<template>
  <div class="container">

    <CreatUser />

    <div class="row">
      <div v-for="user in allUsers"  :key="user.id" class="col-md-4">
        <ListUser :user="user" />
      </div>
    </div>

  </div>

</template>

<script>
import CreatUser from "@/components/CreatUser";
import { mapGetters } from "vuex";
import ListUser from "@/components/ListUser";

export default {
  name: "Users",
  components: { ListUser,CreatUser },
  computed: {
    ...mapGetters({
      allUsers: 'user/allUsers'
    }),
  },
  mounted() {
    this.$store.dispatch('user/fetchUsers')
  }
};
</script>

<style scoped>

</style>
