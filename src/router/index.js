import { createRouter, createWebHashHistory } from 'vue-router'

// 路由配置优化：规范路径命名与导航对应关系
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home.vue'),
    meta: { title: '首页' } // 添加页面标题元信息
  },
  {
    path: '/match', // 统一小写路径规范
    name: 'Match',
    component: () => import('@/components/Match.vue'),
    meta: { title: '赛事' } // 对应左侧导航"赛事"
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('@/components/Community.vue'),
    meta: { title: '社区' }
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('@/components/Activity.vue'),
    meta: { title: '活动' }
  },
  {
    path: '/school-team', // 采用kebab-case命名规范
    name: 'SchoolTeam',
    component: () => import('@/components/SchoolTeam.vue'),
    meta: { title: '校队' }
  },
  {
    path: '/calendar',
    name: 'MatchCalendar',
    component: () => import('@/components/MatchCalendar.vue'),
    meta: { title: '赛程' } // 对应左侧导航"赛程"
  },
  // 添加404页面路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/', // 未匹配路径重定向到首页
    name: 'NotFound'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 配置滚动行为：切换页面时滚动到顶部
  scrollBehavior() {
    return { top: 0 }
  }
})

// 全局路由守卫：设置页面标题
router.beforeEach((to) => {
  document.title = to.meta.title ? `校园足球 - ${to.meta.title}` : '校园足球'
})

export default router
