<script setup>
import Navigation from './Navigation.vue';
import TopNav from './TopNav.vue';
import HomeImage from './HomeImage.vue';
</script>
<template>
    <div class="first_screen">
        <div class="top_nav">
            <TopNav />
        </div>
        <HomeImage />
        <div class="navigation">
            <Navigation />
        </div>
    </div>
</template>
<style scoped>
.first_screen {
    width: 100vw;
    height: 100vh;
}

.top_nav {
    width: 100vw;
    height: 61px;
    /* 可以添加导航栏背景色以便在各种背景下可见 */
    /* background-color: rgba(0, 0, 0, 0.5); */
}
</style>