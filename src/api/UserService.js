import Instance from '../config/axios.config';

class UserService {
    static createUser = (email, login, password) => new Promise((resolve, reject) => {
      Instance.post('/create_user', {
        email,
        login,
        password,
      })
        .then((res) => resolve(res.data))
        .catch((e) => reject(e));
    })

    static getUser = (id) => new Promise((resolve, reject) => {
      Instance.post('/get_user', { id })
        .then((res) => resolve(res.data))
        .catch((e) => reject(e));
    })

    static login = (login, password) => new Promise((resolve, reject) => {
      Instance.post('/login', { login, password })
        .then((res) => {
          localStorage.setItem('userId', res.data);
        })
        .catch((e) => reject(e));
    })
}

export default UserService;
