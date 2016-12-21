<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <blog-item v-for="post in posts" :post="post"></blog-item>
    </ul>
  </div>
</template>

<script>
import BlogItem from './components/BlogItem.vue'

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
      msg: 'This is the blog page',
      loading: true
    }
  },
  components: { BlogItem },
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
