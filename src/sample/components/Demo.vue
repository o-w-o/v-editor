<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>A Vue Editor Component Inspired By StackEdit & Classuer</h2>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      msg: 'V-Editor'
    }
  },
  created() {
    console.info('created ...')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>