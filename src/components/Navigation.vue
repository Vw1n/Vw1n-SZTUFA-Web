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
        <div class="navigation-item" v-for="item in naviData" :key="item.id">
            <img :src="`${base}${imgPath}${item.icon}.jpg`" alt="item.title" />
            <span>{{ item.title }}</span>
        </div>
    </div>
</template>

<style scoped>
.navigation-content {
    /* 固定定位核心属性 */
    position: fixed;
    left: 50%;
    bottom: 24px;
    /* 距离底部的距离，可根据需求调整 */

    /* 水平居中修正 */
    transform: translateX(-50%);

    /* 导航栏样式优化 */
    display: flex;
    gap: 30px;
    /* 导航项之间的间距 */
    padding: 12px 24px;
    background-color: rgba(255, 255, 255, 1);
    /* 半透明白色背景 */
    border-radius: 30px;
    /* 圆角效果 */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    /* 轻微阴影 */
    z-index: 999;
    /* 确保在其他内容上方显示 */
}

.navigation-item {
    /* 单个导航项样式 */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    color: #333;
    cursor: pointer;
}

/* 图标样式（如果使用） */
.navigation-item img {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
}

/* 悬停效果优化 */
.navigation-item:hover {
    color: #1677ff;
    /* 高亮颜色 */
}
</style>