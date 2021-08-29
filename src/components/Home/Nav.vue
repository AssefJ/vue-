<template>
  <div>
    <grid>
      <grid-item
        icon="photo-o"
        icon-prefix="iconfont icon-date"
        text="每日福利"
        icon-color="#ebad58"
      />
      <grid-item
        icon="photo-o"
        icon-prefix="iconfont icon-hot"
        text="热销榜"
        icon-color="#e4786e"
      />
      <grid-item
        icon="photo-o"
        icon-prefix="iconfont icon-gouwu"
        text="皮噜甄选"
        icon-color="#f8bc4e"
      />
      <grid-item
        icon="photo-o"
        icon-prefix="iconfont icon-xinyongqiahuankuan"
        text="会员中心"
        icon-color="#a37dee"
      />
    </grid>
  </div>
</template>

<script>
// import { Icon } from "vant";
import { Grid, GridItem } from "vant";
export default {
  components: {
    Grid,
    GridItem,
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 25px;
}
</style>
