<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';
import listBlogs from './components/listBlogs';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
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
