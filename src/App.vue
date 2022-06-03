<template>
  <router-view/>
</template>

<script>

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {

  },
  setup() {
    const userData = ref();
    return { userData };
  },
});
</script>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #E5E6ED;
}

</style>
