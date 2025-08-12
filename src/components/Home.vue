<script setup>
import Navigation from './Navigation.vue';
</script>
<template>
    <div class="home_content">
        <div class="top_nav"></div>
        <div class="first_img">
            <div class="title">
                <div class="title-white">WELCOME</div>
                <div class="title-orange">TO SZTUFA</div>
            </div>
            <img src="/public/Home_bg.jpg" alt="背景图片" />
        </div>
        <div class="navigation">
            <Navigation />
        </div>
    </div>
</template>
<style scoped>
.home_content{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.top_nav {
    width: 100vw;
    height: 61px;
    /* 可以添加导航栏背景色以便在各种背景下可见 */
    /* background-color: rgba(0, 0, 0, 0.5); */
}

.first_img {
    width: 93.75%;
    height: calc(100vh - 61px); /* 减去导航栏高度 */
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
    object-fit: cover; /* 保持图片比例并覆盖容器 */
    display: inline-block;
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 居中定位 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加文字阴影增强可读性 */
}

.title-white, .title-orange {
    font-family: 'Noto Sans Bengali ExtraCondensed';
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
}

.title-white {
    color: rgba(255, 255, 255, 1);
}

.title-orange {
    color: rgba(255, 101, 32, 1);
    letter-spacing: -2px;
}

/* 默认字体大小 - 适用于中等屏幕 */
.title-white, .title-orange {
    font-size: clamp(5rem, 15vw, 10.625rem); /* 响应式字体大小 */
}

@font-face {
    font-family: 'Noto Sans Bengali ExtraCondensed';
    src: url('../assets/NSBE.ttf');
    font-display: swap; /* 优化字体加载体验 */
}

/* 大屏幕设备 */
@media (min-width: 1200px) {
    .first_img {
        height: 88%;
    }
}

/* 平板设备 */
@media (max-width: 992px) {
    .first_img {
        width: 96%;
        border-radius: 15px;
    }
    
    .title {
        width: 90%;
    }
}

/* 手机设备 */
@media (max-width: 768px) {
    .top_nav {
        height: 50px;
    }
    
    .first_img {
        width: 98%;
        height: calc(100vh - 50px);
        border-radius: 10px;
        box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
    }
    
    .title-white, .title-orange {
        letter-spacing: normal;
    }
}

/* 小屏手机 */
@media (max-width: 576px) {
    .title {
        width: 95%;
    }
    
    .title-white, .title-orange {
        font-size: clamp(3rem, 18vw, 7rem);
    }
}
</style>
