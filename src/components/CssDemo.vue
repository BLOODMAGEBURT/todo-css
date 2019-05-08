<template>
  <div class="container">
    <div class="nav clear-float">
      <div class="fl">
        <a class="item" href="#">首页</a>
      </div>
      <div class="self fr">
        <a class="item" href="#">我的订单</a>
        <a class="item" href="#">收藏夹</a>
        <a class="item" href="#">登录</a>
        <a class="item" href="#">注册</a>
      </div>
    </div>
    <div class="header clear-float">
      <div class="col-2 logo">
        香菇鸡
      </div>
      <div class="col-5 search-bar">
        <input type="text">
        <button class="fr">搜索</button>
      </div>
      <div class="col-3">
        <a href="#">我的购物车</a>
      </div>
    </div>
    <div class="main-promote clear-float">
      <div class="col-2">左边</div>
      <div class="col-6">中间</div>
      <div class="col-2">右边</div>
    </div>
    <div class="cat-promote clear-float">
      <div class="col-2">4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi debitis delectus
        deserunt dicta error esse, illum incidunt libero mag
      </div>
      <div class="col-3">
        4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi debitis delectus
        deserunt dicta error esse, illum incidunt libero mag
      </div>
      <div class="col-2">
        4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi debitis delectus
        deserunt dicta error esse, illum incidunt libero mag
      </div>
      <div class="col-3">
        4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi debitis delectus
        deserunt dicta error esse, illum incidunt libero mag
      </div>
    </div>
    <div class="footer">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum explicabo inventore ipsum molestiae, quasi quia repellat temporibus ullam! Amet atque aut, dolor esse fugit nesciunt non odit quos rerum sunt!
    </div>
  </div>
</template>

<script>
export default {
  name: 'CssDemo'
}
</script>

<style scoped>
  * {
    font-size: 16px;
    color: #555;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  a {
    color: #555555;
    text-decoration: none;
  }

  .container {
    max-width: 1080px;
    margin: 0 auto;
    line-height: 1.5;
  }
  .nav {
    background: #eee;
  }

  .nav .item {
    display: inline-block;
    padding: 5px 10px;
    color: #666;
  }
  .nav .item:hover {
    color: #233;
  }

  .header .logo {
    font-size: 30px;
    padding: 10px 0;
  }
  .header .search-bar {
    border: 2px solid #db1822;
  }
  .header .search-bar input {
    border: 0;
    padding: 10px;
    width: 80%;
  }
  .header .search-bar button {
    padding: 10px;
    width: 20%;
  }
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8 {
    display: block;
    position: relative;
    min-height: 1px;
    float: left;
  }

  .col-1 {
    width: 10%;
  }

  .col-2 {
    width: 20%;
  }

  .col-3 {
    width: 30%;
  }

  .col-4 {
    width: 40%;
  }

  .col-5 {
    width: 50%;
  }

  .col-6 {
    width: 60%;
  }

  .col-7 {
    width: 70%;
  }

  .col-8 {
    width: 80%;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .clear-float:after,
  .clear-float:before {
    content: " ";
    display: block;
    clear: both;
  }
</style>
