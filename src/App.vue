<template>
  <div class="container">
    <span>测试</span>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  }
})
</script>

<style lang="less">
.container{
  width: 375px;
  height: 200px;
  background-color: #42b983;
  font-size: 12px;
  line-height: 1;
}

</style>
