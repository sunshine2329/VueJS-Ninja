<template>
  <div id="ninjas">
    <ul>
        <li v-for="(ninja, index) in ninjas" :key="`ninja-${index}`" @click="ninja.show = !ninja.show">
          <h2>{{ ninja.name }}</h2>
          <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
        </li>
    </ul>
    <button v-on:click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    deleteNinja: function() {
      this.ninjas.pop();
    }
  },
  // lifecycle hooks
  beforeCreate() {
    alert('beforeCreate');
  },
  created() {
    alert('created');
  },
  beforeMount() {
    alert('beforeMount');
  },
  mounted() {
    alert('mounted');
  },
  beforeUpdate() {
    alert('beforeUpdate');
  },
  updated() {
    alert('updated');
  }
}
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
