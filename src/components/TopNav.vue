<template>
    <div class="top_nav">
        <div class="navigation-content">
            <div class="top_nav_left">
                SZTUFA
                <!-- 小程序图片 - 点击放大 -->
                <img 
                    src="/xiaochengxu.png" 
                    alt="小程序二维码" 
                    class="xiaochengxu-img"
                    @click="showEnlargedImage = true"
                    :class="{ 'clickable': true }"
                >
            </div>
            <div class="top_nav_middle">
                因为热爱 一往无前
            </div>
            <div class="top_nav_right">
                <!-- 个人中心图片 - 仅点击效果 -->
                <img 
                    src="/person.png" 
                    alt="个人中心" 
                    class="icon-img"
                    @click="handlePersonClick"
                    :class="{ 'clickable': true }"
                >
                <!-- 搜索图片 - 仅点击效果 -->
                <img 
                    src="/search.png" 
                    alt="搜索" 
                    class="icon-img"
                    @click="handleSearchClick"
                    :class="{ 'clickable': true }"
                >
                联系我们
            </div>
        </div>
        <!-- 小程序图片放大弹窗 -->
        <div 
            v-if="showEnlargedImage" 
            class="image-overlay"
            @click="showEnlargedImage = false"
        >
            <div class="enlarged-image-container" @click.stop>
                <img 
                    src="/xiaochengxu.png" 
                    alt="小程序二维码" 
                    class="enlarged-image"
                >
                <button class="close-btn" @click="showEnlargedImage = false">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 控制小程序图片是否放大显示
const showEnlargedImage = ref(false);

// 个人中心图片点击事件
const handlePersonClick = () => {
    // 这里可以添加个人中心的点击逻辑
    console.log('个人中心图片被点击');
    // 例如: 导航到个人中心页面
    // router.push('/profile');
};

// 搜索图片点击事件
const handleSearchClick = () => {
    // 这里可以添加搜索的点击逻辑
    console.log('搜索图片被点击');
    // 例如: 打开搜索框
    // openSearchModal();
};
</script>

<style scoped>
.top_nav {
    width: 100%;
    height: 61px;
    /* 可以添加导航栏背景色以便在各种背景下可见 */
    /* background-color: rgba(0, 0, 0, 0.5); */
    position: fixed; /* 固定在顶部 */
    top: 0;
    left: 0;
    z-index: 998; /* 确保在内容之上，但低于底部导航 */
    background-color: rgba(0, 0, 0, 0.3); /* 半透明背景，增加层次感 */
    backdrop-filter: blur(5px); /* 毛玻璃效果，更现代 */
}

.navigation-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 61px;
    font-family: 'YouSheBiaoTiHei';
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.63rem;
    letter-spacing: 0rem;
    color: rgba(255, 255, 255, 1);
}

/* 图片样式 */
.icon-img, .xiaochengxu-img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    transition: transform 0.2s ease;
    filter: brightness(0) invert(1); /* 确保在深色背景上可见 */
}

/* 可点击样式 */
.clickable {
    cursor: pointer;
}

.clickable:hover {
    transform: scale(1.1);
}

/* 左侧图片 - SZTUFA右侧 */
.top_nav_left {
    display: flex;
    align-items: center;
    gap: 10px;
}

/* 右侧图片 - 联系我们左侧 */
.top_nav_right {
    display: flex;
    align-items: center;
    gap: 10px;
}

/* 中间文字样式 */
.top_nav_middle {
    font-size: 1rem;
    opacity: 0.9;
}

/* 图片放大弹窗样式 */
.image-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease;
}

.enlarged-image-container {
    position: relative;
    padding: 20px;
}

.enlarged-image {
    max-width: 80%;
    max-height: 80vh;
    border: 4px solid white;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    animation: zoomIn 0.3s ease;
}

.close-btn {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ff3b30;
    color: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
}

.close-btn:hover {
    transform: scale(1.1);
}

/* 动画效果 */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes zoomIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

/* 字体引入 */
@font-face {
    font-family: 'YouSheBiaoTiHei';
    src: url('..//assets/YouSheBiaoTiHei.ttf');
    font-display: swap;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .top_nav_middle {
        display: none; /* 小屏幕隐藏中间文字 */
    }
    
    .navigation-content {
        justify-content: space-around;
    }

    /* 小屏幕调整图片大小 */
    .icon-img, .xiaochengxu-img {
        width: 20px;
        height: 20px;
    }

    .enlarged-image {
        max-width: 90%;
    }
}
</style>