<template>
      <div class="card ">
        <div class="card-header">
          User information number {{ user.id }}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><span class="font-weight-bold text-uppercase">name :</span> {{ user.name }}</li>
          <li class="list-group-item"><span class="font-weight-bold text-uppercase">father's name :</span> {{ user.company.name }}</li>
          <li class="list-group-item"><span class="font-weight-bold text-uppercase">user name :</span> {{ user.username }}</li>
          <li class="list-group-item"><span class="font-weight-bold text-uppercase">Phone :</span> {{ user.phone }}</li>
          <li class="list-group-item"><span class="font-weight-bold text-uppercase">email :</span> {{ user.email }}</li>
          <li class="list-group-item"><span class="font-weight-bold text-uppercase">birthday id :</span> {{ user.address.zipcode }}</li>
          <li class="list-group-item"><span class="font-weight-bold text-uppercase">city :</span> {{ user.address.city }}</li>
          <li class="list-group-item"><span class="font-weight-bold text-uppercase">street :</span> {{ user.address.street }}</li>
        </ul>

        <div class="card-footer">
          <Update :id="user.id" :user="user" />
        </div>

      </div>
</template>

<script>
import Update from "@/components/Update";

export default {
  name: "ListUser",
  props:['user'],
  components: {  Update },
};
</script>

<style scoped>

</style>
