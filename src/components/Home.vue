<script setup>
import Navigation from './Navigation.vue';
import TopNav from './TopNav.vue';
import HomeImage from './HomeImage.vue';
import ImageScroll from './ImageScroll.vue';
const ImageSrc = [
    { src: '/ImageScroll/Scroll_1.jpg', alt: 'Image 1' },
    { src: '/ImageScroll/Scroll_2.jpg', alt: 'Image 2' },
    { src: '/ImageScroll/Scroll_3.jpg', alt: 'Image 3' },
    { src: '/ImageScroll/Scroll_4.jpg', alt: 'Image 4' },
    { src: '/ImageScroll/Scroll_5.jpg', alt: 'Image 5' },
]
</script>
<template>
    <div class="first_screen">
        <TopNav />
        <HomeImage />
        <Navigation />
    </div>
    <div class="second_screen">
        <div class="second_screen_content">
            <div class="white_block">
                <h1 class="title">推文精选</h1>
            </div>
            <ImageScroll :images="ImageSrc" :interval="3000" :imageWidth="300" />
        </div>
    </div>
</template>
<style scoped>
.first_screen {
    width: 100%;
    height: 100vh;
}

.second_screen {
    width: 100%;
    height: 100vh;
}
</style>