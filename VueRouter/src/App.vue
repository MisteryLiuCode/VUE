<template>
<h1 id="app">主页</h1>
</template>

<script>

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

//引入content
import Content from "./components/Content";
export default {
  name: 'Content',
  components: {
    Content
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
