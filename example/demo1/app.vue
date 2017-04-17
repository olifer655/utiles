<template>
  <div class="demo1">
    {{ ms }}
    <Demo1></Demo1>
  </div>
</template>

<script>
import Demo1 from '../../src/demo1/index.js';

export default {
  data: function () {
    return {
      ms: '123'
    }
  },
  components: {
    Demo1,
  }
}
</script>

<style>
.demo1 {
  color: blue
}
</style>
