<template>
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blog Articles</h1>
      <div v-for="(blog, index) in blogs" class="single-blog" v-bind:key="`blog-${index}`">
          <h2 v-rainbow>{{ blog.title }}</h2>
          <article>{{ blog.body }}</article>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blogs: []
    }
  },
  methods: {
  },
  created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
          console.log(data);
          this.blogs = data.body.slice(0, 10);
      });
  }
}
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
