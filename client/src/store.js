import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    name: ''
  },
  mutations: {
    loginState (state) {
      state.isLogin = !state.isLogin
      state.name = window.localStorage.getItem('name')
    },
    logoutClear (state) {
      state.isLogin = !state.isLogin
      window.localStorage.clear()
    }
  },
  actions: {
    login ({commit}, userData){
      axios.post('http://localhost:3000/api/users/signin', {
        username: userData.username,
        password: userData.password
      })
      .then((response)=>{
        if(response.data.token){
          window.localStorage.setItem('token', response.data.token)
          window.localStorage.setItem('name', response.data.name)
          window.localStorage.setItem('id', response.data.id)
          commit('loginState')
          this.$router.push('/')
        } else {
          console.log({msg: 'error'});
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    logout({commit}){
      commit('logoutClear')
    }
  }
})

export default store
