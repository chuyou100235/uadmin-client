<template>
  <div>列表页</div>
</template>

<script>
import { sendHttp } from "@/api/router";
export default {
  name: "Index",
  components: {},
  data() {
    return {
      nodeEnv: process.env.NODE_ENV,
      initifyData: {
        url: "",
        data: {},
        method: "get",
      },
    };
  },
  created() {
    // 获取初始化信息
    this.initifyData.url = this.$route.apiurl;
    this.initifyData.data = this.$route.params;
    this.initifyData.method = this.$route.method;

    // 获取初始化信息
    this.initify();
  },
  mounted() {},
  methods: {
    // 获取初始化信息
    initify() {
      if (this.initifyData.url) {
        sendHttp(this.initifyData).then((res) => {
          let resutl = res.data;
          console.log(res);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
