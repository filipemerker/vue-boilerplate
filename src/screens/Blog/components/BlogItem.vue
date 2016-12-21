<template>
  <li>
    <router-link :to="'/blog/post/' + post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'blog-item',
  props: ['post']
}
</script>

<style lang="stylus">

</style>