<template>
  <div>
    <van-nav-bar
      title="全球奶粉"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { NavBar as VanNavBar } from "vant";
import { Toast } from "vant";

export default {
  setup() {
    const onClickLeft = () => Toast("返回");
    return {
      onClickLeft,
    };
  },

  components: {
    VanNavBar,
  },
};
</script>

<style lang="less">
.van-nav-bar__title /deep/ {
  font-weight: 500;
}
:root {
  --van-nav-bar-icon-color: #070707;
}
</style>
