import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Users from  '../views/Users'
import ShowUser from "@/views/ShowUser";
import EditUser from "@/views/EditUser";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/users/showuser/:id",
    name: "show-user",
    component: ShowUser,
    params: true
  },
  {
    path: "/users/edituser/:id",
    name: "edit-user",
    component: EditUser,
    params: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
