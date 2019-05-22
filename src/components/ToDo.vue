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
        <input type="text" id="task-input" @keyup.enter="addOrUpdate" v-model="current.title" autocomplete="off"/>
        <button type="submit">submit</button>
      </div>
    </form>
    <div class="task-list">
      <div class="wrap">
        未完成
        <TaskItem v-if="!item.completed"
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
        已完成
        <TaskItem v-if="item.completed"
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
    this.list = window.ms.get('list') || []
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
      } else {
        // add
        if (!title) return
        console.log(123)
        currentTodo.id = this.getNextId()
        currentTodo.completed = false
        this.list.push(currentTodo)
      }
      this.reset()
    },
    remove (id) {
      let index = this.list.findIndex(item => item.id === id)
      this.list.splice(index, 1)
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
      todo.completed = !todo.completed
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
  input, button, textarea {
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 3px;
    padding: 5px 10px;
  }
  input {
    display: block;
    width: 100%;
  }
</style>
