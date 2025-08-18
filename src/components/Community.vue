<script setup>
import { Dock, DockIcon, DockSeparator } from './ui/dock/index.js';
import { Marquee, ReviewCard } from './ui/marquee/index.js';
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const base = import.meta.env.BASE_URL;
// Reviews data
const reviews = [
  { img: '/ImageScroll/Scroll_1.jpg' },
  { img: '/ImageScroll/Scroll_2.jpg' },
  { img: '/ImageScroll/Scroll_3.jpg' },
  { img: '/ImageScroll/Scroll_4.jpg' },
  { img: '/ImageScroll/Scroll_5.jpg' },
];

</script>

<template>
  <div class="main">
    <!-- 使用Tailwind白色背景类及配套样式 -->
    <Dock class="mb-6 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
      <DockIcon>
        <!-- 图标使用深灰色与白色背景对比 -->
        <Icon icon="mdi:github" class="w-6 h-6 text-gray-800" />
      </DockIcon>
      <DockSeparator class="bg-gray-200 w-px h-6" />
      <DockIcon>
        <Icon icon="logos:google-drive" class="w-6 h-6 text-gray-800" />
      </DockIcon>
      <DockIcon>
        <Icon icon="logos:notion-icon" class="w-6 h-6 text-gray-800" />
      </DockIcon>
      <DockIcon>
        <Icon icon="logos:whatsapp-icon" class="w-6 h-6 text-gray-800" />
      </DockIcon>
    </Dock>

    <div
      class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <!-- First Marquee -->
      <Marquee pause-on-hover class="[--duration:20s]">
        <ReviewCard v-for="review in reviews" :key="review.username" :img="`${base}${review.img}`" :name="review.name"
          :username="review.username" :body="review.body" />
      </Marquee>

      <!-- Left Gradient -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background">
      </div>

      <!-- Right Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background">
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 如需额外样式，可在此处添加 */
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>