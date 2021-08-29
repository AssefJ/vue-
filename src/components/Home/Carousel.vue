<template>
  <div>
    <swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      style="height: 150px"
    >
      <swipe-item v-for="(item, index) in bannerList.list" :key="index">
        <img :src="item" alt="" />
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import { onMounted, ref } from "vue";
import { carouselApi } from "../../utils/api";

export default {
  setup() {
    let bannerList = ref({});
    onMounted(async () => {
      // console.log(123);
      const response = await carouselApi();
      bannerList.value = response.result;
      // console.log(response.result);
    });
    return {
      bannerList,
    };
  },

  components: {
    Swipe,
    SwipeItem,
  },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
img {
  width: 100%;
  height: 100%;
}
</style>
