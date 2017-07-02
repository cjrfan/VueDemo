<template>
  <div>
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <!--使用指令v-link进行导航-->
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <!--路由外链，路由匹配到的组件将渲染在这里-->
    <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/header/header';

  export default{
    components: {
      'v-header': header
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"

  .tab
    /*移动端常用等分布局*/
    display: flex
    width: 100%
    /*移动端大小是网页端的2倍*/
    height: 40px
    line-height: 40px;
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        cursor: pointer
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)

</style>
