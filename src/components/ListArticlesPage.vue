<template>
  <h2>The blog</h2>
  <LastArticle :name="`${ lastArticle.blog_title }`"
               :author="`${ lastArticle.user_name }`"
               :text="`${ lastArticle.blog_text }`"
  />
  <div class="article-container">
    <Article v-for="(article, index) in articlesList" :key="index"
        :name="article.blog_title"
        :author="article.user_name"
        :text="article.blog_text"/>

  </div>
</template>

<script>

import { defineComponent, ref, onMounted } from 'vue';
import BlogService from '@/api/BlogService';
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
    const articlesList = ref([]);
    const lastArticle = ref([]);
    const getArticlesList = async () => {
      await BlogService.getArticlesList()
        .then((res) => {
          articlesList.value = res;
          articlesList.value = articlesList.value.reverse();
          lastArticle.value = articlesList.value.shift();
        })
        .catch((error) => console.error(error.message));
    };
    onMounted(() => {
      getArticlesList();
      console.log(articlesList);
      console.log(lastArticle);
    });
    return { userData, articlesList, lastArticle };
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
