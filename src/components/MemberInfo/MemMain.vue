<template>
  <div>
    <cell-group>
      <cell title="头像" is-link value="内容" />
      <cell title="账号" is-link value="AAAAA" />
      <cell title="姓名" is-link value="汪杰" />
      <cell title="手机" is-link value="18961111444" />
      <cell title="邮箱" is-link value="18989449193@163.com" />
    </cell-group>
    <cell-group>
      <p><cell title="地址管理" is-link to="index" /></p>
    </cell-group>
    <cell-group>
      <cell title="修改密码" is-link to="index" />
      <cell title="绑定其他账号" is-link to="index" />
    </cell-group>
    <cell-group>
      <p><cell value="退出当前账号" /></p>
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
html {
  // width: 100%;
  // height: 100%;
  --van-cell-line-height: 40px !important;
  background: rgb(241, 241, 241);
  // div:nth-child(6){
  //   margin-top: 10px !important;
  //   margin-bottom: 10px ;
  // }
  #app {
    text-align: left;
    .van-cell__value--alone {
      text-align: center !important;
    }
  }
  .van-cell {
    height: 60px;
    line-height: 40px;
  }
}
</style>
