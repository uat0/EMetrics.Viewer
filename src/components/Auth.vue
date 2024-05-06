<template>
    <div class="korobka">
        <h1>Авторизация</h1>
        <input type="text" v-model="login" placeholder="Введите логин...">
        <input type="password" v-model="password" placeholder="Введите пароль...">
        <input type="email" v-model="email" placeholder="Введите email...">
        <button @click="fetch()">Авторизация</button>
        <button @click="addUser">Регистрация</button>
    </div>
</template>

<script>
import AuthService from '@/components/Auth';

export default {
  data() {
    return {
      login: '',
      password: '',
      email: '',
      authentication: false,
      user: {}
    };
  },
  methods: {
    async loginuser() {
      try {
        await AuthService.loginuser({ username: this.username, password: this.password, email: this.email });
      } catch (error) {
        console.error('Ошибка аутентификации:', error);
      }
    },
    addUser() {
      const userData = {
        login: this.login,
        password: this.password,
        email: this.email
      };
      fetch('http:/26.21.184.116:8081', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка добавления пользователя');
        }
        return response.json();
      })
      .then(data => {
        console.log('Пользователь успешно добавлен', data);
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
    }
  }
}
</script>

<style scoped>
.korobka {
    margin: 50px auto;
    width: 900px;
    height: 400px;
    border-radius: 50px;
    border: 10px solid rgb(87, 32, 109);    
    background: rgb(61,5,103);
    background: linear-gradient(215deg, rgba(61,5,103,1) 0%, rgba(29,10,38,1) 100%);
    text-align: center;

    
    h1 {
        color: white;
    }   
}

.korobka input {
        margin-top: 50px;
        background: rgb(64, 47, 75);
        border-radius: 30px;
        border: 0;
        border-bottom: 2px solid #664a86;
        text-align: center;
        height: 20px;
        width: 200px;
        outline: none;
        color: white;
    }

.korobka button {
        cursor: pointer;
        margin-top: 50px;
        background: rgb(112, 78, 134);
        border-radius: 30px;
        border: 0;
        border-bottom: 3px solid #1d0636;
        text-align: center;
        height: 20px;
        width: 150px;
        outline: none;
        color: white;
    }
</style>