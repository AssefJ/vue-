<template>
  <div>
    <div class="box">
      <p>￥<span>115.00</span><span>会员专享</span></p>
      <p>普通价 ￥<span>125.00</span></p>
      <p>帮宝适一级帮环贴式纸尿裤-NB84片</p>
      <p>适用于小于5kg宝宝</p>
    </div>
    <cell-group>
      <p><cell title="单元格" is-link /></p>
    </cell-group>
    <cell-group>
      <p><cell title="单元格" is-link value="内容" /></p>
    </cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant";
export default {
  data() {
    return {};
  },

  components: {
    Cell,
    CellGroup,
  },
};
</script>

<style lang="less">
#app {
  text-align: left;
}
.box {
  p {
    background: #fff;
    padding-left: 10px;
    height: 45px;
    margin: 0;
    line-height: 45px;
  }
}
</style>
