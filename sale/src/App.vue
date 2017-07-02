<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      I am content!
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  export default{
    components: {
      'v-header': header
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      /*移动端常用等分布局*/
      display: flex
      width: 100%
      /*移动端大小是网页端的2倍*/
      height: 40px
      line-height: 40px;
      .tab-item
        flex: 1
        text-align: center


</style>
