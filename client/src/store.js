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
    name: '',
    content: []
  },
  mutations: {
    loginState (state, name) {
      state.isLogin = !state.isLogin
      state.name = name
    },
    logoutClear (state) {
      state.isLogin = !state.isLogin
      state.name = ''
      window.localStorage.clear()
    },
    getContent(state, contentData) {
      state.content = contentData
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
          console.log(response.data);
          window.localStorage.setItem('token', response.data.token)
          window.localStorage.setItem('name', response.data.username)
          window.localStorage.setItem('id', response.data.id)
          commit('loginState', response.data.username)
          router.push('/')
        } else {
          console.log({msg: 'error'});
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    signup ({commit}, userData){
      axios.post('http://localhost:3000/api/users/signup', {
        username: userData.username,
        password: userData.password
      })
      .then((response)=>{
          console.log(response.data);
          router.push('/signin')
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    logout({commit}){
      commit('logoutClear')
    },
    getContent ({commit}) {
      axios.get('http://localhost:3000/api/articles')
      .then((response)=>{
        console.log(response.data);
          commit('getContent', response.data)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
})

export default store
