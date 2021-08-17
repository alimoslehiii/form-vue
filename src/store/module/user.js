import axios from "axios";
import Swal from "sweetalert2";

const user = {
  namespaced: true,

  state: {
    users: []
  },
  getters: {
    allUsers(state){
      return state.users
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },

    newUser(state, user){
      state.users.push(user)
    },

    removeUser(state, id){
      state.users = state.users.filter(user => user.id != id)
    },

    editUser(state, user){
      state.users.forEach(u => {
        if(u.id == user.id){
          u = user
        }
      })
    }
  },
  actions: {
    async fetchUsers({ commit }){
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('setUsers', response.data)
      }catch (error){
        Swal.fire({
          title: "Error",
          text: "There is a problem, please try again",
          icon: "error",
          confirmButtonText: "OK"
        })
      }
    },

    async storeUser({ commit }, [name,fatherName,userName,phone,email,birthID,city,street]){
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
          name: name,
          company: {
            name : fatherName
          },
          username: userName,
          phone: phone,
          email: email,
          address: {
            zipcode: birthID,
            city: city,
            street: street
          }
        })
        commit('newUser', response.data)
        // console.log(commit,response.data)

        Swal.fire({
          title: "User added",
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1000,
          toast: true,
          position: "top"
        })

      }catch (error){
        Swal.fire({
          title: "Error",
          text: "There is a problem, please try again",
          icon: "error",
          confirmButtonText: "OK"
        })
      }
    },

    async deleteUser({ commit }, id){
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        commit('removeUser', id)

        Swal.fire({
          title: "User Deleted",
          icon: "warning",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1000,
          toast: true,
          position: "top"
        })
      }catch (error){
        Swal.fire({
          title: "Error",
          text: "There is a problem, please try again",
          icon: "error",
          confirmButtonText: "OK"
        })
      }
    },

    async editUser({ commit }, user){
        try {
          const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
          commit('editUser', response.data)

          Swal.fire({
            title: "User Edited",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1000,
            toast: true,
            position: "top"
          })

        }catch (error){
          console.log(error)
          Swal.fire({
            title: "Error",
            text: "There is a problem, please try again",
            icon: "error",
            confirmButtonText: "OK"
          })
        }
    }
  }
};

export default user;
