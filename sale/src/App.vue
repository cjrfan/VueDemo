<template>
  <div id="app">
    <header></header>
    <div class="tab">
      tab
    </div>
    <div class="content">
      content
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';

  export default{
    components: {
      'header': header
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
