<script setup lang="ts">
import type { HotItem } from "@/types/home";

// 定义 props 接收数据
defineProps<{
  list: HotItem[];
}>();
</script>

<template>
  <!-- 推荐专区 -->
  <view class="hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator class="cards" hover-class="none" :url="`/pages/hot/hot?type=${item.type}`">
        <image class="image" v-for="src in item.pictures" :key="src" mode="aspectFit" :src="src"></image>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
@import "./styles/HotPanel.scss";
</style>
