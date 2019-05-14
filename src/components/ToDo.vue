<template>
    <div class="todo">
      <h2>welcome todo</h2>
      <el-form :inline="true" class="demo-form-inline" :class="{'completed':item.status}" v-for="item in items" :key="item.id">
        <el-form-item>
          <el-checkbox :checked="item.status ? true:false" v-model="ischecked"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="item.title" placeholder="请输入"/>
        </el-form-item>
        <el-form-item>
          <i class="el-icon-delete" @click="delItem()"/>
        </el-form-item>
      </el-form>
      <el-form :inline="true" class="demo-form-inline completed">
        <el-form-item>
          <el-checkbox />
        </el-form-item>
        <el-form-item>
          <el-input  placeholder="请输入"/>
        </el-form-item>
        <el-form-item>
          <i class="el-icon-delete" @click="delItem()"/>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      items: [
        {
          id: 1,
          title: 'i am ok',
          status: 0
        },
        {
          id: 2,
          title: '2 i am ok',
          status: 1
        }
      ]
    }
  },
  methods: {
    delItem () {
      console.log('del_item')
    }
  }
}
</script>

<style scoped>
  * {
    /*background-color: rgba(0, 0, 0, 0.1);*/
  }
  .todo {
    max-width: 800px;
    margin: 0 auto;
  }
  .completed {
    background-color: #42b983;
  }
</style>
