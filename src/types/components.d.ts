// 对自动导入的全局组件类型声明
import XtxSwiper from '@/components/XtxSwiper.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
