<template>
  <div class="todo">
    <div class="navbar">
      <h1>can i help you</h1>
    </div>
    <div class="header">
      please do it
    </div>
    <form id="task-form" @submit.prevent="addOrUpdate">
      <div class="wrap">
        <input type="text" id="task-input" @keyup.enter="addOrUpdate" v-model="current.title">
        <button type="submit">submit</button>
      </div>
    </form>
    <div class="task-list">
      <div class="wrap">
        未完成
        <div class="task-item" v-for="(item, index) in list" :key="item.index">
          {{item.title}}--{{ index }}
          <button @click="remove(index)">删除</button>
          <button @click="current=item">更新</button>
        </div>
      </div>
    </div>
    <div class="task-list">
      <div class="wrap">
        已完成
        <div class="task-item">adipisicing elit. Ab aliquid et obcaecati quam! Dolore</div>
        <div class="task-item">adipisicing elit. Ab aliquid et obcaecati quam! Dolore</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      current: {},
      list: []
    }
  },
  methods: {
    addOrUpdate () {
      let id = this.current.id
      let title = this.current.title
      if (id) {
        // update
        let todo = this.list.find(item => item.id === id)
        todo.title = title
      } else {
        // add
        if (!title) return
        console.log(123)
        let todo = Object.assign({}, this.current)
        todo.id = this.getNextId()
        this.list.push(todo)
      }
      this.current.title = ''
    },
    remove (index) {
      this.list.splice(index, 1)
    },
    // getNextId: () => this.list.length + 1
    getNextId () {
      return this.list.length + 1
    }
  }
}
function set (key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function get (key) {
  let json = localStorage.getItem(key)
  if (json) {
    return JSON.parse(json)
  }
}

window.ms = {
  set: set,
  get: get
}

</script>

<style scoped>
  * {
    background-color: rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  .navbar, .header {
    text-align: center;
  }

  .navbar {
    background: #db1822;
    color: #f5ebeb;
    padding: 10px 0;
  }

  .navbar h1 {
    font-size: 24px;
    margin: 0;
  }

  .header {
    font-size: 18px;
    padding: 20px 0;
    color: #555;
  }
  .wrap {
    max-width: 500px;
    margin: 0 auto;
  }
  input, button {
    display: block;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 3px;
    padding: 5px 10px;
  }
  input {
    width: 100%;
  }
</style>
