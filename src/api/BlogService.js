import Instance from '../config/axios.config';

class BlogService {
  static getArticlesList = () => new Promise((resolve, reject) => {
    Instance.get('/get_articles_list')
      .then((res) => resolve(res.data))
      .catch((e) => reject(e));
  })

  static createArticle = (userId, blogTitle, blogText) => new Promise((resolve, reject) => {
    Instance.post('/create_article', {
      userId,
      blogTitle,
      blogText,
    })
      .then((res) => resolve(res.data))
      .catch((e) => reject(e));
  })

  static getArticle = (blogId) => new Promise((resolve, reject) => {
    Instance.post('/get_article', {
      blogId,
    })
      .then((res) => resolve(res.data))
      .catch((e) => reject(e));
  })
}

export default BlogService;
