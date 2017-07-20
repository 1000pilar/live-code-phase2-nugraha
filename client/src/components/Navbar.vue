<template lang="html">
  <div class="">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Nugraha Vuex</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a @click="toSignup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a @click="toSignin"><span class="glyphicon glyphicon-log-in"></span > Login</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right" v-if="islogin">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Welcome {{getName}}</a></li>
          <li><a @click="logout"><span class="glyphicon glyphicon-log-in"></span> LogOut</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  methods: {
    toSignin () {
      this.$router.push('/signin')
    },
    toSignup () {
      this.$router.push('/signup')
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    islogin (){
      return this.$store.state.isLogin
    },
    getName (){
      return this.$store.state.name
    }
  }
}
</script>

<style lang="css">
</style>
