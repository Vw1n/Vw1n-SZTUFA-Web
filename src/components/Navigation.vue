<script setup>
const base = import.meta.env.BASE_URL;
const imgPath = '/';
const naviData = [
    { id: 0, title: '首页', icon: 'index' },
    { id: 1, title: '赛事', icon: 'match' },
    { id: 2, title: '社区', icon: 'community' },
    { id: 3, title: '活动', icon: 'activity' },
    { id: 4, title: '校队', icon: 'schoolTeam' },
]
</script>

<template>
    <div class="navigation-content">
        <div class="navigation-item" v-for="(item, index) in naviData" :key="item.id">
            <div class="navigation-link">
                <img 
                    :src="item.icon === 'schoolTeam' ? `${base}${imgPath}sztu_logo.png` : `${base}${imgPath}${item.icon}.jpg`" 
                    :alt="item.title" 
                />
                <span>{{ item.title }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navigation-content {
    position: fixed;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    width: 90%;
    max-width: 500px;
    height: 90px;
    display: flex;
    background-color: #fff; /* 导航栏底色设为白色 */
    border-radius: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 999;
    overflow: hidden;
}

.navigation-item {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(78, 99, 142, 1); /* 统一文字颜色，不使用橙色 */
    font-family: ZiZhiQuXiMaiTi;
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1.13rem;
}

.navigation-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
    pointer-events: none; /* 禁用交互 */
}

.navigation-item img {
    width: 35px;
    height: 35px;
    margin-bottom: 4px;
    object-fit: contain;
}

/* 校队图标保持特殊尺寸 */
.navigation-item:last-child img {
    width: 38px;
    height: 38px;
}

@font-face {
    font-family: 'ZiZhiQuXiMaiTi';
    src: url('../assets/ZiZhiQuXiMaiTi.ttf');
    font-display: swap;
}

@media (max-width: 375px) {
    .navigation-content {
        width: 90%;
        height: 80px;
        bottom: 20px;
    }
    .navigation-item {
        font-size: 0.8rem;
    }
    .navigation-item img {
        width: 30px;
        height: 30px;
        margin-bottom: 2px;
    }
    .navigation-item:last-child img {
        width: 32px;
        height: 32px;
    }
}
</style>
