<template>
  <div class="box">
    <ul>
      <li v-for="(item, index) in diapersList.list" :key="index">
        <img :src="item.imgUrl" alt="" />
        <p class="p1">{{ item.productName }}</p>
        <p class="p2">￥{{ item.currentPrice }}.00 <span>vip</span></p>
        <p class="p3">￥{{ item.originalPrice }}.00</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { diapersApi } from "../../utils/api";
export default {
  setup() {
    let diapersList = ref({});
    onMounted(async () => {
      console.log(123);
      const response = await diapersApi();
      diapersList.value = response.result;
      console.log(response.result);
    });
    return {
      diapersList,
    };
  },

  components: {},
};
</script>

<style lang="less" scoped>
.box {
  position: relative;

  ul {
    width: 100vw;
    padding: 5px;
    position: fixed;
    top: 46px;
    bottom: 0px;
    overflow: auto;
    li {
      width: 46vw;
      height: 250px;
      margin: 5px;
      background: #fff;
      float: left;
      img {
        width: 160px;
        height: 160px;
      }
      p {
        margin-top: 5px;
        margin-bottom: 5px;
        text-align: left;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 6px;
        margin-top: 3px;
        margin-bottom: 3px;
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        span {
          border: 2px solid rgb(184, 184, 184);
          border-radius: 3px;
          font-weight: 600;
          color: rgb(184, 184, 184);
          font-size: 3px;
        }
      }
      .p1 {
        height: 30px;
        // color: red;
        overflow: hidden;
      }
      .p2 {
        font-size: 15px;
        color: red;
      }
    }
  }
}
</style>
