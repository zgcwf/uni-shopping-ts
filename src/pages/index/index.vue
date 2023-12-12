<template>
  <view class="viewport">
    <!-- 自定义头部导航栏 -->
    <CustomNavBar />
    <scroll-view
      class="scroll-view"
      scroll-y
      enable-back-to-top
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      @scrolltolower="onScrolltolower"
    >
      <!-- 骨架屏 -->
      <PageSkeleton v-if="loading" />
      <template v-else>
        <!-- 轮播图 -->
        <XtxSwiper :list="bannerList" />
        <!-- 分类面板 -->
        <CategoryPanel :list="categoryList" />
        <!-- 热门推荐 -->
        <HotPanel :list="hotList" />
        <!-- 猜你喜欢 -->
        <XtxGuess ref="guessRef" />
      </template>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

import CustomNavBar from "./components/CustomNavBar.vue";
import CategoryPanel from "./components/CategoryPanel.vue";
import HotPanel from "./components/HotPanel.vue";
import PageSkeleton from "./components/PageSkeleton.vue";
import { useGuessList } from "@/composables";

import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from "@/services/home";
import type { BannerItem, CategoryItem, HotItem } from "@/types/home";
import type { XtxGuessInstance } from "@/types/components";

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([]);
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI();
  bannerList.value = res.result;
};

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([]);
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI();
  categoryList.value = res.result;
};

// 获取热门推荐数据
const hotList = ref<HotItem[]>([]);
const getHomeHotData = async () => {
  const res = await getHomeHotAPI();
  hotList.value = res.result;
};

// 上拉加载--猜你喜欢hooks函数调用
const { guessRef, onScrolltolower } = useGuessList();

// const guessRef = ref<XtxGuessInstance>();
// // 滚动触底事件
// const onScrolltolower = () => {
//   guessRef.value?.getMore();
// };

// 下拉刷新
const isTriggered = ref(false);
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true;
  // 重置猜你喜欢数据
  guessRef.value?.reset();
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData(), guessRef.value?.getMore()]);
  // 关闭动画
  isTriggered.value = false;
};

// 页面加载
const loading = ref(false);
onLoad(async () => {
  loading.value = true;
  try {
    await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()]);
  } catch (error) {
    console.log("error", error);
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
