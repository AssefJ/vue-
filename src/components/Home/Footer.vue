<template>
  <div>
    <tabbar v-model="active">
      <tabbar-item
        icon="home-o"
        icon-prefix="iconfont icon-solid-home"
        active-color="orange"
        to="/home"
        >首页</tabbar-item
      >
      <tabbar-item
        icon="search"
        icon-prefix="iconfont icon-leimupinleifenleileibie"
        active-color="orange"
        to="/home/classify"
        >分类</tabbar-item
      >
      <tabbar-item
        icon="friends-o"
        icon-prefix="iconfont icon-gouwuchekong"
        active-color="orange"
        to="/home/shopping"
        >购物车</tabbar-item
      >
      <tabbar-item
        icon="setting-o"
        icon-prefix="iconfont icon-wode"
        active-color="orange"
        to="/home/mine"
        >我的</tabbar-item
      >
    </tabbar>
  </div>
</template>

<script>
import { ref } from "vue";
import { Tabbar, TabbarItem } from "vant";

export default {
  setup() {
    const active = ref(0);
    return { active };
  },

  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style lang="less" scoped>
.van-tabbar-item--active {
  color: orange;
  --van-tabbar-height: 20px;
}
</style>
