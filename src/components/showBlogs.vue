<template>
  <div v-theme:column="'wide'" id="show-blogs">
      <h1>All Blog Articles</h1>
      <input tyoe="text" v-model="search" placeholder="search blogs" />
      <div v-for="(blog, index) in filteredBlogs" class="single-blog" v-bind:key="`blog-${index}`">
          <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
          <article>{{ blog.body | snippet }}</article>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blogs: [],
        search: ''
    }
  },
  methods: {
  },
  created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
          console.log(data);
          this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {
      filteredBlogs: function() {
          return this.blogs.filter((blog) => {
              return blog.title.match(this.search);
          });
      }
  },
  filters: {
      toUppercase(value) {
          return value.toUpperCase();
      }
  },
  directives: {
      'rainbow': {
          bind(el, binding, vnode) {
              el.style.color = "#" + Math.random().toString().slice(2, 8);
          }
      }
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
