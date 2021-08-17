<template>
  <div class="container">
    <div class="row">

       <router-link class="btn btn-lg btn-info link-light w-50 center" to="/users" style="color: #fff">
         Log in to the validation page
       </router-link>


    </div>
  </div>
</template>

<script>


export default {
  name: "Home",

};
</script>
<style>
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,50%);
}
ul {
  padding: 0 !important;
}
</style>
