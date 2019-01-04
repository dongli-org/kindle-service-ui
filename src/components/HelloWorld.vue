<template>
  <div class="mt-lg">
    <!-- a component -->
    {{msg}}
  </div>
</template>
<style>
.mt-lg {
  margin-top: 40px;
}
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to kindlw service platform'
    }
  },
  methods: {
    // mapActions
    ...mapActions('cart', ['addProduct'])
  },
  mounted () {
    console.log('即将调用addProduct 方法---->>>>>>')
    this.addProduct()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
