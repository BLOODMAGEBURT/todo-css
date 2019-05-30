<template>
  <div class="todo">
    <div class="navbar">
      <h1>要做事啦</h1>
    </div>
    <div class="header">
      天黑请闭眼
    </div>
    <form id="task-form" @submit.prevent="addOrUpdate">
      <div class="wrap">
        <input type="text" id="task-input" @keyup.enter="addOrUpdate" v-model="current.title" autocomplete="off"/>
      </div>
    </form>
    <div class="task-list">
      <div class="wrap">
        <div class="segment-title">未完成</div>
        <TaskItem v-if="!item.is_completed"
                  v-for="item in list"
                  :key="item.id" :todoItem="item"
                  @remove="removeSon"
                  @toggle="toggleSon"
                  @setCurrent="setCurrentSon">
        </TaskItem>
      </div>
    </div>
    <div class="task-list">
      <div class="wrap">
        <div class="segment-title">已完成</div>
        <TaskItem v-if="item.is_completed"
                  v-for="item in list"
                  :key="item.id" :todoItem="item"
                  @remove="removeSon"
                  @toggle="toggleSon"
                  @setCurrent="setCurrentSon">
        </TaskItem>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem'
export default {
  name: 'todo',
  data () {
    return {
      current: {},
      list: []
    }
  },
  mounted () {
    let token = 'Bearer ' + localStorage.getItem('token')
    this.axios({
      url: '/api/todo_types/1',
      method: 'get',
      headers: {
        'Authorization': token
      },
      responseType: 'json'
    })
      .then(response => {
        console.log(response.data)
        this.list = response.data.todo_items || []
        return response
      })
      .catch(error => {
        console.log(error)
        return error
      })
  },
  methods: {
    addOrUpdate () {
      let currentTodo = this.copy(this.current)
      let id = currentTodo.id
      let title = currentTodo.title
      if (id) {
        // update
        let todo = this.list.find(item => item.id === id)
        todo.title = title
        let token = 'Bearer ' + localStorage.getItem('token')
        this.axios({
          url: '/api/todo/' + id,
          method: 'put',
          headers: {
            'Authorization': token
          },
          data: {
            title: todo.title,
            is_completed: todo.is_completed
          }
        })
          .then(response => {
            console.log('responseData:' + response)
          })
          .catch(error => {
            console.log('errorData:' + error.response.data)
          })
      } else {
        // add
        if (!title) return
        currentTodo.is_completed = false
        this.list.push(currentTodo)
        let token = 'Bearer ' + localStorage.getItem('token')
        this.axios({
          url: '/api/todo',
          method: 'post',
          headers: {
            'Authorization': token
          },
          data: {
            type_id: 1,
            title: title
          }
        })
          .then(response => {
            console.log('responseData:' + response)
          })
          .catch(error => {
            console.log('errorData:' + error.response.data)
          })
      }
      this.reset()
    },
    remove (id) {
      let index = this.list.findIndex(item => item.id === id)
      this.list.splice(index, 1)
      let token = 'Bearer ' + localStorage.getItem('token')
      this.axios({
        url: '/api/todo/' + id,
        method: 'delete',
        headers: {
          'Authorization': token
        }
      })
        .then(response => {
          console.log('responseData:' + response)
        })
        .catch(error => {
          console.log('errorData:' + error.response.data)
        })
    },
    // getNextId: () => this.list.length + 1
    getNextId () {
      return this.list.length + 1
    },
    setCurrent (item) {
      this.current = this.copy(item)
    },
    reset () {
      this.setCurrent({})
    },
    copy: obj => Object.assign({}, obj),
    toggle (itemId) {
      let todo = this.list.find(item => item.id === itemId)
      todo.is_completed = !todo.is_completed

      let token = 'Bearer ' + localStorage.getItem('token')
      this.axios({
        url: '/api/todo/' + itemId,
        method: 'put',
        headers: {
          'Authorization': token
        },
        data: {
          title: todo.title,
          is_completed: todo.is_completed
        }
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
          console.log('i am wrong, please try again later')
          todo.is_completed = !todo.is_completed
        })
    },
    removeSon (id) {
      this.remove(id)
    },
    toggleSon (id) {
      this.toggle(id)
    },
    setCurrentSon (item) {
      this.setCurrent(item)
    }
  },
  watch: {
    list: {
      deep: true,
      handler (newVal, oldVal) {
        if (newVal) {
          window.ms.set('list', newVal)
        } else {
          window.ms.set('list', [])
        }
      }
    }
  },
  components: {
    TaskItem: TaskItem
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
    box-sizing: border-box;
  }

  .navbar, .header {
    text-align: center;
  }

  .navbar {
    background: #ccc;
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
  input, button, textarea {
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 3px;
    padding: 5px 10px;
  }
  input {
    display: block;
    width: 100%;
  }
  .segment-title {
    margin: 15px 0;
    color: #aaa;
    font-weight: lighter;
  }
</style>
