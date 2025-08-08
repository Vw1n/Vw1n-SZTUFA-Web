<script setup></script>
<template>
    <div class="top_nav"></div>
    <div class="first_img">
        <div class="title">
            <div class="title-white">WELCOME</div>
            <div class="title-orange">TO SZTUFA</div>
        </div>
        <img src="/public/Home_bg.jpg" />
    </div>
</template>
<style scoped>
.top_nav {
    width: 100%;
    height: 61px;
}

.first_img {
    width: 1800px;
    height: 950px;
    margin: 0 auto;
    text-align: center;
    border-radius: 20px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    position: relative;
}

img {
    width: 100%;
    height: 100%;
    display: inline-block;
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 654px;
    height: 379px;
    position: absolute;
    top: 506px;
    left: 573px;
}

.title-white {
    width: auto;
    height: 225px;
    color: rgba(255, 255, 255, 1);
    font-family: Noto Sans Bengali ExtraCondensed;
    font-size: 170px;
    font-weight: 400;
    line-height: 225px;
    letter-spacing: 0px;
    text-align: center;
}

.title-orange {
    width: auto;
    height: 225px;
    color: rgba(255, 101, 32, 1);

    font-family: Noto Sans Bengali ExtraCondensed;
    font-size: 170px;
    font-weight: 400;
    letter-spacing: -2px;
    text-align: center;
}

@font-face {
    font-family: 'Noto Sans Bengali ExtraCondensed';
    src: url('../assets/NSBE.ttf');
}
</style>