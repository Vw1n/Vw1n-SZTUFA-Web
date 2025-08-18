<script setup>
import { useRoute } from 'vue-router';
import router from '@/router';

const route = useRoute();
const base = import.meta.env.BASE_URL;
const imgPath = '/';
const naviData = [
    { id: 0, title: '首页', icon: 'index', path: '/' },
    { id: 1, title: '赛事', icon: 'match', path: '/Match' },
    { id: 2, title: '社区', icon: 'community', path: '/Community' },
    { id: 3, title: '活动', icon: 'activity', path: '/Activity' },
    { id: 4, title: '校队', icon: 'schoolTeam', path: '/SchoolTeam' },
]
if (route.path === '/Match') {
    naviData[1].active = true;
} else if (route.path === '/Community') {
    naviData[2].active = true;
} else if (route.path === '/Activity') {
    naviData[3].active = true;
} else if (route.path === '/SchoolTeam') {
    naviData[4].active = true;
}
</script>

<template>
    <div class="navigation-content">
        <div class="navigation-item" v-for="(item, index) in naviData" :key="item.id">
            <router-link :to="item.path" class="navigation-link">
                <img :src="`${base}${imgPath}${item.icon}.jpg`" :alt="item.title" />
                <span>{{ item.title }}</span>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.navigation-content {
    /* 固定定位核心属性 */
    position: fixed;
    left: 50%;
    bottom: 30px;
    /* 固定高度 */
    height: 90px;
    /* 总宽度 = 剩余项宽度 + 最后一项宽度 */
    width: 90%;
    max-width: 500px; /* 最大宽度限制 */

    /* 水平居中修正 */
    transform: translateX(-50%);

    /* 导航栏样式基础 */
    display: flex;
    padding: 0;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 30px;
    z-index: 999;
    overflow: hidden;
}

/* 普通导航项样式 - 均分剩余空间 */
.navigation-item {
    flex: 1; /* 平均分配空间 */
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* 字体样式 */
    color: rgba(78, 99, 142, 1);
    font-family: ZiZhiQuXiMaiTi;
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1.13rem;
}

/* 图标样式 */
.navigation-item img {
    width: 35px;
    height: 35px;
    margin-bottom: 4px;
}

/* 链接样式 */
.navigation-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
}

@font-face {
    font-family: 'ZiZhiQuXiMaiTi';
    src: url('../assets/ZiZhiQuXiMaiTi.ttf');
    font-display: swap;
}

/* 响应式适配 */
@media (max-width: 375px) {
    .navigation-content {
        width: 90%;
    }

    .navigation-item {
        font-size: 12px;
        line-height: 16px;
    }

    .navigation-item img {
        width: 30px;
        height: 31px;
    }
}
</style>
