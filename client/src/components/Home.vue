<template>
  <div class="home">
    <Navbar></Navbar>
    <articleList></articleList>
  </div>
</template>

<script>
import Navbar from './Navbar'
import articleList from './Content'

export default {
  components: {
    Navbar,
    articleList
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
