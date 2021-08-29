<template>
  <div>
    <DiapersHeader />
    <DiapersMain />
  </div>
</template>

<script>
import DiapersHeader from "../components/Diapers/DiapersHeader.vue";
import DiapersMain from "../components/Diapers/DiapersMain.vue";
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
    DiapersHeader,
    DiapersMain,
  },
};
</script>

<style lang="less" scoped></style>
