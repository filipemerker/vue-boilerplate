<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Wellcome to your brand new vue app</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'This is the home page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
  width: 100%;
  float: left;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  width: 100%;
  float: left;
}

a {
  color: #42b983;
}
</style>
