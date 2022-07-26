<template>
  <div id="app">
    <keep-alive exclude="MyxcmallDetail">
      <router-view></router-view>
    </keep-alive>
    <mian-tab-bar></mian-tab-bar>
  </div>
</template>

<script>
import MianTabBar from 'components/content/miantabbar/miantabbar.vue'
export default {
  name: 'App',
  components: {
    MianTabBar,
  }
}
</script>

<style>
  @import url(assets/css/base.css);

</style>
