<template>
  <div class="root">
    <DetailHeader />
    <DetailFooter />
    <DetailCarousel />
    <DetailText />
  </div>
</template>

<script>
import DetailHeader from "../components/DetailPage/DetailHeader.vue";
import DetailFooter from "../components/DetailPage/DetailFooter.vue";
import DetailCarousel from "../components/DetailPage/DetailCarousel.vue";
import DetailText from "../components/DetailPage/DetailText.vue";
export default {
  data() {
    return {};
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f6f6f6");
  },

  components: {
    DetailHeader,
    DetailFooter,
    DetailCarousel,
    DetailText,
  },
};
</script>

<style lang="less" scoped></style>
