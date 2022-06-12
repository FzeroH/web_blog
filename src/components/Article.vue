<template>
  <div>
    <h3>{{ name }}</h3>
    <h5>{{ author }}</h5>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Article',
  props: {
    name: String,
    author: String,
    text: String,
  },
});
</script>

<style scoped lang="scss">

div{
  display: flex;
  flex-direction: column;
  background-color: #d8d9de;
  margin: 5px 5px 5px 0;
  max-width: 25%;
}

h3 {
  font-size: 24px;
  margin: 10px 0 5px 0;
}

h5 {
  font-size: 16px;
  margin-top: 5px;
}
</style>
