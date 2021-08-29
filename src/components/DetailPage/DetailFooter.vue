<template>
  <div>
    <action-bar>
      <action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <action-bar-icon icon="cart-o" text="购物车" />
      <action-bar-icon icon="star" text="已收藏" color="#ff5000" />
      <action-bar-button type="warning" text="加入购物车" />
      <action-bar-button type="danger" text="立即购买" />
    </action-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
import { ActionBar, ActionBarIcon, ActionBarButton } from "vant";
export default {
  setup() {
    const onClickIcon = () => Toast("点击图标");
    const onClickButton = () => Toast("点击按钮");
    return {
      onClickIcon,
      onClickButton,
    };
  },
  components: {
    ActionBar,
    ActionBarIcon,
    ActionBarButton,
  },
};
</script>

<style lang="less" scoped></style>
