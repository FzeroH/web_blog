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
  name: 'LastArticle',
  props: {
    name: String,
    author: String,
    text: String,
  },
});
</script>

<style scoped lang="scss">

div {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background-color: #d8d9de;
  width: 30%;
  height: 30%;
  padding-left: 20px;
}

h3 {
  font-size: 32px;
  margin: 10px 0 5px 0;
  text-transform: uppercase;
}

h5 {
  font-size: 16px;
  margin-top: 5px;
}

</style>
