<template>
  <div id="add-blog">
      <h2>Add a New Blog post</h2>
      <form>
          <label>Blog Title:</label>
          <input type="text" v-model.lazy="blog.title" required />
          <label>Blog Content:</label>
          <textarea v-model.lazy="blog.content"></textarea>
          <div id="checkboxes">
              <label>Ninjas</label>
              <input type="checkbox" value="ninjas" v-model="blog.categories"/>
              <label>Wizards</label>
              <input type="checkbox" value="wizards" v-model="blog.categories"/>
              <label>Mario</label>
              <input type="checkbox" value="mario" v-model="blog.categories"/>
              <label>Cheese</label>
              <input type="checkbox" value="cheese" v-model="blog.categories"/>
          </div>
      </form>
      <div id="preview">
          <h3>Preview Blog</h3>
          <p>Blog title: {{ blog.title }}</p>
          <p>Blog content:</p>
          <p>{{ blog.content }}</p>
          <p>Blog Categories:</p>
          <ul>
              <li v-for="(category, index) in blog.categories" v-bind:key="`category-${index}`">{{ category }}</li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        blog: {
            title: "",
            content: "",
            categories: []
        }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
