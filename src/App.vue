<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';
import listBlogs from './components/listBlogs';
import header from './components/header';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
