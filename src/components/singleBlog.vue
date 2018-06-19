<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>Author: {{ blog.author }}</p>
        <ul>
            <li v-for="(category, index) in blog.categories" v-bind:key="`single-blog-${index}`">{{ category }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        console.log("Hello");
        this.$http.get('https://vuejs-ninja.firebaseio.com/post/' + this.id + ".json").then(function(data) {
            return data.json();
        }).then(function(data){
            this.blog = data;
        });
    }
}
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>


