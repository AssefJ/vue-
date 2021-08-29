<template>
  <div class="box">
    <div class="one">
      <span>全球奶粉</span><img src="../../assets/img/1.jpg" alt="" />
    </div>
    <div class="two">
      <span>尿不湿</span><img src="../../assets/img/2.jpg" alt="" />
    </div>
    <div class="three">
      <span>营养辅食</span><img src="../../assets/img/3.jpg" alt="" />
    </div>
    <div class="four">
      <span>宝宝洗护</span><img src="../../assets/img/4.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},
};
</script>

<style lang="less" scoped>
.box {
  width: 94%;
  height: 250px;
  //  border: 1px solid black;
  padding: 3%;
  div {
    height: 100px;
    width: 43%;
    //  background: black;
    float: left;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    span {
      font-weight: 600;
    }
    img {
      margin-top: 20px;
      width: 80px;
      height: 80px;
      background: rgb(226, 225, 225);
    }
  }
  .one,
  .two {
    margin-bottom: 0.5rem;
  }
  .one,
  .three {
    margin-right: 0.5rem;
  }
  .one {
    background: #fff6e5;
  }
  .two {
    background: #fcfef0;
  }
  .three {
    background: #fff3f5;
  }
  .four {
    background: #f6f7fc;
  }
}
</style>
