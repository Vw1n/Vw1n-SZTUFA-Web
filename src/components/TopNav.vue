<template>
    <div class="top_nav">
        <div class="navigation-content">
            <div class="top_nav_left">
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

<style scoped>
.top_nav {
    width: 100vw;
    height: 61px;
    /* 可以添加导航栏背景色以便在各种背景下可见 */
    /* background-color: rgba(0, 0, 0, 0.5); */
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

@font-face {
    font-family: 'YouSheBiaoTiHei';
    src: url('..//assets/YouSheBiaoTiHei.ttf');
    font-display: swap;
}
</style>