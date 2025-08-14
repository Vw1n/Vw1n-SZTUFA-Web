<script setup>
import Navigation from './Navigation.vue';
import TopNav from './TopNav.vue';
import HomeImage from './HomeImage.vue';
import HomeArticle from './HomeArticle.vue';
</script>
<template>
    <div class="first_screen">
        <TopNav />
        <HomeImage />
        <Navigation />
    </div>
    <div class="second_screen">
        <HomeArticle />
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