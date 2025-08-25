<template>
    <div class="top_nav" >
        <div class="navigation-content">
            <div class="top_nav_left">
                <!-- 足协徽章 - 点击放大 -->
                <img 
                    src="/Home_logo.png" 
                    alt="足协徽章" 
                    class="Home_logo-img"
                >
                SZTUFA
            </div>
            <div class="top_nav_middle">
                因为热爱 一往无前
            </div>
            
            <div class="top_nav_right">
                联系我们
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.top_nav {
    display: flex;
    flex-direction: row;
    transition: all 0.3s ease;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 40px;
    left: 0px;
    width: 100%;
    
    z-index: 999;
    background-color: transparent;
}

.navigation-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 241px;
    width: 1488px;
    height: 47px;
    transition: all 0.3s ease;
    color: #fff; /* 默认文字颜色为白色 */
}

/* 左侧区域样式 */
.top_nav_left {
    width: 160px;
    height: 47px;
    display: flex;
    color: rgba(255, 255, 255, 1);
    font-family: YouSheBiaoTiHei;
    align-items: center;
    font-size: 36px;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 0px;
    text-align: left;
}

.Home_logo-img {
    width: 60px;
    height: 60px;
    margin-left: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* 中间文字样式 */
.top_nav_middle {
    width: 287px;
    height: 47px;
    color:rgba(255,101,32,1);
    font-family: YouSheBiaoTiHei;
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 2.94rem;
    text-align: left;
}

/* 右侧区域样式 */
.top_nav_right {
    display: flex;
    align-items: center;
    width: 133px;
    height: 47px;
    color: rgba(255, 255, 255, 1);
    font-family: YouSheBiaoTiHei;
    font-size: 36px;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 0px;
    text-align: left;
}

.icon-img {
    width: 28px;
    height: 28px;
    cursor: pointer;
    transition: all 0.3s ease;
}

@font-face {
    font-family: 'YouSheBiaoTiHei';
    src: url('../assets/YouSheBiaoTiHei.ttf');
    font-display: swap;
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
    