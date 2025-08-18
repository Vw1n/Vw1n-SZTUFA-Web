<template>
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
    <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background">
    </div>
  </div>
</template>

<script setup>
import { Marquee, ReviewCard } from './ui/marquee/index.js';
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

<style scoped>
</style>
