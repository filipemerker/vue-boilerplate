<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'This is the about page',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quibusdam. Praesentium dolorem ea aperiam voluptas officiis, minus eos voluptate eligendi unde assumenda delectus laudantium nisi, debitis consequuntur, ullam id ex!'
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
