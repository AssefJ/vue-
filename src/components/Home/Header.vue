<template>
  <div>
    <van-nav-bar title="首页" v-if="hometitle" />
    <van-nav-bar title="分类" v-if="classtitle" />
    <van-nav-bar title="购物车" v-if="shoptitle" />
    <van-nav-bar title="会员中心" v-if="minetitle" />
  </div>
</template>

<script>
import { ref } from "vue";
import { NavBar as VanNavBar } from "vant";

export default {
  props: ["homepage", "classify", "shopping", "mine"],
  components: {
    VanNavBar,
  },
  setup(props) {
    let hometitle = ref(props.homepage);
    let classtitle = ref(props.classify);
    let shoptitle = ref(props.shopping);
    let minetitle = ref(props.mine);
    return {
      hometitle,
      classtitle,
      shoptitle,
      minetitle,
    };
  },
};
</script>

<style lang="less">
.van-nav-bar__title /deep/ {
  font-weight: 600;
}
</style>
