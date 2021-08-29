<template>
  <div>
    <submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="onClickLink">修改地址</span>
      </template>
    </submit-bar>
  </div>
</template>

<script>
import { SubmitBar } from "vant";
import { ref } from "vue";
const Toast = ref("");
export default {
  setup() {
    const onSubmit = () => Toast("点击按钮");
    const onClickLink = () => Toast("修改地址");
    return {
      onSubmit,
      onClickLink,
    };
  },

  components: {
    SubmitBar,
  },
};
</script>

<style lang="less" scoped></style>
