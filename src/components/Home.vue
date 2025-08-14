<script setup>
import Navigation from './Navigation.vue';
import TopNav from './TopNav.vue';
import HomeImage from './HomeImage.vue';
</script>
<template>
    <div class="first_screen">
        <TopNav />
        <HomeImage />
        <Navigation />
    </div>
</template>
<style scoped>
.first_screen {
    width: 100vw;
    height: 100vh;
}
</style>