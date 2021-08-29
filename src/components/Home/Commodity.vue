<template>
  <div class="box">
    <p><span></span>推荐商品</p>
    <div class="box1">
      <ul>
        <li v-for="(item, index) in recommendList.list" :key="index">
          <img :src="item.imgUrl" alt="" />
          <div class="box2">
            <p :src="item.productName">{{ item.productName }}</p>
            <p :src="item.originalPrice">价格:{{ item.originalPrice }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { recommendApi } from "../../utils/api";
export default {
  setup() {
    let recommendList = ref({});
    onMounted(async () => {
      // console.log(123);
      const response = await recommendApi();
      recommendList.value = response.result;
      // console.log(response.result);
    });
    return {
      recommendList,
    };
  },

  components: {},
};
</script>

<style lang="less" scoped>
.red-block {
  width: 3px;
  height: 5px;
  background: #cf6b39;
}
.box {
  p {
    text-align: left;
    text-indent: 15px;
    margin-left: 10px;
    line-height: 20px;
    span {
      width: 7px;
      height: 19px;
      background: rgb(240, 70, 70);
      display: block;
      float: left;
    }
  }
  .box1 {
    li {
      width: 94%;
      height: 120px;
      background: #fff;
      border-bottom: 1px solid rgb(236, 235, 235);
      padding: 10px;
      display: flex;
      img {
        height: 100%;
        // float: left;
      }
      .box2 {
        width: 220px;
        height: 100px;
        // float: left;
        // background: hotpink;
        p {
          width: 220px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
