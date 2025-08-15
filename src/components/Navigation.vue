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
        <div class="navigation-item" v-for="(item, index) in naviData" :key="item.id"
            :class="{ 'last-item': index === naviData.length - 1 }">
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

    /* 导航栏样式优化 */
    display: flex;
    padding: 0;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 999;
    overflow: hidden;
    /* 确保最后一项的圆角不溢出 */
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
    transition: all 0.3s ease; /* 添加过渡效果 */
}


/* 选中状态样式 */
.navigation-item.active:not(.last-item) {
    color: #ff6520; /* 使用橙色作为选中状态颜色 */
    background-color: rgba(255, 101, 32, 0.1); /* 轻微背景色 */
}


/* 最后一个item的样式 - 固定尺寸 */
.navigation-item.last-item {
    width: 100px;
    height: 90px;
    flex: none;
    /* 取消flex分配，使用固定尺寸 */
    background-color: rgba(255, 101, 32, 1);
    /* 右侧圆角 */
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}

/* 最后一个item的字体颜色 */
.navigation-item.last-item .navigation-link {
    color: white;
}

/* 图标样式 */
.navigation-item img {
    width: 35px;
    height: 35px;
    margin-bottom: 4px;
    transition: all 0.3s ease;
}

/* 选中状态的图标 */
.navigation-item.active img {
    transform: scale(1.1); /* 选中时图标略微放大 */
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

/* 悬停效果 */
/* .navigation-item:not(.last-item):hover {
    color: #1677ff;
} */

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

    .navigation-item.last-item {
        width: 80px;
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