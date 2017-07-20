<template>
  <div class="home">
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  components: {
    Navbar
  },
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
