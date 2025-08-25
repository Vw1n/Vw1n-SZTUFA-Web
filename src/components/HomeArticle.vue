<script setup>
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
    <div class="second_screen_content">
        <div class="white_block">
            <h1 class="title">推文精选</h1>
        </div>
        <!-- 使用动态属性根据屏幕尺寸调整图片宽度 -->
        <ImageScroll 
            class="imageScroll" 
            :images="ImageSrc" 
            :interval="3000" 
            :imageWidth="imageWidth" 
        />
    </div>
</template>

<style scoped>
.second_screen_content {
    position: relative;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.white_block {
    margin: 0 auto;
    margin-top: clamp(50px, 20vh, 134px); /* 使用clamp实现动态margin */
    width: 90%;
    max-width: 1200px; /* 最大宽度限制 */
    min-height: 500px;
    height: clamp(500px, 80vh, 812px); /* 动态高度 */
    border-radius: 20px;
    background: rgba(255, 255, 255, 1);
    overflow: visible;
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); /* 增加轻微阴影提升质感 */
}

.title {
    position: absolute;
    width: 620px;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'YouSheBiaoTiHei';
    color: rgba(78, 99, 142, 1);
    font-size: clamp(2rem, 15vw, 10.625rem); /* 响应式字体大小 */
    font-weight: 400;
    line-height: 1.2; /* 使用相对行高 */
    letter-spacing: -2px;
    text-align: center; /* 居中对齐更适合响应式 */
}

.imageScroll {
    position: absolute;
    top: clamp(120px, 30vh, 200px); /* 动态定位 */
    left: 50%;
    transform: translateX(-50%);
    width: 90%; /* 占容器宽度的90% */
}

@font-face {
    font-family: 'YouSheBiaoTiHei';
    src: url('../assets/YouSheBiaoTiHei.ttf');
    font-display: swap;
}

/* 媒体查询适配不同屏幕尺寸 */
@media (max-width: 1200px) {
    .white_block {
        width: 95%;
    }
}

@media (max-width: 768px) {
    .white_block {
        height: clamp(400px, 70vh, 600px);
        margin-top: 30px;
    }
    
    .title {
        letter-spacing: -1px;
    }
    
    .imageScroll {
        top: clamp(100px, 25vh, 150px);
    }
}

@media (max-width: 480px) {
    .second_screen_content {
        padding: 0 10px;
    }
    
    .white_block {
        border-radius: 12px;
        height: clamp(350px, 60vh, 500px);
    }
    
    .title {
        top: 5px;
        letter-spacing: 0;
    }
}
</style>