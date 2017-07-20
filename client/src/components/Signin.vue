<template lang="html">
  <div class="">
    <Navbar></Navbar>
    <h1>Signin Form</h1>
    <form class="form-inline">
      <div class="form-group">
        <label >Username:</label>
        <input type="text" class="form-control" placeholder="Enter username" v-model="userData.username">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" placeholder="Enter password" v-model="userData.password">
      </div>
      <button type="submit" @click="submitLogin">Submit</button>
    </form>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      userData : {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('login', this.userData)
    }
  }
}
</script>

<style lang="css">
</style>
