<template>
  <div></div>
</template>

<script>
import { GetFetchData } from "@/api/router";
export default {
  name: "Index",
  components: {},
  data() {
    return {
      nodeEnv: process.env.NODE_ENV,
      httpparams: {
        url: "",
        data: {},
        method: "get",
      },
    };
  },
  created() {
    this.initify();
  },
  mounted() {},
  methods: {
    initify() {
      GetFetchData(this.httpparams).then((res) => {
        let resutl = res.data;
        console.log(res);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
