<template>
  <h2>The blog</h2>
  <LastArticle :name="'Как не сдохнуть'"
               :author="'Авторный автор'"
               :text="'Короче, старайся не умереть и всё'"
  />
  <div class="article-container">
    <Article
        :name="'Как не сдохнуть'"
        :author="'Авторный автор'"
        :text="'Короче, старайся не умереть и всё'"/>
    <Article
        :name="'Как не сдохнуть'"
        :author="'Авторный автор'"
        :text="'Короче, старайся не умереть и всё'"/>
    <Article
        :name="'Как не сдохнуть'"
        :author="'Авторный автор'"
        :text="'Короче, старайся не умереть и всё'"/>
    <Article
        :name="'Как не сдохнуть'"
        :author="'Авторный автор'"
        :text="'Короче, старайся не умереть и всё'"/>
    <Article
        :name="'Как не сдохнуть'"
        :author="'Авторный автор'"
        :text="'Короче, старайся не умереть и всё'"/>
    <Article
        :name="'Как не сдохнуть'"
        :author="'Авторный автор'"
        :text="'Короче, старайся не умереть и всё'"/>
    <Article
        :name="'Как не сдохнуть'"
        :author="'Авторный автор'"
        :text="'Короче, старайся не умереть и всё'"/>
    <Article
        :name="'Как не сдохнуть'"
        :author="'Авторный автор'"
        :text="'Короче, старайся не умереть и всё'"/>
    <Article
        :name="'Как не сдохнуть'"
        :author="'Авторный автор'"
        :text="'Короче, старайся не умереть и всё'"/>

  </div>
</template>

<script>

import { defineComponent, ref } from 'vue';
import Article from './Article.vue';
import LastArticle from './LastArticle.vue';

export default defineComponent({
  name: 'ListArticlesPage',
  components: {
    LastArticle,
    Article,

  },
  setup() {
    const userData = ref();
    return { userData };
  },
});
</script>

<style lang="scss">

h2 {
  margin-top: 120px;
  text-align: center;
  font-size: 64px;
}

.article-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px auto 10px auto;
  width: 60%;
}

</style>
