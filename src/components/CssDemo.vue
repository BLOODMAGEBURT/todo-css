<template>
  <div id="container">
    <div id="header">Header</div>
    <div id="wrapper" class="clear-fix">
      <div id="content">Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eius est molestias nesciunt provident quaerat recusandae reiciendis soluta </div>
    </div>
    <div id="navigation" class="clear-fix">Navigation veritatis voluptate. Corporis explicabo hic minus nemo odit quos sequi sint sunt!</div>
    <div id="extra" class="clear-fix">Extra stuff veritatis voluptate. Corporis explicabo hic minus nemo odit quos sequi sint sunt!</div>
    <div id="footer">Footer</div>
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
    background: rgba(0, 0, 0, .01);
  }
  #header {
    font-size: 28px;
    color: #42b983;
    padding: 10px 5px;
  }
  #footer {
    font-size: 14px;
    color: white;
    background: black;
    padding: 5px;
    clear: left;
  }
  #navigation {
    width: 25%;
    margin-top: 10px;
  }
  #wrapper {
    width: 50%;
    margin-bottom: 50px;
  }
  #extra {
    width: 25%;
  }
  .clear-fix:before,
  .clear-fix:after
  {
    content: "ss";
    display: block;
    clear: both;
  }
</style>
