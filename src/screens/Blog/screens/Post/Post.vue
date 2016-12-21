<template>
  <div class="hello">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
function fetchPost (store) {
  return store.dispatch('FETCH_ITEM', {
    section: 'test',
    type: 'post',
    id: store.state.route.params.id
  })
}

export default {
  name: 'about',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    post () {
      return this.$store.state.items['post']
    }
  },
  beforeMount () {
    this.$store.state.items['post'] = {}
    fetchPost(this.$store).then(() => {
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
