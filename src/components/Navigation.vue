<script setup>
import { useRoute } from 'vue-router';
import { Dock, DockIcon, DockSeparator } from '../components/ui/dock';
import { Icon } from "@iconify/vue";


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
        <!-- <div class="navigation-item" v-for="(item, index) in naviData" :key="item.id">
            <router-link :to="item.path" class="navigation-link">
                <img :src="`${base}${imgPath}${item.icon}.jpg`" :alt="item.title" />
                <span>{{ item.title }}</span>
            </router-link>
        </div> -->
        <Dock direction="middle">
            <DockIcon v-for="(item, index) in naviData" :key="item.id" class="flex-1 flex justify-center px-3">
                <router-link :to="item.path" class="navigation-link group">
                    <img :src="`${base}${imgPath}${item.icon}.jpg`" :alt="item.title"
                        class="dock-img h-12 w-auto object-contain transition-all duration-200 group-hover:scale-110 group-hover:brightness-110" />
                </router-link>
            </DockIcon>
        </Dock>
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
    max-width: 500px;
    /* 最大宽度限制 */

    /* 水平居中修正 */
    transform: translateX(-50%);

    /* 导航栏样式基础 */
    display: flex;
    justify-content: center;
    z-index: 999;
}

.dock-img {
    width: 35px;
    height: 35px;
}

@font-face {
    font-family: 'ZiZhiQuXiMaiTi';
    src: url('../assets/ZiZhiQuXiMaiTi.ttf');
    font-display: swap;
}
</style>
