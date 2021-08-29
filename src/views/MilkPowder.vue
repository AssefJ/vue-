<template>
  <div>
    <MilkHeader />
    <MilkMain />
  </div>
</template>

<script>
import MilkHeader from "../components/MilkPowder/MilkHeader.vue";
import MilkMain from "../components/MilkPowder/MilkMain.vue";
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
    MilkHeader,
    MilkMain,
  },
};
</script>

<style lang="less" scoped></style>
