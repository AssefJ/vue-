<template>
  <div>
    <swipe>
      <swipe-item>1</swipe-item>
      <swipe-item>2</swipe-item>
      <swipe-item>3</swipe-item>
      <swipe-item>4</swipe-item>
      <template #indicator="{ active }">
        <div class="custom-indicator">{{ active + 1 }}/4</div>
      </template>
    </swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

export default {
  data() {
    return {};
  },

  components: {
    Swipe,
    SwipeItem,
  },
};
</script>

<style lang="less" scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.van-swipe-item /deep/ {
  height: 300px;
}
</style>
