<script setup lang="ts">
import type { BannerItem } from "@/types/home";
import { ref } from "vue";

// 定义 props 接收
defineProps<{
  list: BannerItem[];
}>();

const activeIndex = ref(0);

// 当 swiper 下标发生变化时触发
const onChange: UniHelper.SwiperOnChange = (ev) => {
  // ! 非空断言，主观上排除掉空值(null, undefined)情况
  activeIndex.value = ev.detail!.current;
};
</script>

<template>
  <view class="carousel">
    <swiper class="swiper" :circular="true" :autoplay="true" :interval="3000" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/category/category" open-type="switchTab" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text v-for="(item, index) in list" :key="item.id" class="dot" :class="{ active: index === activeIndex }"></text>
    </view>
  </view>
</template>

<style lang="scss">
@import "@/components/styles/XtxSwiper.scss";
</style>
