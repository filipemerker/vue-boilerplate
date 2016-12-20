<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="post in posts">
        <h3>{{ post.title }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
function fetchPosts (store) {
  return store.dispatch('FETCH_ITEMS', {
    section: 'test',
    type: 'posts',
    quantity: 20
  })
}

export default {
  name: 'about',
  data () {
    return {
      msg: 'This is the about page',
      loading: true
    }
  },
  computed: {
    posts () {
      return this.$store.state.lists['posts']
    }
  },
  beforeMount () {
    fetchPosts(this.$store).then(() => {
      this.loading = false
    })
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
