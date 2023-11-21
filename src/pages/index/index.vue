<template>
  <!-- 自定义头部导航栏 -->
  <CustomNavBar />
  <!-- 轮播图 -->
  <XtxSwiper :list="bannerList" />
  index
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavBar from './components/CustomNavBar.vue'
import { getHomeBannerAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'

const loading = ref(false)

const bannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 页面加载
onLoad(async () => {
  try {
    loading.value = true
    await Promise.all([getHomeBanner()])
  } catch (error) {
    console.log('error', error)
  } finally {
    loading.value = false
  }
})
</script>

<style></style>
