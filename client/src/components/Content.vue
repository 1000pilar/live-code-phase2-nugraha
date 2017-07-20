<template >
  <div class="">
    <div class="">
      {{getContent}}
    </div>
    <div class="panel panel-default" v-for="content in getContent">

      <div class="panel-heading">{{content.title}} {{}}</div>
      <div class="panel-body">{{content.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content',
  methods: {
    getContentAsyn: function(){
      this.$store.dispatch('getContent')
    }
  },
  created () {
    this.getContentAsyn()
    console.log('ini content', this.getContent);
  },
  computed: {
    getContent (){
      return this.$store.state.content
    }
  }
}
</script>

<style lang="css">
</style>
