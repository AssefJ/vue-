<template>
  <div>
    <tree-select
      v-model:main-active-index="activeIndex"
      height="150vw"
      :items="items"
    >
      <template #content>
        <div v-if="activeIndex === 0" class="box0">
          <div v-for="(item, index) in productList" :key="index" class="blurb">
            <img :src="item.imgUrl" alt="" />
            <p>{{ item.title }}</p>
          </div>
        </div>
        <!-- <div v-if="activeIndex === 1" class="box1">
          <div v-for="(item,index) in productList" :key="index" class="blurb" >
            <img :src="item.imgUrl" alt="">
            <p>{{item.title}}</p>
          </div>
        </div>
        <div v-if="activeIndex === 2" class="box1">
          <div v-for="(item,index) in productList" :key="index" class="blurb" >
            <img :src="item.imgUrl" alt="">
            <p>{{item.title}}</p>
          </div>
        </div> -->
      </template>
    </tree-select>
  </div>
</template>

<script>
import { TreeSelect } from "vant";
import { onMounted, ref } from "vue";
import { productApi } from "../../utils/api";
export default {
  setup() {
    const activeIndex = ref(0);
    let productList = ref({});

    const handleClick = () => {
      console.log(111);
    };

    onMounted(async () => {
      const product = await productApi({ type: "1" });
      productList.value = product.result;
    });
    return {
      activeIndex,
      items: [{ text: "推荐分类" }, { text: "全球奶粉" }, { text: "尿不湿" }],
      productList,
      handleClick,
    };
  },

  components: {
    TreeSelect,
  },
};
</script>

<style lang="less">
.van-sidebar-item {
  padding: 14px 5px;
}
.box0 {
  height: 500px;
  // background: gray;
  padding: 3px;
  .blurb {
    float: left;
    margin: 5px;
    width: 70px;
    img {
      width: 70px;
    }
    p {
      width: 70px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
