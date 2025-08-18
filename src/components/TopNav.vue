<template>
    <div class="top_nav" :class="{ 'scrolled': isScrolled }">
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
            <div class="top_nav_middle" :class="{ 'scrolled': isScrolled }">
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
            <img 
                src="/xiaochengxu.png" 
                alt="放大的小程序二维码" 
                class="enlarged-img"
            >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showEnlargedImage: false,
            isScrolled: false,
            scrollPosition: 0
        };
    },
    methods: {
        handlePersonClick() {
            // 个人中心点击事件处理
            console.log('点击了个人中心');
        },
        handleSearchClick() {
            // 搜索点击事件处理
            console.log('点击了搜索');
        },
        handleScroll() {
            // 监听滚动事件
            this.scrollPosition = window.scrollY;
            // 当滚动超过50px时，应用滚动样式
            this.isScrolled = this.scrollPosition > 50;
        }
    },
    mounted() {
        // 初始化时检查一次滚动位置
        this.handleScroll();
        // 挂载时添加滚动监听
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        // 卸载时移除滚动监听
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped>
.top_nav {
    transition: all 0.3s ease;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: transparent;
}

.navigation-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 61px;
    transition: all 0.3s ease;
    color: #fff; /* 默认文字颜色为白色 */
}

/* 左侧区域样式 */
.top_nav_left {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;
}

.xiaochengxu-img {
    width: 28px;
    height: 28px;
    margin-left: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* 中间文字样式 */
.top_nav_middle {
    font-size: 1.1rem;
    transition: all 0.3s ease;
}

/* 右侧区域样式 */
.top_nav_right {
    display: flex;
    align-items: center;
    gap: 15px;
}

.icon-img {
    width: 28px;
    height: 28px;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* 滚动后的样式 */
.top_nav.scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

/* 滚动后导航内容样式变化 */
.top_nav.scrolled .navigation-content {
    height: 50px;
    color: rgba(78, 99, 142, 1); /* 文字颜色变为深色 */
}

/* 滚动后图标样式变化 - 上移缩小 */
.top_nav.scrolled .icon-img,
.top_nav.scrolled .xiaochengxu-img {
    width: 20px;
    height: 20px;
    transform: translateY(-3px);
}

/* 中间文字滚动后的样式 - 上移缩小 */
.top_nav_middle.scrolled {
    font-size: 0.9rem;
    transform: translateY(-3px);
}

/* 点击效果样式 */
.clickable {
    transition: transform 0.2s ease;
}

.clickable:active {
    transform: scale(0.9);
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
    z-index: 1000;
}

.enlarged-img {
    width: 80%;
    max-width: 300px;
    height: auto;
    border: 4px solid white;
    border-radius: 8px;
}

/* 响应式适配 */
@media (max-width: 768px) {
    .navigation-content {
        padding: 0 15px;
    }
    
    .top_nav_left {
        font-size: 1rem;
    }
    
    .top_nav_middle {
        font-size: 1rem;
    }
    
    .top_nav_right {
        gap: 10px;
        font-size: 0.9rem;
    }
    
    .icon-img, .xiaochengxu-img {
        width: 24px;
        height: 24px;
    }
}

@media (max-width: 480px) {
    .top_nav_middle {
        display: none; /* 小屏幕隐藏中间文字 */
    }
}
</style>
    