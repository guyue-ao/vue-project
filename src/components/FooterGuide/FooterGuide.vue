<template>
  <div class='footer-guide'>
    <span class='guide-item' :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
      <span >
        <i class="iconfont icon-shouye "></i>
      </span>
      <span>首页</span>
    </span>
    <span class='guide-item' :class="{on: $route.path==='/search'}" @click="goto('/search')">
      <span>
        <i class="iconfont icon-zhenhuichongtubiaozhizuo-kuozhan-"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class='guide-item' :class="{on: $route.path==='/order'}" @click="goto('/order')">
      <span><i class="iconfont icon-danju"></i></span>
      <span>订单</span>
    </span>
    <span class='guide-item' :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
      <span><i class="iconfont icon-user"></i></span>
      <span>用户</span>
    </span>
  </div>
</template>

<script>
export default {
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl'
.footer-guide
  top-border-1px(#cccccc)
  display flex
  position fixed
  bottom 0
  left 0
  height 50px
  width 100%
  
  .guide-item
    display flex
    flex-direction column
    text-align center
    
    width 25%
    &.on
      color $green
    span
      margin-top 3px
      font-size 12px
      i
        font-size 22px
</style>