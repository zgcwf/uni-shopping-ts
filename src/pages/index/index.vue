<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <uni-card :is-shadow="false" is-full title="uni-card">
      <text>
        卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。
        例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。
      </text>
    </uni-card>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('首页')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
