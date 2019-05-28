<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <label>
      用户名
      <input type="text" v-model="username">
    </label>

    <label>
      密码
      <input type="text" v-model="password">
    </label>
    <button class="btn" @click="login">登录</button>
    <p>{{res}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your ToDo App',
      username: '',
      password: '',
      res: ''
    }
  },
  methods: {
    login () {
      this.axios({
        url: '/api/login',
        method: 'post',
        data: {
          name: this.username,
          pwd: this.password
        },
        responseType: 'json'
      })
        .then(response => {
          this.res = response.data.token
          localStorage.setItem('token', response.data.token)
          this.$router.push({
            path: '/todo'
          })
          console.log(response.data)
          return response
        })
        .catch(error => {
          console.log(error)
          return error
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
