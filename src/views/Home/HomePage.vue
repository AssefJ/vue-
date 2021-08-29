<template>
  <div class="home">
    <Header :homepage="true" />
    <div class="main">
      <Carousel />
      <Nav />
      <Content />
      <Commodity />
    </div>
  </div>
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Carousel from "../../components/Home/Carousel.vue";
import Nav from "../../components/Home/Nav.vue";
import Content from "../../components/Home/Content.vue";
import Commodity from "../../components/Home/Commodity.vue";

export default {
  data() {
    return {};
  },

  components: {
    Header,
    Carousel,
    Nav,
    Content,
    Commodity,
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  // overflow: auto;
  .main {
    position: fixed;
    top: 46px;
    bottom: 50px;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
